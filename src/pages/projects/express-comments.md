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
title: Static Stretching App
slug: /static-stretching-app
description: Express comments system for this site
coverImage: ../../images/logo.png
icons:
    - { icon: "gatsby", link: "https://reactjs.org/", tooltip: "Built with Gatsby" }
    - { icon: "node", link: "https://reactjs.org/", tooltip: "Built with Node" }
visible: true
date: 2021-03-24
tags: [javascript, react, design, programming, full-stack]
---


I thought it would be fun to add commenting functionality, so I rolled up a simple Node/Express REST api. This was mostly a fun practice exercise, and allows me to retain full control over my system rather than relying on something like Disqus. Check it out on any blog post, and say hello!

This comments system features:
- REST operations
- Graceful error handling
- Password-protected admin panel


And was built with: 
- Node + Express
- Heroku
- PostgreSQL
- Standard express libraries like express-validator 