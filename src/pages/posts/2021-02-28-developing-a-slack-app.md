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

When I wrote a QA flow bot back in late 2019/early 2019, I found the process and the docs to be a bit confusing. It's less confusing now, though whether that is because I am a better developer or because the docs themselves are better is up for debate. I would bet a combination of the two factors.

While I wrote my first app using [Django](https://www.djangoproject.com/), this walkthrough will cover the Bolt framework. Side note, I wouldn't recommend using Django even if you don't want to use Bolt. For something small and lightweight like a Slack app I would highly recommend [Flask](https://flask.palletsprojects.com/en/1.1.x/). But I didn't know about Flask back then.

I'm assuming that you're already registered for Slack and have basic familiarity with Slack in general, as well as intermediate programming knowledge.

## Installation and Configuration
First up you'll need a Slack workspace and an app. I have my own development workspace that I can clutter up with bots to my heart's content. (Side note, that sentence makes me feel like Entrapta from the She-Ra reboot. I don't hate that.)

To create an app, follow the [Slack app creation guide](https://api.slack.com/start/overview#creating). Which will basically tell you to go to api.slack.com and click "Create App." Follow the prompts, and you'll have an app installed to your workspace. Don't select "distribute" for now, so you don't have to go through approval processes and the like.

Now you can access the app's dashboard by selecting it at https://api.slack.com/apps.

So far so good!

I would highly recommend enabling scoket mode for simple apps that won't be distributed. It replaces ngrok, which is nice, and means you don't have to provide callback urls and the like, or update them every time you shut ngrok down. Much more efficient. Note that the getting started guide linked below does walk you through getting set up with ngrok, which is very nice and wasn't true when I was first writing a Slack app! Such a headache figuring that out.

Now we can start adding interactivity.

[The Slack guide to Bolt is pretty handy](https://api.slack.com/start/building/bolt-python#start) for this, read along with that as well as this post.

The simplest thing that an app can do is post to a channel. To do a quick sanity check, you can go to Incoming Webhooks in the sidebar, activate webhooks with the toggle, and enter the curl command into your terminal. You should see your Hello World or whatever message in the channel you authorized.

If you see something like "no_service" in your terminal, make sure you've installed your app to your workspace; you'll need to reinstall your app occasionally as you add more permissions, and sometimes it doesn't get reinstalled properly.

Pretty neat!

Ok but curl isn't the best way to interact with your app, so let's make a directory for your project (recommend making a virtual environment also, but I'm not going to cover that here) and
    
    pip install slack_bolt


The most basic app boilerplate is

    from slack_bolt.adapter.socket_mode import SocketModeHandler
    from slack_sdk.errors import SlackApiError
    from slack_bolt import App


    SLACK_APP_TOKEN = app_token
    SLACK_BOT_TOKEN = bot_token

    app = App(token=SLACK_BOT_TOKEN)




    # Start your app
    if __name__ == "__main__":
        try:
            SocketModeHandler(app, SLACK_APP_TOKEN).start()
        except SlackApiError as e:
            print(f'Slack api error: {e}')

Pretty straightforward. Import app, import socketmode, initialize app with bot token, start socketmode and pass app and app token. For basic prototyping just pasting in your tokens is fine-ish, but definitely at least export them from an environment variable/keep them in your gitignore, set up a secrets.py, or something. 

Run it with python app.py and you should see a message that the app is running.

*Note: app tokens start with "xapp-" and bot tokens start with "xoxb-"*

But of course it doesn't do anything. To do stuff, you'll need to give some permissions and/or add some shortcuts, and/or subscribe to some events. The getting started guide walks you through the process for that (it's mostly just navigating to the right spot in your app dashboard and toggling the right toggles/selecting the right things).

[Adding shortcuts](https://api.slack.com/interactivity/shortcuts/using)

Now here's where it gets a little squirrely. I appreciate the security-minded SRP of splitting up the permissions. But it can definitely be annoying trying to figure out exactly which permissions and subscriptions are necessary for a given action.

Also maybe it's just me, but I definitely spent a fair amount of time trying to figure out how to indicate that I wanted, for example, to read messages in a private channel in my app.




--------
Useful links:

[Shortcut Payload Reference Guide ](https://api.slack.com/reference/interaction-payloads/shortcuts)

[The Slack guide to Bolt](https://api.slack.com/start/building/bolt-python#start)