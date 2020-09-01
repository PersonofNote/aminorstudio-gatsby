---
posttype: post
date: 2020-05-08
author: A Person of Note
title: Focus-Within for Accessibility
published: true
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [css, tips, tricks, accessibility, web development]
---

Accessibility is becoming a highest-priority concern in web development, which is excellent. The internet is possibly the greatest tool that we've ever invented, and everyone should be able to have access to it.

This means considerations like not hiding information from screen readers and keyboard navigation via hidden or display:none attributes. But every site seems to have a dropdown menu. And if you can't hide elements, how do dropdowns work?

There's a CSS selector that I don't see used in dropdown menus very often, which is surprising to me. A shocking number of sites just don't even attempt it. It's become a bit of a habit of mine to tab through the top menu whenever I'm on a site with a header dropdown, just to check. Try it, and you'll be amazed. (Disclaimer: Dependent on your threshold for amazement. "Mildly interested" is also a likely result.)

The selector is focus-within, and it works the same as hover or active. Just add 

```
:focus-within {
    /*styles*/
}
```

For my site, I have chosen to fold the menu into a dropdown on scroll. (Note that this is only on desktop; on mobile, the menu overlaps content too much for that treatment.) I use absolute positioning to place the menu far above the visible document. Then, on either focus-within or click, I animate both the opacity and the top value so that the menu drops down, not from hidden, but from off the top of the screen. For this project it ended up looking nice to animate it with a negative delay, so the animation starts most of the way through. This keeps the element from visibly zooming in from above behind my small logo. If you have a top bar or something else that you can place the dropdown menu behind, this won't be necessary.

There may be more robust ways of handling this, but it's a quick and easy way to add a lot of accessibility for very little overhead. Give it a try!
