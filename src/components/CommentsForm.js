import React from "react"


const CommentsForm =  ( props )  => {
    return( 
    <form className="comment-form">
      <h4>Leave a Comment</h4>

      <label>Name</label>
      <input type="text" name="name"/>
      <br />

      <label>Comment</label>
      <textarea name="comment" style={{resize: `none`}}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
    )
}

export default CommentsForm