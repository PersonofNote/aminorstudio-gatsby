---
posttype: post
date: 2021-04-14
author: A Person of Note
title: Adding Comments to Gatsby (Or Whatever)
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [gatsby, javascript, react, design, tutorial, component, frontend]
---

# Introducing... Comments!
I code less nowadays than I used to, and I missed building stuff, to be honest. So I decided to roll a simple comments system for this site, based on [The Gatsby Blog's article](https://www.gatsbyjs.com/blog/2019-08-27-roll-your-own-comment-system/) on the subject.

I'm not completely sure how I feel about implementing this; adding an ad hoc database does seem to detract a bit from appeal of a static site generator. That being said, the extreme modularity makes up for it. For my own personal site I'm pretty happy with my bolt-on comments form, and will be adding a bolt-on contact form next, using the same technique. But for anything more complicated, I'd probably want to have some better site architecture from the get-go, and would strongly consider using a CMS with comments or something like that if I wanted to stick with Gatsby.

## The Form

Went for the simplest form component possible to start with. I decided to use hooks in mine; if you prefer class components, the article above covers that pretty well.

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

<div style="padding-bottom: 2rem"></div>
