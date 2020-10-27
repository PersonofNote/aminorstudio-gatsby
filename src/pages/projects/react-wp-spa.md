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
title: React/Wordpress SPA
slug: /react-wp-spa
description: Sample Single-Page React App pulling from the Wordpress API
coverImage: ../../images/reactwp.png
icons:
    - { icon: github, link: https://github.com/PersonofNote/wp-react-demo, tooltip: "See the code on Github" }
    - { icon: react, link: "https://www.react.com", tooltip: "Built with React" }
    - { icon: wordpress, link: "https://www.wordpress.org", tooptip: "Powered by Wordpress" }
visible: True
date: 2020-02-05
tags: [on-github, react, javascript, wordpress, api, design, d3, single-page app, spa]
---
    
This React SPA utilizes Wordpress as a CMS/backend. I wrote a simple theme using React Router that can pull from an arbitrary Wordpress site. I also added support for D3 data visualizations, to practice utilizing the library in React.

This SPA features:
- Modern, decoupled frontend with familiar back end
- Clean, minimalist extensible design
- Bespoke styling

And was built with: 
- React (Create React App)
- React-Router
- D3.js
- Wordpress RESTful API