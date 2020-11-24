---
posttype: post
date: 2020-11-23
author: A Person of Note
title: Pixel Art SVGs, Spacedoods, and Greensock Animations
published: true
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [pixel art, svg, creative coding, python]
---


SVGs are so cool. Scalable, manipulatable bits of algorithmic goodness, super permissive, expressive, and they lend themselves to animation with functions. What's not to love?

Pixel art is so cool. Spare, minimalistic, art pared down to its constituent parts, requiring beautiful precision and ingenuity to make a spare and functional beauty from the heavy constraints. What's not to love?

One of my favorite bits of design is the pixelart Spacedood I created as the logo/mascot for [Spacepost](http://www.spacepost.io/), the art collective I sort of found myself co-founding in 2017. Side note and shameless plug, if you're ever in Venice Beach, CA, go check them out. They're still doing crazy art, science and tech in a warehouse art-studio/hackerspace. Good stuff.

But of course, the logo isn't all that scalable. I looked into SVGs at the time, but the whole point of SVG is to be smooth and crisp and not at all jagged. Definitely working at cross purposes with blocky pixel art. But I got it into my head that I really wanted to make a Spacedood that can be scaled up nicely and also animated and manipulated algorithmically. It definitely sacrifices a fair amount of efficiency, although I have some ideas on how to improve that, which I'll talk about later. For now efficiency isn't that big of a deal because I'm working with images that are well under 64x64 pixels.

## The Plan

I decided on a few iterative steps.

* Generate a 'bitmap' from 1x1 SVG rectangles appended to an SVG
    * This works with the magic of viewports. (Add link)
* Write a function that can take in a bitmap and use to generate the SVG
* Potentially optimize via techniques like combining nearest-neighbor pixels
    * This could look something like
        if pixel x touches pixels of the same color, combine into a polygon with a fill of that color
    * Potential problems include the fact that SVG strokes have a width, and you can't stroke inside a shape. Might be able to compensate by reducing the width, but I think the offset is different among broswers. Will cross this bridge at a later time.
* Potentially provide the option to group like colors
* Potentially add other quality of life enhancements like choosing the size, adding blank padding around the image, etc.

## The Execution

First, the shoot-from-the-hip hack 'em up.

I made a 5x5 pixelart alien reprsented as a two-dimensional array of 1s and 0s

    const alien = [ 
        [1,1,1,1,1],
        [1,0,1,0,1],
        [1,1,1,1,1],
        [0,1,0,1,0],
        [0,1,0,1,0]
        ]

I like to think of this part as the pencil sketch, where there's extraneous lines sometimes.

    function makeSVG(arr) {
        for (let i = 0; i < arr.length; i++) {
            y = i;
            x = 0;
            var row = arr[i]
            for (let j= 0; j < row.length; j++){
            x = j;
            if (row[j] === 1) {
                const pixel = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
                pixel.setAttribute('height', 1);
                pixel.setAttribute('width', 1);
                pixel.setAttribute('stroke', 'none');
                pixel.setAttribute('fill', 'blue');
                pixel.setAttribute('x', x);
                pixel.setAttribute('y', y);
                pixelCanvas.appendChild(pixel);
            }
            }
        }
        }


![ Alien 1 ](../../images/post-images/11-2020-svg-animation/alien.png)


Success! At large sizes, I was able to see grid lines between the rectangles, so I added a hairsbreadth of height and width. Side note, it does look the tiniest bit blurry in the screenshot, but if you look at the [demo](https://personofnote.github.io/dynamic-svg-scratchpad/) it's nice and crisp.

So far so good! Now, we turn to python, and the libraries pillow, numpy, and svgwrite to create a function I can run from the command line.

I want to be able to:
* Open a .png or .jpg with Pillow
* Convert it to an array with numpy
* Create an svg and append rectangles to it

# The Problems

My first attempt at combining the libraries ended up looking something like: 

    image = Image.open(bitmap)
        data = np.array(image)
        rows = data.shape[0]
        cols = data.shape[1]
        color = data.shape[2]

    dwg = svgwrite.Drawing('output.svg', size=(cols, rows), viewBox=(0, 0, cols, rows))
        for rows, cols, color in np.ndindex(data.shape):
            rgb_im = image.convert('RGB')
            rgb = rgb_im.getpixel((cols, rows))   
            #print(rgb)    
            for col in data[rows, cols, color] :
                if col != 0 :
                    print(col)
                    #dwg.add(dwg.rect(insert=(cols, rows ), size=(1, 1), fill="rgb" + str(rgb), stroke='none'))
                else:
                    pass
    dwg.save()

Which actually did create beautiful pixel-art SVGs... but they were huge. Like 900kb huge. So I really quickly checked on the number of rectangles, and I was getting something like 3000 for a 24x36px image. It took a minute to wrap my brain around the number of iterations that were happening, and ultimately I had to take a step back and just iterate normally over the array instead of using ndindex. I will definitely be revisiting this to make things more efficient, but for now I'm very pleased with the result.

The final function looks roughly like:

    def createSVG(bitmap) : 
        print("Making SVG")
        image = Image.open(bitmap)
        data = np.array(image)
        rows = data.shape[0]
        cols = data.shape[1]
        i = 0
        vbDimensions = ",".join(map(str, [0, 0, cols, rows]))
        dwg = svgwrite.Drawing('output.svg', size=(cols, rows), viewBox=vbDimensions)
        for x in data:
            i+=1
            j= 0
            for y in x:
                j+=1
                if y[3] != 0 :
                    colorArr = y[0:3].tolist()
                    colorStr = ",".join(map(str, colorArr)) 
                    fillColor = "rgb(" + colorStr +")"
                    dwg.add(dwg.rect(insert=(j, i ), size=(1.2, 1.2), fill=fillColor, stroke='none'))
                else:
                    pass
        dwg.save()
        print("Svg made")

Pretty hand little command-line tool, although I'm definitely already thinking about extensions and enhancements.

Just for fun, I decided to animate it a little bit. Now, I've long eschewed Greensock because, well, I don't want to add a whole library for just one animation, and besides, I know all about keyframes and easing functions, right? I know the principles of squash and stretch, and I'm an OK amateur animator in my own right!

Well, that's all fine well and good for my own personal small projects... but Greensock is really pretty much awesome. I know that is news to nobody but me.

So I gave in to Greensock, and for this animation I just grabbed all the squares and tweened them from opacity 0 and a random x and y value, staggered with some math based on the index. This particular function is 

      gsap.from(pixel, {opacity: 0, x: randomX, y: randomY, duration: 3 * (1 - i/1000), ease: Back.easeInOut.config(1.1) });

For deployment purposes I'd make a fancier animation, but pretty happy with it for a real quick proof of concept.

## The Outcome

<div style="width:100%;height:0;padding-bottom:25%;position:relative;"><iframe src="https://giphy.com/embed/SJfoy2PRyseorjVUnq" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/SJfoy2PRyseorjVUnq">via GIPHY</a></p>

As mentioned above, it does look a little bit blurry in the gif. 

Check out the demo on [github pages](https://personofnote.github.io/dynamic-svg-scratchpad/) to see it with crystal-clear edges!