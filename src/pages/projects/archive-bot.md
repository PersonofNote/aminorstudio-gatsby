---
# SCHEMA:
#   - project:
#      title:
#      image:
#      description:
#      icons:
#        - iconset:
#            icon:
#            link:
#            tooltip:
posttype: project
title:  Archive Bot for Slack
slug: /archive-bot
description: Bot that allows users to archive channels, but protects certain keywords and channels from being archived
coverImage: ../../images\project-images\archive-bot\archive-bot-icon.png
icons:
    - { icon: "slack", link: "https://slack.com/", tooltip: "Slack Bot" }
    - { icon: "node", link: "https://nodejs.org/en/", tooltip: "Built with Node" }
visible: true
date: 2021-06-10
tags: [javascript, slack, programming, slack bolt, slack app, slack bot]
---

When you get beyond a certain number of users in Slack, it's really easy for Slack channels to be mistakenly or incorrectly archived. One solution is to turn off archiving for everyone but admins, but this can lead to a huge number of requests and admin time being spent on archiving channels for users.

Ultimately it would be nice to allow users to archive channels while being able to restrict/protect a list. Since Slack does not have that functionality, I helped build an app for that.

This bot features:
- The ability to archive channels via a shortcut, a slash command, or a message that simply says "archive"
- The ability to protect channels from being archived
    - There is a restricted list of channels (such as #help-slack) as well as a fuzzier restricted keyword list (such as channels containing the word "announcement") that the bot will not archive
- Informative error handling and hometab documentation
- The bot auto-joins public channels
- When a channel is archived, a message is sent to a private channel for record keeping

And was built with: 
- Javascript/Node
- The Slack Bolt framework




