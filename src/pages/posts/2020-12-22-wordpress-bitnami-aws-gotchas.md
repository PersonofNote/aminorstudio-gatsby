---
posttype: post
date: 2020-12-22
author: A Person of Note
title: Bitnami Wordpress Deployment on AWS - What to Watch Out For
published: false
coverImage: ../../images/self-portrait-photo.jpg
components: ""
tags: [wordpress, aws, deployment ]
---

This weekend I set up a quick instance of Wordpress for development of a site I'm working on. I chose to use [WordPress Certified by Bitnami and Automattic](https://aws.amazon.com/marketplace/pp/Bitnami-WordPress-Certified-by-Bitnami-and-Automat/B00NN8Y43U) because it is fast to set up and has a pretty solid boilerplate list of features. There are a couple of gotchas, though, which are easy to fix once you know about them. If you're thinking about going this route, read on to potentially save yourself some headaches. I believe most of these will hold true for any of the Bitnami Wordpress setups, although I haven't tested that belief.

## AWS/Wordpress setup

I'm going to run through this really quickly, because there's a lot of articles out there that cover these steps already.

First, obviously, you have to have an AWS account. Sign up or log in to that account, then search for WordPress Certified by Bitnami and Automattic, or some combination of those words, and it will come up.

* Click to subscribe
* Follow the default settings, making sure to follow the instructions in the boxes:
    * Under key pairs, select "generate a new key pair" and it will generate one and download a copy to your computer. Put it with the rest of your keys, or if this is your first key, I would strongly recommend starting a folder somewhere for keys.
    * Under security group, choose an existing one if you know your way around. If not, choose to generate a new one with manufacturer's recommendations.
    * I chose -t2.micro for my machine because it's a simple development instance and cheap > powerful

Good job, your instance is launched! You can check it out by going to the Services menu (top left, next to the AWS logo) and then EC2 instances (first option under "Compute" as of the time of this writing)instances and clicking... instances. You'll be able to see the public IP address and a bunch of other information here. I didn't set up a domain for this because, again, it's a dev server, but there's a lot of resources that cover that part as well as the steps so far. You can obviously visit the site by clicking on or typing the IP address into your browswer. Easy, right?

But here's where I ran into a couple gotchas.

## The Gotchas

### Load times and insecure site warnings

When I first visited my machine's IP address, I got the classic error:

_You cannot visit (machine) right now because the website sent scrambled credentials that Google Chrome cannot process. Network errors and attacks are usually temporary, so this page will probably work later._

This is because if you go into the instance and open the site from there by clicking on the IP address, it will automatically try to use https, but the site is http.

### Default Credentials

As you'll see in the documentation, Bitnami assigns a default user and password at installation. That's handy, but there's a couple of gotchas here, too. There are a couple of ways to retrieve the password. They're pretty well covered in [the docs](https://docs.bitnami.com/aws/faq/get-started/find-credentials/#option-2-find-password-by-connecting-to-your-application-through-ssh), but there's a couple things that I found were outdated or confusing.

#### Option 1
Go to "get system log." The docs say to go to your list of EC2 instances, select your instances, and then go into the dropdown menu to "Actions/Instance settings/Get system log" but is at the time of this writing actually under "Actions/Monitor and troubleshoot/Get system log." Not hugely problematic but I'm a little embarassed at how long it took me to figure that out. I blame the fact that AWS has such a dizzying array of menus and configuration options that it's very tempting to not stray too far off the tutorial path, in case you get lost forever.

Scroll through the system log until you see a big'ol comment like

    #########################################################################
    #                                                                       #
    #        Setting Bitnami application password to <redacted>             #  
    #                                                                       #
    #        (the default application username is 'user')                   #
    #                                                                       #
    #########################################################################

The second gotcha here is that you can only see this within the first 24 hours of spinning up the instance. I did not read far enough into the docs to know this, and had gone off and done something else without thinking about trying to actually log in to the new Wordpress instance. Which is my own fault, but then of course it was gone.

Which brings us to...

#### Option 2
SSH into the machine and get your creds from there. The main gotcha here, which isn't so bad, is that you have to have remembered to put your key pair somewhere safe. Don't forget to run chmod 400 on the file to protect it, or you will run into an error yelling at you for lax permissions, and then forever after an "access denied: publickey" error. The [docs](https://docs.bitnami.com/aws/faq/get-started/connect-ssh/) say 600, but that provides both read and write access. So if you're not totally confident with this process you'll probably want 400 (read-only).