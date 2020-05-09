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
title: A Minor Studio
slug: /a-minor-studio
description: This website! Built with Gatsby/React
coverImage: ../../images/sketchpad.png
icons:
    - { icon: github, link: https://github.com/PersonofNote/wp-react-demo, tooltip: "See the code on Github" }
    - { icon: gatsby, link: "https://www.gatsby.com", tooltip: "Built with Gatsby/React" }
visible: True
date: 2020-05-05
tags: [ on-github, react, javascript, gatsby, grahql, design ]
---
    
I built this website in part to practice modern cloud deployment, and to learn GraphQL. The site was designed and built by me, and remains under development.

It took me a little while to wrap my head around GraphQL versus the REST API I am familiar with. Throughout this project I have come to appreciate the granularity of control that GraphQL gives me, and am excited to keep using it in future projects.

I chose to deploy the site on AWS rather than Netlify, Heroku, Github pages or something similar because I am currently teaching myself AWS and continous cloud deployment, and would prefer to work in an environment that is similar to something I would see in a large-scale deployment scenario.