import React, { useState, useEffect } from "react";


function Comments(props) {
  // For paginating later
  if (typeof window !== `undefined`) {
    const slug = window.location.pathname.split('/')[3]
  }else{
    slug = ""
  }
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreComments = () => {
    setPage(page + 1);
  };

  const show_length = 25

  useEffect(() => {
    fetch(
      `https://aminorstudio-api.herokuapp.com/comments/${slug}`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setComments(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, [page]);

  return (
    <div style={{marginBottom: `2rem`}}>
      <h2> Comments </h2>
      {isLoading && <p> Loading comments...</p>}
      {comments == undefined || comments.length < 1 && (<div>No comments yet </div>)}
      {comments.length > 0 && comments.map((c, index) => (
        <div key={index}>
          {c && (
            <>
              <div style={{
                display: `flex`,
                flexDirection: `column`
              }}>
              <div><strong>{c.author}</strong></div>
              <div>{ c.text } </div>
              <span style={{color: `grey`, fontSize:`0.8rem`}}> posted on {new Date(c.post_date).toLocaleDateString()}</span>
              </div>
              <hr />
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

export default Comments