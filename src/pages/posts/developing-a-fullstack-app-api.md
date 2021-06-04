---
posttype: post
date: 2021-05-02
author: A Person of Note
title: Developing a Fullstack App from Design to Deployment - API set up and basic concepts
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [javascript, react, design, tutorial, frontend]
---
*I'm working on a macro-tracking/nutrition tracking app because I quite frankly hate all the ones that exist. I don't like the emphasis on weight, I don't like the calorie-cutting defaults, I don't like the UIs. I hate them so much. So, I'm designing and building my own in the hopes that I will actually use it. In the process, I'm writing up posts about it to outline the process and hopefully help demystify some things!*

*I'm going to be talking about the tech used in general as well as specific terms, and focusing less on copypasta code and more on concepts. I figure it'll be more useful that way; after all, you're probably not trying to build a macro-tracking app. Or if you are, it's hopefully not going to look like my macro tracking app because what's the point of that?*

-----

If you haven't already, set up a folder to keep your whole project in, and then inside that, set up one to keep your backend in. I call mine backend, but I've seen api and other options.

First, in your backend folder, start a new project with npm init -y to accept all the defaults. Now you'll see a package.json file.

I go over package.json and automagic file generation/updating more in the front end article, so go check that out if you have questions!

In the meantime, let's get started. I'm using express for my app, so install it.

    npm install express

Now, you could use the starter generator, but that will generate a bunch of routes and views for you. If you want to do html templating all within the express app, that's all fine, but I want to have a headless api, completely decoupled from the frontend.

So instead, in an index.js file, I'll just import express, create an app variable and assign a port, and set the app to listen on it. I'll also set up a single endpoint.

    const express = require('express')

    const app = express()
    const PORT = 3001;

    app.get('/', (req, res) => {
        res.json({
            status: 200,
            message: "App running"
        });
    });


    app.listen(PORT, () => {
        console.log(`Our app is running on port ${ PORT }`);
    });

This is more or less the bare minimum to have an app. If you run npm start and go to port 3001 in the broswer, you'll see 
    {
        status: 200,
        message: "App running"
    }
as expected. I chose 3001 because create-react-app runs on port 3000 by default, and I don't want them to conflict when I'm running them both.

Don't put something like this into production, though! In practice, there's all sorts of libraries and middleware that's more or less required to make sure that your app doesn't get completely rocked.

At the very least to parse POST requests you'll need to install [bodyparser](http://expressjs.com/en/resources/middleware/body-parser.html) and [cors](https://expressjs.com/en/resources/middleware/cors.html)

And add the following to your index.js file:

    const bodyParser = require('body-parser')
    const cors = require('cors')

    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json()); 
    app.use(cors())


And now you have an app! It doesn't do much, but boy it sure exists! Good job. We're going to call it a day here until next time, when we'll start adding more endpoints and functionality in the form of Google authentication.


<div style="height: 50px"> </div>
------------------------
***Further Reading***

[*Build a Node.js, Express, & PostgreSQL REST API*](https://www.taniarascia.com/node-express-postgresql-heroku/#deploy-app-to-heroku)