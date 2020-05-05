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
    <ClientsList clients={clientsList} />
    <h2>Tech Stack</h2>
      Make an internal rating system that sizes the tech based on how much you like it, lol
      XAMPP
      MySQL
      Javascript (React, Vue, Express)
      Python (Heroku)
      PHP (Laravel)
      Webpack
    <p>Lorem</p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit amet purus gravida. Eu turpis egestas pretium aenean pharetra magna ac. Senectus et netus et malesuada fames ac turpis egestas integer. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Mauris augue neque gravida in fermentum. Sem et tortor consequat id porta nibh venenatis cras sed. Eget egestas purus viverra accumsan in nisl. Interdum velit laoreet id donec ultrices tincidunt arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Tellus molestie nunc non blandit massa enim nec dui. Egestas quis ipsum suspendisse ultrices gravida. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Et ligula ullamcorper malesuada proin libero. A condimentum vitae sapien pellentesque habitant morbi tristique senectus.

    Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Volutpat odio facilisis mauris sit amet. Ac auctor augue mauris augue neque gravida in. Nam aliquam sem et tortor consequat id. Amet justo donec enim diam vulputate ut pharetra sit amet. Magna sit amet purus gravida quis blandit turpis. At augue eget arcu dictum varius duis at consectetur. Ut aliquam purus sit amet luctus venenatis lectus. Aliquet lectus proin nibh nisl condimentum id. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Interdum consectetur libero id faucibus nisl tincidunt. Convallis a cras semper auctor. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Diam maecenas sed enim ut sem viverra aliquet. Elit eget gravida cum sociis natoque penatibus et.

    Mauris cursus mattis molestie a iaculis at. In hac habitasse platea dictumst quisque sagittis purus. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Quis hendrerit dolor magna eget est. Integer eget aliquet nibh praesent tristique magna sit amet purus. Felis eget nunc lobortis mattis aliquam faucibus. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Eget velit aliquet sagittis id consectetur. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero id faucibus nisl tincidunt eget nullam non nisi. Varius duis at consectetur lorem donec massa sapien faucibus. Nunc sed blandit libero volutpat. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tempus imperdiet nulla malesuada pellentesque. Pretium fusce id velit ut tortor pretium viverra suspendisse.

    Tortor pretium viverra suspendisse potenti nullam. Nunc aliquet bibendum enim facilisis gravida neque. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Turpis in eu mi bibendum. Felis donec et odio pellentesque diam volutpat. Volutpat diam ut venenatis tellus in metus vulputate eu. Odio tempor orci dapibus ultrices in. Massa tempor nec feugiat nisl pretium. Egestas erat imperdiet sed euismod nisi porta. Enim facilisis gravida neque convallis a cras semper auctor. Luctus venenatis lectus magna fringilla urna porttitor. Molestie at elementum eu facilisis sed odio morbi.

    Feugiat pretium nibh ipsum consequat nisl vel pretium. Nunc mattis enim ut tellus elementum sagittis. Consequat mauris nunc congue nisi vitae suscipit. Nisl purus in mollis nunc sed. Sapien et ligula ullamcorper malesuada proin libero nunc. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Elit at imperdiet dui accumsan. Convallis aenean et tortor at risus viverra. Elit sed vulputate mi sit amet mauris commodo quis. Ornare massa eget egestas purus viverra accumsan. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Fames ac turpis egestas integer eget aliquet. Adipiscing enim eu turpis egestas pretium aenean pharetra. Sapien et ligula ullamcorper malesuada proin libero.
  </Layout>
)
  }

export default AboutPage

