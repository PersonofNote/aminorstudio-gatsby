---
posttype: post
date: 2021-05-02
author: A Person of Note
title: Developing a Fullstack App from Design to Deployment - API set up and basic concepts
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [javascript, react, design, tutorial, frontend]
---
*I'm working on a macro-tracking/nutrition tracking app because I quite frankly hate all the ones that exist. I don't like the emphasis on weight, I don't like the calorie-cutting defaults, I don't like the UIs. I hate them so much. So, I'm designing and building my own in the hopes that I will actually use it. In the process, I'm writing up posts about it to outline the process and hopefully help demystify some things!*

*I'm going to be talking about the tech used in general as well as specific terms, and focusing less on copypasta code and more on concepts. I figure it'll be more useful that way; after all, you're probably not trying to build a macro-tracking app. Or if you are, it's hopefully not going to look like my macro tracking app, because what's the point of that?*

-----

For this article I'm assuming that you've gone through the front and back end posts, and have at least a front end and a back end set up.

Next thing we're going to do is implement auth. You could also choose to implement the database first. Either way is fine; I chose to tackle auth first because I've done databases before, I haven't done Google login before, and that makes it more exciting. And, frankly, because I'm still thinking about and designing my schema. Yes, I already did the design phase. Yes, I'm indecisive, and am putting off making final db decisions as long as possible.

