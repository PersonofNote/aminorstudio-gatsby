---
posttype: post
date: 2020-06-05
author: A Person of Note
title: Paper Airplane Flight Physics
published: true
coverImage: ../../images/self-portrait-photo.jpg
components: {
    videos: { [../../images/self-portrait-photo.jpg, ]
}
tags: [css, tips, tricks, accessibility, web development]
---

*Note: This post is originally from November 2017. I made a series of small games exploring interesting (to me) concepts, and am reproducing my old devlogs here.*

*The game itself is available [on Google Play](https://play.google.com/store/apps/details?id=com.AMinorStudio.Flight_of_the_Paperwing&hl=en_US) for the curious*

---

Writing about game development from the beginning of a short project seems like a good idea. So let's dive right in.

image
This month I'm working on a small game about a paper airplane. I didn't want to go the Flappy clone route – instead I wanted to utilize tilt controls, and experiment with capturing the feeling of flying an unusual aircraft in 2-d space.

The basics are pretty simple: the tilt of the phone affects movement along the y axis. Tilt right to move down, tilt left to move up. 

But I wanted more than just up-and-down movement, so I added some horizontal motion as well. That motion along the x axis is tied to motion along the y axis; I knew I wanted the player to be able to move 'forward'(to the right, on the phone screen) while diving. It's much more satisfying than staying still.

image
Note the changing “ytilt” value. That's the most important one. You can't see it in the screen share, but I'm tilting the phone almost 90 degrees to the right!

If the player can move forward, however, they have to be able to move back. So the craft moves 'backward' (to the left) while moving up. I was afraid this would be too weird and unrealistic, but with the moving background it looked more like the craft was braking and losing speed. Which is what I wanted.

To implement this, a more math-savvy friend suggested looking into easing functions, which was incredibly helpful. 

Specifically, here is the list I used.

I basically picked the feel I wanted, then used the tilt value of the device as 'p' and set the return to the value of acceleration(x-axis motion) or height(y-axis motion).

-Side note, I don't know if “height” and “acceleration” is the best way to name these values or if there is a more official naming convention when doing this type of modeling, but it's what made sense to me, so that's what they are.-

While testing, I quickly realized that while diving was really satisfying, nosing up wasn't. So I ended up using different easing functions for moving up/right vs moving down/left.

Down/left uses an ease-in function for x/acceleration and an ease-out for y/height. Up/right uses the inverse (ease-out for x, ease-in for y), but somewhat more complex, functions – in particular, the x/acceleration ease-out function is a sine-wave-based equation.

Some realism had to be sacrificed when moving up and back, as well: I ended up with a fairly extreme backward motion to enable the player to reach every area of the screen.

image
But, in a happy accident, I actually feel that it adds to the fantasy of flying a paper craft that would be lifted strongly upward by the wind at lower upward angles, and actually be blown backward when bellying in to the wind at a steep angle. I think it's a satisfying compromise between concept and functionality.

It's pretty close to what I wanted already, actually. It's reasonably fun to just fly around and collect score dots – even without the obstacle blocks. Which is always the goal, right?

Next steps include adding some momentum; an extreme dive should ideally have some kind of reaction, and not immediately return to neutral.

I'll also play around with altering the background speed when the player is moving up and back, probably slowing it a little bit; we'll see if that makes me nauseated.

 
