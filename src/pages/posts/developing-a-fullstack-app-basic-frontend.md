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

*I'm going to be talking about the tech used in general as well as specific terms, and focusing less on copypasta code and more on concepts. I figure it'll be more useful that way; after all, you're probably not trying to build a macro-tracking app. Or if you are, it's hopefully not going to look like *my* macro tracking app, what's the point of that?*

-----

I'm building my frontend with React and React-router. I briefly considered going for Next.js or another static site generator, but ultimately decided I didn't feel like it.

If you haven't already done so, create a directory (folder) to house your whole app (front and back ends), and then inside that, make a directory to house your frontend. I call mine "frontend," but I've seen "app" and other names as well. Whatever floats your boat. Name it "Fred" if you want to, although recognize that other developers will probably judge you for it if you have to work with them. And when you come back to your project in a couple of years to add a feature, you may have forgotten what Fred is and thoroughly confuse yourself. But these are your decisions to make as an autonomous adult. Power, responsibilty, etc.

### Create the app

So fire up a terminal, cd into that dir you just created and type

    npx create-react-app project-name

That will make the terminal go crazy for a minute and when it stops, it'll tell you to run `npm start` and then visit localhost:8000 to see your app. When you do, you'll see an app with some boilerplate stuff on it. It'll have a little spinning React logo and some links and stuff.

### A brief overview of what the heck all these files are

You'll also see that there's a whole bunch of files in your frontend directory now, like package.json and a node_modules directory. Create-react-app is basically a shortcut for automatically setting up webpack and babel as well as running `npm install` for standard packages; I'll do another post on them in the future, but for this project all you really need to know is:

- React is written in [es6](http://es6-features.org/#Constants). This is a modern version of Javascript, and it's great!
- Browsers don't like to read es6. This is less great, and means that you'll need a transpiler like Bable that will translate for you
- Babel is an example of a helpful package, library or add-on
- To use packages and add-ons, you find them on a directly like [npm](https://www.npmjs.com/) and install them using `npm install`
    - When you run that command, npm will fetch the package and store it in the node_modules folder
    - The package.json file tells your project which packages are installed and in some cases when to use them
    - The package.json file is automatically updated during package installation
    - The package-lock.json is autmatically generated as well. It tells the project what version of a package to use, because updates come out all the time and sometimes they break things
- React does this basic set up and installation for you so you don't have to worry about how to tell all these pieces to automagically work together
- Otherwise you'd have to install a tool like webpack to do this stuff, and webpack is powerful but can be a headache.


### Commands and scripts

The most important commands you'll need to remember are `npm start` and `npm build.` The start command creates a whole development environment for you. Spins up a server, runs scripts to watch for changes so that you don't have to constantly run commands or refresh the page every time you change something... it's great. The build command takes all of your code, your components and your app.js and everything, and translates it into browser-readable code. As part of this process, it will minify your code to make it as small and as fast as possible.

`npm install` is the command you'll use to add any additional packages that you want to use. For example, I'm using [React Router](https://www.npmjs.com/package/react-router) in my project, so I'll type `npm install --save react-router` and hit enter to have npm go get the package and install it. As mentioned above, this will change both my node_modules folder and my package.json file. I'm repeating this because I remember this took me a second to realize.

### File structure

#### Src

When developing an app, you'll be working in the src directory 95% of the time. All your components go here. I like to immediately make a components folder.

#### Public

The public folder houses your index.html file just like the ones you probably wrote when you were starting out. The react stuff goes into a script tag like normal. 

Note that you can make changes to the index.html file as well, like setting the meta tags and everything, same as you would with any other index.html file. But don't mess around with it too much if you don't know what you're doing!

#### Build

When you run `npm build,` React builds your optimized, production-ready version and stores it in the build directory. There won't be one yet because you haven't run this command yet; once you do, you'll see the folder and bunch of file inside it. If you poke around inside the build/static/js and css directories, you'll see files that looks like they have a bunch of garbled nonsense in it. That's your code, but optimized for the computer.






<div style="padding-bottom: 2rem"></div>