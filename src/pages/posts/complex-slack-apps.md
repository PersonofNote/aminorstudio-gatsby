---
posttype: post
date: 2021-02-14
author: A Person of Note
title: Developing a Complex Slack App
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [javascript, bolt, slack, slack development, design, development, node.js]
---

Today I'm talking about more complex workflows and processes in Slack. I recently built an app that listens for form submissions to in a private channel. When a message is posted by a specific bot user, the app parses that message, opens a spreadsheet, and checks for the info in the message. If no entry is found, the app DMs the user with a helpful message about the process, like where to find the form. If an entry is found, the app DMs another person with the information and instructions on next steps to keep the request going.

I thought it would be helpful for myself and perhaps others to walk through the process of handling files and branching flows in Slack Bolt. Part of the point of this post is to document my own process, because I'm starting to build a lot of Slack apps, and finding that I'm making some of the same mistakes more than once. Writing things down will help me cement the process so I stop wasting time getting caught in the same traps.

This post assumes that you've already built a couple of simple call-and-response Slack apps, and you know how to set up an app, get it running, and how to subscribe and respond to events. I'm assuming you've been through the initial setup guide and know how to ack() and stuff.

First up, permissions and events. I applaud the SRP considerations of splitting up permissions into really granular sections. But it's also easy to end up tearing your hair out while you try to remember the specifics. For example, it's important to note that when posting messages to a public channel, you use the 'channel' attribute from the payload. But for private channels, there's both 'channel_name' and 'channel_id,' and you need 'channel_id.'

Process:

First up, tested the response to messages. I want my app to respond to a bot, so I set the message matching to empty, and then filtered by user.

@app.message(re.compile(".*"))
define message_response():

--------
Useful links:

[Shortcut Payload Reference Guide ](https://api.slack.com/reference/interaction-payloads/shortcuts)