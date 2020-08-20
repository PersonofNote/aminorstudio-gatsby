---
posttype: post
date: 2019-02-17
author: A Person of Note
title: Animated Map with D3js
published: true
coverImage: ../../images/self-portrait-photo.jpg
tags: [personal, introduction]
---

You know how when you're working on a big project it's easy to procrastinate? Especially if you're hitting a long or slow part? Well, I try to recognize that urge as an indicator that I need to take a break, but I also try to procrastinate by doing something else in the same vein so that I'm not completely switching  gears. In this case, that meant taking a quick break from some full-stack work to do a couple of fun map animations with [d3.js](https://d3js.org/)

You can [see the demo here](https://personofnote.github.io/animated-map-drawing/), on Github Pages. The dots are from a meteor strike dataset, and are there to complete the effect rather than to give deep information about meteors.

First, I got my world map. I highly recommend [geoJSON.io](https://geojson.io). You pick your features, and it generates a file for you to download. Then, D3 makes it pretty easy to open the file as JSON and append each path to an SVG.

Note that the following code isn't exactly what I used in my project; I removed enclosing functions and decorative attr selectors and the like for this example.

```const worldMapSVG = d3.select('#world-map');

const gMap = worldMap.append('g');

const projection = d3.geoMercator()
  .center([2, 47])
  .scale(100);

const t = d3.transition()
  .duration(750)
  .ease(d3.easeLinear);

  d3.json('/path/to/your/file.geojson', (data) => {
    gMap.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('class', 'landpath')
      .attr('d', d3.geoPath()
        .projection(projection))
  );
  });
  ```

The inclusion of the different projections alone would make me choose d3, by the way. It's definitely possible to make SVG maps without d3, but I've found it to be a great hammer for this particular nail.

For the drawing animation, I used this [excellent explanation of stroke-dash-array and stroke-offset](https://css-tricks.com/svg-line-animation-works/), and used D3's built-in easing functions. Pretty straight-forward! It's also really easy to do this using CSS keyframes like in the article; I just wanted to be idiomatic to the library.

Making the countries fly in and assemble from off the screen was a little more complicated, but not hugely so. To accomplish this effect, I applied a random translation to each path's x and y position. I made sure that the random number was off the screen with

  `Math.random() * (max - min) + min;`

Where the minimum value is window.innerWidth or window.innerHeight for x and  y, respectively, and the maximum is double the minimum. I choose double because it made a nice effect, but you could easily choose 1.5x or even 6x. It just depends on how far you want your pieces to travel, and how spread out you want them.
  