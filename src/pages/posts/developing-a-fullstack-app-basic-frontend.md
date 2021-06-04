---
posttype: post
date: 2021-05-02
author: A Person of Note
title: Developing a Fullstack App from Design to Deployment - Frontend set up and basic concepts
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [javascript, react, design, tutorial, frontend]
---
*I'm working on a macro-tracking/nutrition tracking app because I quite frankly hate all the ones that exist. I don't like the emphasis on weight, I don't like the calorie-cutting defaults, I don't like the UIs. I hate them so much. So, I'm designing and building my own in the hopes that I will actually use it. In the process, I'm writing up posts about it to outline the process and hopefully help demystify some things!*

*I'm going to be talking about the tech used in general as well as specific terms, and focusing less on copypasta code and more on concepts. I figure it'll be more useful that way; after all, you're probably not trying to build a macro-tracking app. Or if you are, it's hopefully not going to look like my macro tracking app, because what's the point of that?*

-----

I'm building my frontend with React and React-router. I briefly considered going for Next.js or another static site generator, but ultimately decided I didn't feel like it. ¯\_(ツ)_/¯

If you haven't already done so, create a directory (folder) to house your whole app (front and back ends), and then inside that, make a directory to house your frontend. I call mine "frontend," but I've seen "app" and other names as well. Whatever floats your boat. Name it "Fred" if you want to, although recognize that other developers will probably judge you for it if you have to work with them. And when you come back to your project in a couple of years to add a feature, you may have forgotten what Fred is and thoroughly confuse yourself. But these are your decisions to make as an autonomous adult. Power, responsibilty, etc.

## Create the app

So fire up a terminal, cd into that dir you just created and type

    npx create-react-app project-name

That will make the terminal go crazy for a minute and when it stops, it'll tell you to run `npm start` and then visit localhost:8000 to see your app. When you do, you'll see an app with some boilerplate stuff on it. It'll have a little spinning React logo and some links and stuff.

## A brief overview of what the heck all these files are

You'll also see that there's a whole bunch of files in your frontend directory now, like package.json and a node_modules directory. Create-react-app is basically a shortcut for automatically setting up webpack and babel as well as running `npm install` for standard packages; I'll do another post on them in the future, but for this project I think all you really need to know is:

