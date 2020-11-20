---
posttype: post
date: 2020-11-18
author: A Person of Note
title: Pixel Art SVG, Spacedoods, and Futuristic Animations
published: true
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [pixel art, svg, creative coding, ]
---

SVGs are so cool. Scalable, manipulatable bits of algorithmic goodness, super permissive, expressive, and they lend themselves to animation with functions. What's not to love?

Pixel art is so cool. Spare, minimalistic, art pared down to its constituent parts, requiring beautiful precision and ingenuity to make a spare and functional beauty from the heavy constraints. What's not to love?

One of my best bits of design is the pixelart Spacedood (patent pending[^1]) created as the logo/mascot for Spacepost, the art collective I sort of ended up co-founding in 2017. Side note and shameless plug, go check them out. They're still doing crazy art, science and tech in a warehouse art-studio/hackerspace in Venice Beach, CA. Good stuff.

But of course, the logo isn't all that scalable. I looked into SVGs at the time, but the whole point of SVG is to be smooth and crisp and not at all jagged. Definitely working at cross purposes with pixel art. But I got it into my head that I really wanted to make a Spacedood for the website that can be scaled up nicely and also animated and manipulated.

## The Plan

I decided on a few iterative steps.

* Algorithmically generate a 'bitmap' from 1x1 SVG rectangles appended to an SVG canvas
    * This works with the magic of viewports. (Add link)
* Write a function that can take in a bitmap and use that as the seed info to return the SVG
* Potentially optimize via techniques like combining nearest-neighbor pixels
    * This could look something like
        if pixel x touches pixels of the same color, combine into a polygon with a fill of that color
    * Potential problems include the fact that SVG strokes have a width, and you can't stroke inside a shape. Might be able to compensate by reducing the width, but I think the offset is different among broswers. Will cross this bridge at a later time.


## The Execution

First, the shoot-from-the-hip hack 'em up.

I made a 5x5 pixelart alien reprsented as a two-dimensional array. If this works, I'll switch to a different language so that I can operate on actual bitmaps, but this worked for a wireframe.