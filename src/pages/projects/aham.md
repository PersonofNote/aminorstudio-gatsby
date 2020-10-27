---
# SCHEMA:
#   - project:
#      title:
#      coverImage:
#      description:
#      icons:
#        - iconset:
#            icon:
#            link:
#            tooltip:
posttype: project
title: AHAM blog
slug: /aham-blog
coverImage: ../../images/AHAM.png
description: Blog rebuild for AHAM
icons:
    - { icon: link, link: "https://blog.aham.org", tooltip: "Explore the site" }
visible: True
date: 2019-02-01
tags: [javascript, html, css, php, wordpress, web development, front end development,]
---

The Association of Home Appliance Manufacturers had a blog that simply showed the most recent posts in chronological order. They recieved a site with great expanded functionality and a much greater emphasis on images. The site is built in line with aham.org's branding, implemented from provided static mockups.

The updated blog site features:

- Customizable carousels
- Tag cloud filtering
- Related posts and subscription CTA in every article (no dead ends)
- A greater emphasis on sharability

And was built with: 
- PHP
- Wordpress RESTful API
- LESS, following the [BEM](http://getbem.com/naming/) naming convention 
- Tailwind.js
- jQuery
- Webpack/Babel