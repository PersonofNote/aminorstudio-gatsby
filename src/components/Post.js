/**
 *  Component: Post
 *  Will take a set of project information
 *  Will include title, content, date, tags
 * 
 */

import React from "react"

class Post extends React.Component {
    render(){
    return(
        <article className = "post">
            <h2> {this.props.title}</h2>
            <p> {this.props.content}</p>
        </article>
    )
    }
}

export default Post