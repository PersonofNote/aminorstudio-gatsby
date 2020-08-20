---
posttype: post
date: 2020-08-16
author: A Person of Note
title: Fast AI Course 1—Setup
published: false
coverImage: ../../images/self-portrait-photo.jpg
tags: [personal, introduction]
---

This is a series of articles covering [fast.ai's](https://www.fast.ai/) machine learning course. Part notes, part review, part process writeup, mostly for me, but others might find it helpful as well.

**Why am I doing this?**

I'm simultaneously excited and terrified about the direction we're going with AI. I feel that we have a tremendous responsibility right now to set things up to go well, and not create a nightmarish dystopia... and I want to have some small part in helping to do that.

At the same time, I am a feral, self-taught dev. I thrive on teaching myself concepts, and machine larning is a natural next step.

Right now I feel that machine learning, while it's a buzzword that gets thrown around a lot, 

**Tl;dr: I want to teach robots to love. But first, I have to teach them to recognize cats.**

So, right into it. I decided to use the [Google Cloud Platform instructions](https://course.fast.ai/start_gcp.html) because that's the platform with which I have the most experience. (I've set up a few Jupyterhubs/Kubernetes clusters for data scientists in my day, although it's been a while.) As is classic with GCP, I immediately ran into hiccups with the directions, but nothing too difficult. A couple gotchas:

- For increasing the GPU quota, the filters look far different than they do in the instructions. That's ok; just click through the pages of quotas and search in page.

- When copy-pasting the instance creation code, don't forget to remove the trailing slashes first, or you'll get an error. Possibly an obvious thing, but if you're not already a coder you might get thrown off by the error. And make sure to remove the line breaks!


I did already have the cli installed from previous GCP explorations, so I didn't go through the whole Ubuntu terminal process.
