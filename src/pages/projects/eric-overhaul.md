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
title: ERIC Website Overhaul
slug: /eric-website-overhaul
description: Was the lead developer on a ground-up makeover for the ERISA committee's ERIC organization.
coverImage: ../../images/eric-splash.PNG
icons:
     - { icon: link, link: "https://eric.org", tooltip: "Explore the site" }
visible: True
date: 2019-06-20
tags: [javascript, html, css, php, wordpress, web development, front end development,]
# TODO potentially integrate tags and icons in some way to foolproof it a bit. Although I want to be able to
# add tags that don't have icons, so maybe not.
---
    
I was the lead developer for the [ERIC.org](eric.org) website overhaul in 2019. (Previous ERIC site available for comparison on [The Wayback Machine.](https://web.archive.org/web/20180315201843/http://www.eric.org/))

For this project, I was given static image designs. I designed as well as implemented all of the moving interactions; image treatments, animations, and so on.

Each page is broken down into a series of modular components that can be further customized as needed. These components are Gutenberg blocks written with Advanced Custom Fields, a powerful Wordpress plugin that assists with rapid development of blocks.

The amount of content handled by ERIC was a large challenge, and the complex filtering took the most time out of any of the features. All content from 2005 on was migrated from their old site, which used another CMS, to Wordpress.

It was my first client with thousands of articles, and a challenging but rewarding experience overall.