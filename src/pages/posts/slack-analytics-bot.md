---
posttype: post
date: 2021-02-14
author: A Person of Note
title: Beyond "Hello, World" Slackbots — Data Analytics in Slack
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [javascript, bolt, slack, slack development, design, development, node.js]
---

I am in the process of making a Slack Bot that allows users to run a whole suite of data analytics.

For this walkthrough I'm assuming some familiarity with full-stack development in general. Enough to follow the [first app setup guide](https://api.slack.com/start/building/bolt-python) for Slack Bolt, have an app set up, and be looking around at what you can do beyond sending funny messages.

I've chosen to use Python for this app, but the instructions should translate easily to your language of choice. If you aren't using Slack Bolt you might have to extrapolate a little bit more with the commands; Bolt has a lot of handy wrappers.

For non-distributed apps and prototyping, I like to use Websocket mode. To enable that, just go to your app, go to the "websocket" section and toggle the toggle. If you plan on distributing your app to a store or multiple workspaces, you'll have to set up response URLS and probably OAuth too, but these are beyond today's scope.

## The Concept

Slack does have some built-in analytics. Admins can export spreadsheets with columns like "last channel activity." But it's not really accessible, transparent, and it doesn't cover my needs.

## Help Channel Analytics

The first thing I implemented was channel-level analytics for help-style channels. Our convention is that when someone asks a question, whoever goes to answer it will react with an :eyes: reaction before engaging with the user for more information. Then, when the issue is resolved, the question is marked with a checkmark reaction. This is a commmon pattern across the org, and I needed to be able to visualize things like the percentage of questions asked and the average time to answer a question.

So, I created a slash command in the app. This is pretty straightforward - go to the "slash commands" section and follow the prompts.

### Concerns

Later, I was tasked with building in user-level analytics, which I am pushing back against a bit. I think at most it would be useful to see who answers the most questions, but I'm not sure that measuring the amount of time between eyes and checkmarks for a particular user is a helpful metric

--------
Useful links:
[Set up your first bot in Slack Bolt](https://api.slack.com/start/building/bolt-python)
[Shortcut Payload Reference Guide ](https://api.slack.com/reference/interaction-payloads/shortcuts)