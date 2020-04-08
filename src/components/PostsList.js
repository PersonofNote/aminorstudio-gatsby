import React from "react"
import PostData from "../../content/posts.yml"

const PostsList = () => (
    <ul className='posts-container undecorated'>
      {PostData.map((data, index) => {
        return (
        <li className="post" key={`content_item_${index}`}>
          <article>
          <h2>{data.post.title}</h2>
          {data.post.content}
          </article>
        </li>
        )
      })}
    </ul>
)
export default PostsList