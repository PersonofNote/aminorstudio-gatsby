---
# SCHEMA:
#   - project:
#      title:
#      image:
#      description:
#      coverImage
#      icons:
#        - {icon, link, tooltip}
#      visible: bool
#      date: Consider removing this...
#      tags: []
posttype: project
title: Grok Samson
slug: /grok-samson
description: Slack Bot integrating Google docs into a QA workflow
coverImage: ../../images/brock.jpg
icons:
    - { icon: django, link: "https://www.django.com", tooltip: "Built with Django" }
visible: True
date: 2020-01-15
tags: [python, google-docs, api, fullstack]
---
    
Grok Samson is a Slack bot QA tool, affectionately named after Brock Samson from [The Venture Bros.](https://en.wikipedia.org/wiki/The_Venture_Bros.) A user in the author channel can create a Google Drive in the company shared drive right from Slack. When the article is completed, Grok can be called upon to ping the editor channel to request QA. Editors can claim articles from Grok as well as mark them complete. Initially there was partial integration with the company's database before shifting towards using Google Drive and its API to create and QA articles.

These Showtime activities feature:

* CRUD endpoints
* Commands to create and Q/A articles in Google Drive from Slack

And was built with:

* Django/Python
* Google Drive API
