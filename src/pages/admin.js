import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import AllComments from "../components/AllComments"

// TODO: Form for password that passes the input to the rest of the page

const Admin = () => {  
    const [password, setPassword] = useState("")
    const [update, setUpdate] = useState()
    const [authed, setAuthed] = useState(false)

    const submit = e => {
        e.preventDefault()
        setPassword(e.target.value)
        console.log(password)
        const response_body = ({password})
        console.log(JSON.stringify(response_body))
        fetch(
            `https://aminorstudio-api.herokuapp.com/admin`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(response_body)
            }
          )
            .then(res => res.json())
            .then(response => {
             console.log(response.status)
             if (response.status == "success") {
                 setAuthed(true)
             } else {

             }
            })
            .catch(error => console.log(error))
    }


    if (authed){
        return (
            <Layout>
                <div style={{
                height: `65vh`
                }}>
                <>
                <div>
                    <AllComments />
                </div>
                </>
                </div> 
            </Layout>
        )
    }
    return(
        <Layout>
        <div style={{
        height: `65vh`
        }}>
        <form className="comment-form" onSubmit={submit} style={{
        display: 'flex',
        flexDirection: 'column',
        }}>
            <label> Password:
            <input value={password} onChange={e => {setPassword(e.target.value)}} type="text" name="user_name"/>
            </label>
            <button style={{marginTop: `1rem`}} type="submit">Submit</button>
        </form>
        </div> 
    </Layout>
    )
}

export default Admin