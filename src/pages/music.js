import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
    <div style={{
      height: `75vh`
    }}>
    <h1>Music</h1>
    <p>Once upon a time I was a violinist. I went to a special high school, played with Pinchas Zukerman under Larry Livingston, did workshops with Charles Castleman, and led a community college orchestra while I was in high school.</p>
    <p> Now I mostly play and music for fun.</p>


    <iframe src="https://feeds.soundcloud.com/users/soundcloud:users:113062723/sounds.rss" comp-type="feed" width="400" height="600"></iframe>
    </div>

    

    
  </Layout>
)

export default MusicPage
