---
posttype: post
date: 2021-04-25
author: A Person of Note
title: Developing a Fullstack App from Design to Deployment - Design and schematic planning
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [javascript, react, design, tutorial, frontend, backend]
---

I'm working on a macro-tracking/nutrition tracking app because I quite frankly hate all the ones that exist. I don't like the emphasis on weight, I don't like the calorie-cutting defaults, I don't like the UIs. I hate them so much. So, I'm designing and building my own in the hopes that I will actually use it. In the process, I'm writing up posts about it to outline the process and hopefully help demystify some things.

I'm going to be talking about the tech used in general as well as specific terms, and focusing less on copypasta code and more on concepts. I figure it'll be more useful that way; after all, you're probably not trying to build a macro-tracking app. Or if you are, it's hopefully not going to look like *my* macro tracking app, what's the point of that?

So let's dive on in!

First up is the design and planning stage. I know that I want my macro tracker to have:

### Features
Tracking for:
- Macros (fat/protein/carbs)
- Total calories
- Body measurements (chest/waist/hip)
- Water
- Vegetables

User profiles with:
- Secure registration
- Ability to set and update goals
- Ability to log out
- Ability to delete account

Monetization? (Not a focus for me)
- Google ads?
- A donate button?

PWA

Common food macros would be nice to have

### UX
- Focus on graphics and animation
- Tap-to-update where possible
- Uncluttered design with white space
- Bright colors
- Aggressively mobile-first

## Tech Stack
- Express backend
- Postgresql database
- Initial deployment on Heroku (but any cloud system should work)


So what does all this mean? Well, first off, I made myself a wireframe sketch.
[insert sketch]

Now that I can imagine what I want it to look like in my head, I need to make some tech decisions.

### Frontend
For the front end, I'm going with React. I'm basically making a single-page progressive web app, to shove all the buzzwords in there, so create-react-app will serve me nicely. 

Side note, does that mean I'm making a SPPWA or a SPAPWA? The latter is kinda fun to say, so I'm gonna call it that.

I'll also be using React-Router because, while it's a SPA, I actually want two-three pages. A registration/signup page, the main app, and possibly a whole page where the user can update their goals and settings. Not sure if that will be in a tray or a page at this time, even though I know what it will look like.

### Backend
There's a ton of backend frameworks but I'm going with Express because I feel like it. Any good framework will have the same basic principles though, so feel free to swap in your own if you're following this and hate writing in javascript! Would recommend Flask if you're into Python, for example. Something like Django or Laravel might be a little bit much for a project of this magnitude, but also, don't let your dreams be dreams. If your hammer is Laravel shaped, definitely hammer on this nail with it!

Database-wise, I've chosen to use Postgres. Is it overkill for a hobby app? Quite possibly. But I don't feel like messing around with Maria or SQLite when Postgres is really easy to deploy to Heroku and has a ton of features. Like with the back end, though, the concepts are the same regardless.

<div style="padding-bottom: 2rem"></div>