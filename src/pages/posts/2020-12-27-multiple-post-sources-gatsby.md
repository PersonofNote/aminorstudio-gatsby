---
posttype: post
date: 2020-12-22
author: A Person of Note
title: Rendering from Multiple Post Sources in React/Gatsby
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [wordpress, aws, deployment, webflow, cms, gatsby, javascript, react ]
---

# Blogging for Programmers and Also Artists

Personally, I really enjoy Gatsby's markdown templates. (This page is a markdown file rendered into a template, in fact!) But I also know that tech can be intimidating. There's a sense of mystery around it that can be really hard to overcome (I basically panicked the first time I typed something into the command line, which is pretty hilarious now).

We wanted the site to be friendly and approachable for artists and coders alike, and for non-technical people to be able to write about their own projects within Spacepost with minimal training. For me, markdown feels like minimal training, and I find that visual site builders take a lot more specific knowledge of where the options are. I hate using them at this point. But I know that is because I am already a programmer, and already have that specific skillset. I also know that it can be difficult to visualize how Markdown will translate to a finished page, and that writing Markdown can be as annoying an experience for someone else as using a page builder is for me.

_Random musing: I've read that supposedly that orchestral instrument training carries over well into computers because it trains the part of your brain responsible for being able to abstract symbols and pieces into a whole. For example, knowing your part and being able to... aurally visualize, for lack of a better term... how it fits into the whole, as well as being able to abstract from notes to sound, and from a score into a whole piece. I don't know how true that is, but I wonder if some of what I'm talking about is made easier by the early training in certain areas._

It takes all types, after all! So I explored several options for this, covered in another post. Suffice it to say that I set up a fairly standard headless CMS solution, and if you're interesting in doing something similar, you can pretty easily swap out your CMS of choice.

But I also wanted to leave room for fancy showcase pieces. Part of what I love about Spacepost is the potential for doing projects that just can't be covered by a standard image/excerpt/link format. For these I wanted to leave the option of creating bespoke React pages that could be interactive as needed.

And finally, I wanted to be able to make regular markdown pages for those of us who like it.

The following is my approach to aggregating posts from three sources: Markdown files in a template, one-off pages for fancy "showcase" projects, and CMS-based articles that could be written by anyone.

### Requirements

The projects collection will:

* Perform simple GET requests to consume a CMS' API and render project cards into a template
* Render project cards for all pages within the "featured-projects" directory
* Render project cards for all templated markdown pages within the "projects" directory

I decided to tackle the CMS first. For this example we went with Webflow, because the artists we had on hand were already more familiar with it than others. As outlined in the post about CMS selection, I also explored Wordpress, Gatsby CMS and a couple of others.

### Card Design

I knew I wanted a link to the project page, an image if there was one, the title, and perhaps a few sentences to pique some interest.

For flexibility's sake, I didn't want to depend too heavily on enforcing a specific page template. This is for my own sanity, but also to leave room for growth in the future. So I set up the project to search for the first H1 tag (Yes, I know in best practice there should only be one H1. I'm also aware that most people do not seem to know that), the first paragraph tag, and the first image.
