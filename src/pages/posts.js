import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PostsList from '../components/PostsList';
import ProjectsList from '../components/ProjectsList'



const Posts = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Thoughts</h1>
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}></div>
    <div className="">
      <PostsList />
    </div>
  </Layout>
)

export default Posts
