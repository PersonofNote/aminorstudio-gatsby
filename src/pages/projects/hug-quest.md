---
# SCHEMA:
#   - project:
#      title:
#      coverImage:
#      description:
#      icons:
#        - iconset:
#            icon:
#            link:
#            tooltip:
posttype: project
title: Hug Quest
slug: /hug-quest
coverImage: ../../images/Maze.png
description: Procedurally Generated Maze Game for two players, or a single player and a simple AI. Find the other entity and hug them.
icons:
    - { icon: github, link: "google.com", tooltip: "See on Google Play" }
visible: True
date: 2017-07-01
tags: [gamemaker, art, animation, artificial intelligence, pathfinding algorithms, design, games]
---
Hug Quest was one of the first games I made, with the goal of teaching myself the basics of pathfinding algorithms and valid procedural maze generation, as well as practicing sprite animation and tile generation.

The premise of the game is simple. Two players, or a player and a simple AI, are placed within an automatically generated maze, and must find each other. There are two types of items, a map and a compass, placed aroudn the maze that briefly give hints to the player as to the layout of the maze and the other player's wherabouts. When the two entities are within a certain distance of eachother and there is a clear path between them, the game plays a short cutscene where the entities come together and embrace.

The AI utilizes a simple A* algorithm combined with a basic Markov chain to control the desire to change directions, and wanders around aimlessly. Because it is not actively looking for the human player, I chose to make the AI a cat instead of a person. However, the cat does turn into a human when the win condition is satisfied; I considered drawing a new set of sprites/animation, but I liked the idea that you're looking for your friend who has been cursed to be a cat for reasons unknown.

It turned out to not be all that fun to actually play, so I stopped development, but it was never intended to be a commercial enterprise. It is available for download on itch.io for demonstration purposes.