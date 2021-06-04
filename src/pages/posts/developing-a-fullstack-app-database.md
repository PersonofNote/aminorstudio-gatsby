---
posttype: post
date: 2021-04-25
author: A Person of Note
title: Developing a Fullstack App from Design to Deployment - Database Design and Implementation
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [javascript, react, design, tutorial, frontend, backend]
---
*I'm working on a macro-tracking/nutrition tracking app because I quite frankly hate all the ones that exist. I don't like the emphasis on weight, I don't like the calorie-cutting defaults, I don't like the UIs. I hate them so much. So, I'm designing and building my own in the hopes that I will actually use it. In the process, I'm writing up posts about it to outline the process and hopefully help demystify some things!*

-----

I know I'll be using Google auth. So when I do the google auth, I check if a user exists. If not, INSERT user.

Next, each user will get a field that will periodically refresh, prompting them to set up their macros. If it's the first time/a new setup, it won't let you skip. Do I want to do this in an onboarded flow? Like... if stale_data == NULL go through flow? Then when the user logs in, check if it's been 3 months and prompt them to update with a skip button?

So we know we want to have a user who has:
google info (duplicate or pull from?)

It looks like you need to provide the token with every request.




<div style="padding-bottom: 2rem"></div>