import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientsList from "../components/ClientsList"
import "../components/about.less"

const clientsList = [
  {
    client: {
      "name" : "US Diplomacy Museum",
      "image" : "state-department-seal.png",
      "link" : "https://www.diplomacy.gov"
    }
  },
   {
    client : {
    "name" : "Apple",
    "image" : "iphone-11-invite.jpg",
    "link" : "https://www.apple.com"
  }
  },
  {
    client : {
      "name" : "Meals on Wheels",
      "image" : "meals-on-wheels-logo.png",
      "link" : "https://www.mealsonwheels.org"
    }
    } ,
  {
    client : {
    "name": "IB.TC",
    "image": "ibtc-logo.png",
    "link" : "https://ib.tc"
    }
  },
  {
    client : {
    "name" : "The U.S. Grains Council",
    "image": "grains-logo.jpg",
    "link": ""
    }
  },
  {
    client : {
    "name": "The American Home Appliances Peeps",
    "image": "AHAM-Logo_Transparent.png",
    "link": "https://blog.aham.org"
    }
  },
  {
    client : {
    "name": "The American Institute of Architects",
    "image": "american-architects-logo.jpg",
    "link": "https://aia.org"
    }
  },
  {
    client : {
    "name": "The American Geophysical Union",
    "image": "american-geophysical-logo.png",
    "link": ""
    }
  },
]

const AboutPage = () =>{
  const [entered, setEntered] = useState(false);
  return (
 
  <Layout>
    <SEO title="About" />
    <h1> Clients </h1>
    <h2></h2>
    <ClientsList clients={clientsList} />
    <h2>FAQs</h2>
  </Layout>
)
  }

export default AboutPage

