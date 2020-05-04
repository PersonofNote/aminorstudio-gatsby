import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => 
{
    return (
  <div>
    <Link to={post.fields.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
    <div>{post.excerpt}<a href={post.fields.slug}>Read more</a></div>
  </div>
)
}

export default PostLink


