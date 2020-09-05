---
posttype: post
date: 2020-09-05
author: A Person of Note
title: It's Hard to Make a Benevolent Robot, But at Least We've Known That for Over 2000 Years (Fast AI Course Lesson 3)
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [machine learning, fastai]
---


*This is part of a series of articles covering [fast.ai's](https://www.fast.ai/) machine learning course. Part notes, part review, part process writeup, mostly for me, but also for anyone who's interested.*

-----

## Ethics in Robots

In Fastai lesson 3, we're told to start blogging about the process. So that's validating. 

Lesson 3 is in two distinct parts, so I will be writing two posts. The first half of this lesson is largely about ethics, and I'm glad that we're touching on this early. I'm not going to regurgitate the suggestions and lessons here. Instead, I'm going to offer my own thoughts and perspective, because it's something I think about a lot, and is a lot of my motivation behind starting this course.

There's this idea in programming that a computer is a mindless genie. It gives you precisely what you ask for, and you must therefore give it exact instructions when you make a wish. (Like the classic fairytale monkey paw/wish with a price/deal with the devil, only without the actual ill intent.) Phrasing is everything in programming.

While this is often frustrating to beginner programmers ("if it knows I'm missing a semicolon, why can't it just add the semicolon?"), this is actually a very good thing, and there have been many articles (and no small amount of sci-fi, less directly) written on the dangers of computers trying to be too helpful, and trying to make inferences/proactively make users happy instead of following instructions precisely.

(I am a strong proponent of the idea that the end goal of a machine should be to take my commands and execute them, not to anticipate my needs or to ensure my happiness.)

Howeer, machine learning turns this idea of precision on its head. As the fastai lessons explain early on, there is no way to cover all the edge cases to teach a program how to identify a cat, so you have to let it teach itself. This allows for huge advances that wouldn't otherwise be possible. But for a person like me, who is used to a computer doing exactly and only what it is told to do, it's unsettling that by its nature, an ML model is a bit of a black box. (Although it will become less so as the course advances.)

Additionally, machine learning is subject to the same biases and cultural feedback loops that humans are. This may sound obvious since we're the ones building the machines, but if I had a nickel for every programmer I've heard suggest that we put a benevolent AI in charge...

Side note, if you are reading this and you feel called out, I recommend reading The Republic by Plato. There is a lot of art that covers this topic, but I always recommend The Republic because it does such a good job of outlining the hopes and challenges of putting a specially-trained intelligence in charge of everyone, and it's also a really good reminder that these problems aren't new or novel, and neither are the solutions we've considered. We're thinking about benevolent AI instead of philosopher kings raised specifically to act like benevloent AI, but the base thought experiment has been the same for many thousands of years.

Fastai lesson 3 offers some solid practical suggestions on how to reduce bias in training to produce better results as well as more fair ones. Consulting experts, making sure to gather balanced data sets and being mindful of bias don't just make for more ethical programs, they make for more effective ones. As outline in the lesson, if all your data on healthy skin is modeled on young, white models touching their face, then your customer base is *extremely* limited. And that's just bad business sense even if you don't care at all about people.

I appreciate the emphasis on testing, refining, and rolling features out slowly over time. It's a refreshing counter to the dreaded move-fast-and-break-things model that by its nature leaves a trail of broken things in its wake. 

I'm really happy and encouraged to see these ideas becoming codified into the literature of learning, and I look forward to continuing this course.



Recommended Reading:

[*Building Machine Learning Powered Applications: Going from Idea to Product*](https://www.amazon.com/Building-Machine-Learning-Powered-Applications/dp/149204511X)

[*To Predict and Serve*](https://rss.onlinelibrary.wiley.com/doi/full/10.1111/j.1740-9713.2016.00960.x)

