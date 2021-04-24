import React, { useState, useEffect } from "react";


function AllComments(props) {
  // For paginating later
  const slug = window.location.pathname.split('/')[3]
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreComments = () => {
    setPage(page + 1);
  };

  function fetchAllComments() {
    console.log("fetching")
    fetch(
      `https://aminorstudio-api.herokuapp.com/comments/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(response => {
        setComments(response)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }

  const toggleApprove = e => {
    e.preventDefault()
    const arr = (e.target.value.split(","))
    const id = arr[0]
    console.log(arr[1])
    console.log(typeof(arr[1]))
    const approved = (arr[1] === "false") ? true : false
    /*
    let approved;
    if (arr[1] === true) {
      approved = false
    }else {
      approved = true
    }
    */
    const response_body = {id, approved}
    console.log(approved)
    fetch(`https://aminorstudio-api.herokuapp.com/comments/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(response_body),
      })   
    fetchAllComments()
}


  const deleteComment = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    const id = e.target.value
    fetch(`https://aminorstudio-api.herokuapp.com/comments/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify(id),
        }
      })
    fetchAllComments()  
    
  }


  const show_length = 12

  useEffect(() => {
    fetchAllComments()
  }, [page]);

  return (
    <div style={{marginBottom: `2rem`}}>
      <h2> Comments </h2>
      {isLoading && <p> Loading comments...</p>}
      {(!isLoading && comments == undefined || comments.length < 1) && (<div>No comments yet </div>)}
      {comments.length > 0 && comments.map((c, index) => (
        <div key={index}style={{
            display: `flex`, 
            flexDirection: `row`,
            padding: `0.5rem`
            }}>
          {c && (
            <>
              <div style={{width: `40%`}}>
              {c.author} says: { c.text } on {new Date(c.post_date).toLocaleDateString()}
              <br/> posted to {c.posted_to}
              <br/> {c.approved.toString()}
              </div>
              <button value={[c.id, c.approved]} style={{marginRight: `1rem`}} onClick={toggleApprove}>{c.approved ? "Unapprove" : "Approve" }</button>
              <button value={c.id} onClick={deleteComment}>Delete</button>
            </>
          )}
        </div>
      ))}
      {comments && comments.length > show_length && (
        <button onClick={loadMoreComments}>Load More Commments</button>
      )}


    </div>
  );
}

export default AllComments