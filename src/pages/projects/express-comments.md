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
title: Comments System
slug: /express-comments
description: Express/PostgreSQL comments system for this site
coverImage: ../../images/logo.png
icons:
    - { icon: "react", link: "https://reactjs.org/", tooltip: "Built with React" }
    - { icon: "node", link: "https://nodejs.org/en/", tooltip: "Built with Node" }
    - { icon: "postgres", link: "https://www.postgresql.org/", tooltip: "Built with PostgreSQL" }
    - { icon: "heroku", link: "https://www.heroku.com", tooltip: "Backend deployed on Heroku" }
visible: true
date: 2021-03-24
tags: [javascript, react, design, programming, full-stack]
---


I thought it would be fun to add commenting functionality, so I rolled up a fairly simple Node/Express REST api. This was mostly a fun practice exercise, and allows me to retain full control over my system rather than relying on something like Disqus. Check it out on any blog post, and say hello!

This comments system features:
- REST operations
- Graceful error handling
- Password-protected admin panel
- Standard measures like rate limiting, validation


And was built with: 
- Node + Express
- Heroku
- PostgreSQL