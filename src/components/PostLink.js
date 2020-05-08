import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => 
{
    return (
  <div>
    <Link to={post.fields.slug}>
      <h2 style={{
        color:`#3e272b`
      }}>{post.frontmatter.title}</h2> 
      {post.frontmatter.date}
    </Link>
    <div>{post.excerpt}<a href={post.fields.slug}>Read more</a></div>
    <br/>
  </div>
)
}

export default PostLink


