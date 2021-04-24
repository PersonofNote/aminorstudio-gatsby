---
posttype: post
date: 2021-04-14
author: A Person of Note
title: Introducing, Comments!
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [gatsby, javascript, react, design, tutorial, component, frontend]
---

## Introducing... Comments!
I code less nowadays than I used to, and I missed building stuff, to be honest. So I decided to roll a simple comments system for this site, based on [The Gatsby Blog's article](https://www.gatsbyjs.com/blog/2019-08-27-roll-your-own-comment-system/) on the subject.

I'm not completely sure how I feel about implementing this; adding an ad hoc database does seem to detract a bit from the appeal of a static site generator. That being said, the extreme modularity makes up for it for me. This site is mostly for noodling, and noodle I shall.

For my own personal noodling site I'm pretty happy with my bolt-on comments form, and will be adding a bolt-on contact form next, using the same technique. But for anything more complicated, I'd probably want to have some better site architecture from the get-go, and would strongly consider using a CMS with comments or something like that if I wanted to stick with Gatsby.

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

## The Database

Highly recommend following [Tania Rascia's](https://www.taniarascia.com/node-express-postgresql-heroku/) steps to instance postgrsql and deploy to Heroku. I'm not going to fully recreate her steps here, but if you're vaguely familiar with the general process and just need a quick refresher without opening another tab, basically you need to run

    brew install postgresql
    brew services start postgresql
    psql postgres
    CREATE ROLE [user] WITH LOGIN PASSWORD ['password'];
    ALTER ROLE [user] CREATEDB
    \q
    psql -d postgres -U [user]
    CREATE DATABASE [db_name];
    \c [db_name]

to install, start postgresql, log in as root, create a non-root user that can make databases, log in as that user, create the database, and connect to it. From there you can create tables.

I decided the schema for my comments table would be:

    CREATE TABLE comments (
        ID SERIAL PRIMARY KEY,
        author VARCHAR(255) NOT NULL,
        text VARCHAR(255) NOT NULL,
        posted_to VARCHAR(255) NOT NULL,
        approved BOOLEAN DEFAULT FALSE NOT NULL
    )

I might alter this later to include the post datetime, but for right now this looks good enough. (I'm don't want to wrangle timezones, OK? There, I said it. This is my site, and I can be lazy if I want.)

### Caveats
* For my small site I decided to associate comments with post slugs (the posted_to field). This isn't the most robust practice, as post slugs can change in the  future. But since it's just me, I'm fine with that. Make sure to use some kind of UUID for larger sites or sites with multiple authors!

* As outlined in the Gatsby blog, one of the downsides to rolling your own comments is having to deal with moderation yourself. The 'approved' field is the *most basic* possible stab at moderation. 

If I left it at that, people (and bots, yikes) could leave all sorts of degenerative comments and then I'd have to go into the database every once in a while, actually read the entries, and decide whether or not to approve them on a case-by-case basis. 

Which would technically work, and for the number of comments I'm expecting, might even be OK for now. Of course then I'd have to rebuild the site (I haven't set up build hooks in AWS yet because I'm lazy) to get AWS to render them. But hey, that's just one more command, right? ...And this, my friends, is how tech debt is accrued! In inches and dribbles.

* In a future post I'll get into an auto-mod flow, which might be overkill for a site of this size/impact, (unless somehow this site becomes famous and/or internet popular...) but will be a fun exercise.

### A Note About PostgreSQL
I hadn't worked with PostgreSQL at all before this, and I like it! That being said...
Always remember to end your statements with a semicolon. This is obvious, I know. But I kept forgetting to do it when creating/dropping/modifying database tables, so I'm pretending that this is a perfectly normal problem to have and reminding you, the reader, as well. Thank you for your indulgence on this matter.



### Gotchas 



<div style="padding-bottom: 2rem"></div>
