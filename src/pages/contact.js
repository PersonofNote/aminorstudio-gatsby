import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => {    
    const [state, setState] = useState({
        firstName: " ",
        lastName: " ",
    })

    const [ formSubmitted, setFormSubmitted ] = useState({
        hasSubmitted : false
    })

    console.log(formSubmitted)

    const handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        setState({
            [name]: value,
        })
        console.log(state)
    }

    const formURL = 'https://egwnethmxc.execute-api.us-east-1.amazonaws.com/Prod/submitForm';

    const handleSubmit = event => {
        event.preventDefault();
        let form = event.target
        // Capture the form data
        let data = {};
        Array.from(state).map(input => (data[input.id] = input.value));
        console.log('Sending: ', JSON.stringify(data));
        //submitResponse.innerHTML = 'Sending...'

        // Create the AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open(form.method, formURL, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        // Send the collected data as JSON
        xhr.send(JSON.stringify(data));

        xhr.onloadend = response => {
            if (response.target.status === 200) {
            form.reset();
            setFormSubmitted(true)
            console.log("Success")
            } else {
            //submitResponse.innerHTML = 'Error! Please try again.';
            console.error(JSON.parse(response));
            }
        };    
    }




    return (
        <Layout>
            <SEO title="Contact" />
            <div style={{
            height: `65vh`
            }}>
              <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
                { 
                    formSubmitted && <h2>Thank you!</h2>
                }
            </div> 
        </Layout>
    )
}

export default ContactPage