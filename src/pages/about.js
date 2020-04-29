import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientsList from "../components/ClientsList"
import "../components/about.less"

const clientsList = [
  {
    "name" : "Meals on Wheels",
    "image" : "../../static/meals-on-wheels-logo.png",
    "link" : "https://www.mealsonwheels.org"
  },
  {
    "name" : "Apple",
    "image" : "../../static/iphone-11-invite.jpg",
    "link" : "https://www.apple.com"
  },
  {
    "name": "IB.TC",
    "image": "../../static/ibtc-logo.png",
    "link" : "https://ib.tc"
  },
  {
    "name" : "The U.S. Grains Council",
    "image": "../../static/grains-logo.png",
    "link": ""
  },
  {
    "name": "The American Home Appliances Peeps",
    "image": "../../static/AHAM-Logo_Transparent.png",
    "link": "https://blog.aham.org"
  },
  {
    "name": "The American Institute of Architects",
    "image": "../../static/aia.jpg",
    "link": "https://aia.org"
  },
  {
    "name": "The American Geophysical Union",
    "image": ".../../static/images/agu.png",
    "link": ""
  },
  {
    "name": "Spacepost",
    "image": "../../static/spacepost.png",
    "link": "https://www.spacepost.io"
  }
]

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1> About Me </h1>
    <h2></h2>
    <ClientsList clients={clientsList}></ClientsList>
    <h2>FAQs</h2>
  </Layout>
)

export default AboutPage

