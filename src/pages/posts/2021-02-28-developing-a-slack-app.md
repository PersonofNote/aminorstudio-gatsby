---
posttype: post
date: 2021-02-14
author: A Person of Note
title: Developing a Slack App
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [javascript, bolt, slack, slack development, design, development, node.js]
---

A ton of people use Slack. In fact, if you're reading this, I probably don't need to sell you on the merits of Slack. So let's just skip that part, and get to the part you're here for: app development.

When I wrote a QA flow bot back in early 2019, I found the process and the docs to be a little bit confusing. It's less confusing now, though whether that is because I am a better developer or because the docs themselves are better is up for debate. I would bet a combination of the two factors.

While I wrote my first app using (Django)[https://www.djangoproject.com/] (which I don't recommend; for something small and lightweight like a Slack app I would highly recommend [Flask](https://flask.palletsprojects.com/en/1.1.x/) if you're married to Python), this walkthrough will cover the Bolt framework.

I'm assuming that you're already registered for Slack and have a decent amount of comfort basic knowhow about creating Workspaces as well as some programming knowledge.

## Installation and Configuration
First up you'll need a Slack workspace and an app. I have my own development workspace that I can clutter up with bots to my heart's content.

To create an app, follow the [Slack app creation guide](https://api.slack.com/start/overview#creating). Which will basically tell you to go to api.slack.com and click "Create App." Follow the prompts, and you'll have an app installed to your workspace. Don't select "distribute" for now, so you don't have to go through approval processes and the like.

Now you can access the app's dashboard by selecting it at https://api.slack.com/apps.

So far so good!

Now we can start adding interactivity.

The simplest thing that an app can do is post to a channel. To get that up and running immediately as a quick sanity check, you can go to Incoming Webhooks in the sidebar, activate webhooks with the toggle, and enter the curl command into your terminal. You should see your Hello World or whatever message in the channel you authorized.

If you see something like "no_service" in your terminal, make sure you've installed your app to your workspace; you'll need to reinstall your app occasionally as you add more permissions, and sometimes it doesn't get reinstalled properly.

[Adding shortcuts](https://api.slack.com/interactivity/shortcuts/using)

[The Slack guide to Bolt is pretty handy](https://api.slack.com/start/building/bolt-python#start). I decided to use Python because I just like writing Python.


--------
Useful links:

[Shortcut Payload Reference Guide ](https://api.slack.com/reference/interaction-payloads/shortcuts)