- React is written in [es6](http://es6-features.org/#Constants). This is a modern version of Javascript, and it's great! Humans like to write and read ES6 for a lot of reasons
- Browsers *don't* like to read es6. This is less great, and means that you'll need a transpiler like Babel that will translate for you
- Babel is an example of a helpful package/library/add-on
- To use packages, libraries and add-ons, you find them on a directory like [npm](https://www.npmjs.com/) and install them using `npm install`
    - When you run that command, npm will fetch the package and store it in the node_modules folder
    - The package.json file tells your project which packages are installed and in some cases when to use them
    - The package.json file is automatically updated during package installation
    - The package-lock.json is autmatically generated as well. It tells the project what version of a package to use, because updates come out all the time and sometimes they break things
- React does this basic set up and installation for you so you don't have to worry about how to tell all these pieces to automagically work together
- Otherwise you'd have to install and configure a tool like webpack to do this stuff, and webpack is powerful but can be a headache.


## Commands and scripts

The most important commands you'll need to remember are `npm start` and `npm build.` The `start` command creates a whole development environment for you. Spins up a server, runs scripts to watch for changes so that you don't have to constantly run commands or refresh the page every time you change something... it's great. The `build` command takes all of your code, your components and your app.js and everything, and translates it into browser-readable code. As part of this process, it will minify your code to make it as small and as fast as possible.

`npm install` is the command you'll use to add any additional packages that you want to use. For example, I'm using [React Router](https://www.npmjs.com/package/react-router) in my project, so I'll type `npm install --save react-router` and hit enter to have npm go get the package and install it. As mentioned above, this will change both my node_modules folder and my package.json file. I'm repeating this because it sort of shocked me when I first realized that files were actually being opened and changed automatically.

## File structure

### Src

When developing an app, you'll be working in the src directory 95% of the time. All your components go here. (I like to immediately make a components folder to keep things tidy.)

### Public

The public folder houses your index.html file just like the ones you probably wrote when you were starting out. The ones with `<script>` tags linking to your Javscript - when writing a React app you essentially build an empty HTML page, do a lot of stuff in Javascript, and then just link to the whole app in that classic `<script>` tag.

Note that you can make changes to the index.html file as well, like setting the meta tags and everything, same as you would with any other index.html file. But don't mess around with it too much if you don't know what you're doing!

### Build

When you run `npm build,` React builds your optimized, production-ready version and stores it in the build directory. There won't be one yet because you haven't run this command yet; once you do, you'll see the folder and bunch of files inside it. If you poke around inside the build/static/js and css directories, you'll see files that looks like they have a bunch of garbled nonsense in it. That's your code, but optimized for the computer.


## Basic starting app
Ok so let's make this pretty!

Immediately delete everything between `import react` and `export default app.` All of it. Why? Because Javascript is constantly in flux and things are changing all the time. You'll see that the boilerplate app code says `class App extends Component` and then the code is all in there. I am not using Class components in this project, I'm using hooks and functional components. If you're a beginner at this, don't worry about that too much right now, but highly recommend doing a deep dive into Class vs Functional components in React at some point.

Replace everything with 

    const App = () => {
        return (
        <>
            <Switch>
            <Route exact path='/' component={Home}/>
            </Switch>
        </>
        )
    }

If you hit save, it'll break because you haven't written and imported a home component yet, and we haven't imported the router pieces. That's ok, we'll do that now.

### React Router
React apps are single-page apps. You could argue that adding a router kind of defeats the purpose and is fighting the ecosystem. There's also a lot of pros and cons to SPAs that I highly recommend looking in to, but I'm not going to link a bunch of articles here because if you're anything like me, then you'll rabbithole on that, and right now we're building an SPA!

I decided to use the Router because I need two pages. I need a registration/login page and auth flow, and I need the app itself. Having two pages really simplifies that process without fighting the SPA-ness too much.

To use React Router, or any package or library, (including your own components!) you need to import it first, so add this line to the top of your app.js file:
    import { Route, Switch } from 'react-router-dom';

This might look a little bit confusing if you're really new to this. What's happening here is that I have this library, 'react-router-dom,' that has a bunch of tools and pieces in a kit. For this project, I only need two pieces from the kit, so I'm saying "hey computer, go get me a Route piece and a Switch piece," the same way that in real life I might see that there's a ton of wires and switches and donglies in a box, and I will take only the donglies that I need for my project.

Now you can use the pieces the same way that you would use a `<div>` or an `<h2>`.

What we're doing here is setting up a Switch, and inside that a Route. You're telling the computer "every time you see the path "/" render the Home page."

Side note, the 'exact path' flag is very powerful, because it allows you to dynamically access routes for, say, product pages and stuff. You would alter that flag to say "path matches," or something like that. 

But for our purposes we're good with exact paths, so don't worry about all that. For now I'm setting the path to "/" and telling the Route to render the Home component. This will change somewhat later when we implement auth. If you want to see more about the various options in react router... read the docs! Highly recommend always skimming the docs whenever you encounter a new library.

Now move to your pages folder and make a new file. This file is a component, I'm just putting it in a pages directory to keep things organized and readable. But it is the same as any other component.

Your component will have the same basic structure as your app (App is just a component—it's components all the way down!)

All components you will write for this project look like

    import React from 'react';
    import "whatever-bit" from "whatever-package"

    const component_name = (any_stuff_you_want_to_tell_it) => {  
        /* Functions, processing, logic */
        
        return (
            /* Visual things to render */
        )
    }

    export default component_name;

So for our Home component, we'll do
    import React, { useState, useEffect } from "react"

    const Home = () => {  
        
        return (
        <>
        <h1>Home Page</h1>
        </>
        )
    }

    export default Home

Now back in your app.js file, import that component by adding

    import Home from './pages/Home'

to the top of your file. If you save and refresh, you should see Home Page!

NOTE: the reason that you need to import it with the path './pages/Home' is because your component isn't in the node_modules folder. You can import external libraries and things with paths that look like `from 'react-router-dom'` because your project is already set up to assume that if there's not an explicit path, it's in node_modules.


At the end, my code looks like this:
In index.js:
    import React, { Component } from 'react';
    import { Route, Switch } from 'react-router-dom';
    import './App.css';
    import Home from './pages/Home';

    class App extends Component {
    render() {
        const App = () => (
        <div>
            <Switch>
            <Route exact path='/' component={Home}/>
            </Switch>
        </div>
        )
        return (
        <Switch>
            <App/>
        </Switch>
        );
    }
    }

    export default App;

In home.js:
    import React from "react"

    const Home = () => {  

        return (
        <>
        <h1>Home Page</h1>
        </>
        )
    }

    export default Home


And we've got the foundation laid for our app!









<div style="padding-bottom: 2rem"></div>