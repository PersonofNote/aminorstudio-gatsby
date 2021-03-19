import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const Privacy = () => (
  <Layout>
    <SEO title="Privacy Policy" />
  <h1>Privacy</h1>
  <h2>Data I Collect</h2>
  <p>
    I use Google Analytics to keep track of how many views my posts get. </p>
    <p>This is mostly to see what people like to read about and to get some idea about the reach I have when throwing text out into the void.
   </p>
   <p>
    It's also because seeing page view numbers go up releases dopamine.
  </p>
  <p>I collect page views, amount of time spent on page, and country. I don't collect any personally identifying information, and I have no intention of trying to sell this information to anyone.</p>
  <p>You can opt out by disabling cookies.</p>

   
  </Layout>
)

export default Privacy