I chose to implement Google signin because just about everyone has a gmail account these days, and it keeps users from having to create yet another whole account with yet another whole password. I may add more options in the future, but for now this serves my needs really well, and allows me to not stay up late at night hoping I don't get popped and have my users' passwords strewn across the internet. (Because I know y'all are reusing them.)

I relied heavily on [this walkthrough](https://blog.prototypr.io/how-to-build-google-login-into-a-react-app-and-node-express-api-821d049ee670) (also linked under the further reading section) that has some gotchas. Feel free to follow along with just this one, or to cross-check me with theirs. Normally when doing tutorial stuff I like to have 2-4 tutorials open at once and kind of wander among them, and highly encourage you to do the same.

### Setting up the GCloud Project

First up, you need a google cloud account if you don't have one already. The account setup is really straightforward. You may have to provide a billing credit card (it's been several years since I created my account), but this project won't cost money unless it gets pretty big. I think like... 50k users per month, according to their [identity platform pricing doc](https://cloud.google.com/identity-platform/pricing), which I *think* applies here?

At any rate, definitely not expecting 50k users. So [create a new project](https://console.cloud.google.com/projectcreate), and then go to "configure Oauth screen."

If you're new to GCP/AWS/Azure, it can be a little overwhelming trying to find stuff. If you're lost, this amazingly designed and executed screenshot may help.

To configure the Oauth screen don't worry about the permissions too much right now. Just fill in the boxes with common-sense defaults. 

Next, go to Credentials (step 4), click "create credentials," and pick "Oauth client id." For application type, make sure to choose "web app" for the type, because that's what we're doing. Choose testing, and for the authorized origins and redirect url, enter http://localhost:3000/ because that's the standard port that Create React App uses.

Now when you go to the credentials screen you should see an entry under OAuth 2.0 Client IDs. Keep that client ID handy, we'll use it in a second.

Now fire up two terminals and cd into your front and back ends. You can do these next two steps in either order, it doesn't really matter. I chose to set up my endpoint first, and then set up the frontend to post to it.

### The Backend

In the backend terminal, install the official Google library for handling this sort of thing.

    npm i google-auth-library

Make sure to require it

    const { OAuth2Client } = require('google-auth-library')

And set up the client

    const client = new OAuth2Client(process.env.CLIENT_ID)

This will get the CLIENT_ID from the frontend later, where I will talk more about env variables.

Add an endpoint to your express app. It will look something like

    app.post("/auth/google", async (req, res) => {
    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();

    /** Database functions will go here **/

    res.status(201).json(name)
    })

Remembering that you can call that endpoint whatever you want, but /auth/google is a good choice because if you decide to implement other methods later, you can easily group them under /auth/:auth-provider.

Right now we don't have a database, so this won't really do much. But I did send back the name so that I have something to see on the front end and check that all is well.

### The Front End

In the frontend terminal, install

    npm i react-google-login

Import the library and shoved this component into my home component

    <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
    />  

#### Enviornment Variables
If you're not familiar with what that process.env stuff is, I would highly recommend reading up on environment variables and [environment variables in React specifically](https://create-react-app.dev/docs/adding-custom-environment-variables/).

For now, to access that variable you'll just make a new file in any text editor and type in:

    REACT_APP_GOOGLE_CLIENT_ID="your-client-id-here"

then save it as .env.local. (If you're on windows, you may have to select "no extension" for the filetype when you hit save.) If you used create-react-app to bootstrap your project, it knows to look for that file and look for variables that start with REACT_APP.

NOTE THAT THIS WILL NOT PROTECT YOUR SECRET IN THE BROWSER. As it says in the docs, the variables are embedded at runtime, and anyone who uses "inspect" will be able to see it. It's just so that you don't check your secret into github, and so that you can change up your app to easily work with another client id as needed.

If you don't feel like rabbitholing on all that, feel free to just paste in your google client ID for learning purposes. Just remember to replace it with a different string when you commit. It'll be a bit of a pain to keep doing that, and when you get fed up with it, you can come back to learning about environment variables!

So anyway, back to the main track.

Above the render function, create a function called "handleLogin" that looks like:

    const handleLogin = async googleData => {
    const res = await fetch("http://localhost:3001/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
        }),
        headers: {
        "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    // Do something with data
    }

Now this might look a little strange, but it's just a basic REST request. I'm just saying go to my api (the 'localhost' part will be replaced by the url of wherever it's hosted; I should use an environment variable to check if I'm in production or not, probably) and hit an endpoint called /auth/google. POST the googleData object to it. (If you want, you can add a log statement before the fetch function to examine what "googleData" is. I sure did!)

Now if you run `npm start` You should see a button in your component! When I did this I literally took everything else out of the page and then added a single div with a little styling, so it was just a lone button sitting in the middle of the page. If you click it, the familiar 'log in with google' pane should pop up. If you did the steps in the order I suggested, choosing one of the suggested email addresses should result in the name associated with the account being logged to the console on the front end.

Auth successful! But now that you have your user authed, what do you do? Persist the user with JWT tokens! Which might sound like an intimidating concept, but it's not too bad.


#### CORS errors
If you run into CORS errors, go into your back end and add
    const origin = {
    'http://localhost:3000/' : '*'
    }

and change your `app.use(cors())` to `app.use(cors(origin))`. This will tell your app to accept all ('*') requests from the port where your frontend is running.

Now, you may be thinking "Ah, * is a wildcard, yes. So I could just set it to accept * as origin and remove all CORS concerns!" And yes, that's true, but kind of defeats the purpose of CORS, doesn't it. Be very careful with setting "*" : "*", and if you do decided to do so, never do that in production.


### JWT Tokens

For right now we're just going to stick a user object into a variable on the server, because I want to talk about databases later, in another modular post. Don't deploy this code; this is just for learning purposes to show you how it works without muddling things up with a database for now. If you just scan the page and copy/paste the code, you're gonna have a bad time later.

Go back to the backend and add a global variable somewhere at the top level of your code
    let test_user = {}

Then within the authentication function, add the line:

    test_user = { name : name, email : email, picture : picture, token: jwt_token }

Again, this will be replaced later with a DB query that populates an object with a UUID and other nice things.

Add the function:
    function generateAccessToken(username) {
    return jwt.sign({id: username}, TOKEN_SECRET, { expiresIn: 60 * 60 });
}

Again, this is very simplistic data for right now. When we get to databases we'll add a real user id.

How you generate the TOKEN_SECRET doesn't really matter for the purposes of this tutorial.







<div style="height: 50px"> </div>
------------------------
***Further Reading***

[*How to build Google login into a React app and Node/Express API*](https://blog.prototypr.io/how-to-build-google-login-into-a-react-app-and-node-express-api-821d049ee670)

[*How To Use JSON Web Tokens (JWTs) in Express.js*](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)


