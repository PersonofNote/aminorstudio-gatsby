import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientsList from "../components/ClientsList"
import "../components/about.less"

// Icons imports
import IconWordpress from "../components/icon-components/IconWordpress"
import IconPhp from "../components/icon-components/IconPhp"
import IconLaravel from "../components/icon-components/IconLaravel"
import IconHeroku from "../components/icon-components/IconHeroku"
import IconJs from "../components/icon-components/IconJS"
import IconReact from "../components/icon-components/IconReact"
import IconD3 from "../components/icon-components/IconD3"
import IconNode from "../components/icon-components/IconNode"
import IconWebpack from "../components/icon-components/IconWebpack"
import IconSass from "../components/icon-components/IconSass"
import IconDjango from "../components/icon-components/IconDjango"
import IconBootstrap from "../components/icon-components/IconBootstrap"
import IconTailwind from "../components/icon-components/IconTailwind"
import IconCSS3 from "../components/icon-components/IconCSS3"
import IconHTML from "../components/icon-components/IconHTML"
import IconDrupal from "../components/icon-components/IconDrupal"
import IconApache from "../components/icon-components/IconApache"
import IconPython from "../components/icon-components/IconPython"
import IconAWS from "../components/icon-components/IconAWS"
import IconGoogleCloud from "../components/icon-components/IconGoogleCloud"
import IconGatsby from "../components/icon-components/IconGatsby"


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
    "image" : "apple-logo.png",
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
      "name": "The Finishing Trades Institute",
      "image": "fti-logo.png",
      "link": "https://ifti.edu/"
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
    "name": "Association of Home Appliance Manufacturers",
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
  {
    client : {
    "name": "IB.TC",
    "image": "ibtc-logo.png",
    "link" : "https://ib.tc"
    }
  },
  {
    client : {
    "name": "Spacepost",
    "image": "spacepost.png",
    "link" : "https://spacepost.io"
    }
  },
 
]

const AboutPage = () =>{
  const [entered, setEntered] = useState(false);
  return (
 
  <Layout>
    <SEO title="About" />
    <h2> Clients </h2>
    <ClientsList clients={clientsList} />
    <h2>Tech</h2>
    <section className="section-tech">
      <div className="tech">
        <h3> Javascript </h3>
          <IconJs/>
          <IconReact/>
          <IconD3/>
          <IconGatsby/>
      </div>
      <div className="tech">
        <h3> HTML/CSS </h3>
          <IconHTML/>
          <IconCSS3/>
          <IconBootstrap/>
          <IconTailwind/>
      </div>
      <div className="tech">
        <h3> Python </h3>
          <IconPython/>
          <IconDjango/>
      </div>
      <div className="tech">
        <h3> PHP </h3>
          <IconLaravel/>
          <IconWordpress/>
          <IconDrupal/>
      </div>
      <div className="tech">
        <h3> Development Tools </h3>
          <IconWebpack/>
          <IconSass/>
          <IconApache/>
      </div>
      <div className="tech">
        <h3> Cloud Deployment </h3>
          <IconAWS/>
          <IconGoogleCloud/>
          <IconHeroku/>
      </div>
    </section>

     
  </Layout>
)
  }

export default AboutPage

