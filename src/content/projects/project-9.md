---
title: 'Dr. Pressure'
description: While job hunting, I took on a freelance project with a Vancouver-based company to design and build their website from Toronto. This experience challenged me to communicate effectively with a client I never met in person, manage expectations independently, and deliver a professional product in a fully remote environment.
tags:
  - ClientCommuication
  - RemoteWork
  - FreelanceProject
publishDate: 2025-08-25
isFeatured: true
seo:
  image:
    src: 'Project-Caesar-Cipher.png'
---

![Project preview](/dr-pressure/dr-pressre-website-Macbook.png)

## Project Overview

During my job search, I realized that sitting idle wasn’t helping me grow. I wanted to challenge myself by taking on a project for free as a website developer. My goal was to sharpen my communication skills, build confidence in explaining technical concepts, and see how much I had improved since working on the Maple Coding project and attending Shopify Developer sessions on Sundays.

Over the summer, I posted on Reddit offering to create a free website for anyone interested. That’s how I connected with the client for this project. They were enthusiastic from the very beginning and eager to establish an official online presence for their business. Their company, Dr. Pressure, is a pressure washing business based in Vancouver, BC.

From the start, I was upfront with the client: I would be using a template and customizing it to reflect their brand. They had no issue with this approach—they simply wanted a professional, functioning website that is tailoured to their demands. Their clear and enthusiastic communication made it easy to collaborate, and we quickly moved our discussions to email.

This case study will walk through the process of building the website, the challenges faced, and the key lessons I took away from the project.

## Understadning The Challenge

Onboarding for a website project can be challenging, especially when it comes to aligning expectations. My main goal was to be very clear about my design and development process.

The goal was simple:

**Support clear communication throughout the project ensuring we stay on track**.

To support this idea throughout the project timeline, I created two key documents: a project brief and a code of conduct. These shaped the process moving forward and kept both sides aligned. This approach helped me set expectations early, minimize the risk of miscommunication, and ensure that client feedback was tied to clear project goals rather than personal preference.

Here where some things I was responsible for:

- **Updating the code/template** → shows technical competence.
- **Tailoring to client expectations** → shows you can customize rather than just copy-paste.
- **Creating sample content** → demonstrates initiative while making clear it’s not final.

Things I was not responsible for:

- **Content curation** → that’s the client’s job (or a copywriter’s).
- **Graphic design outside the website** → keeps your role clear, prevents scope creep.
- **Ongoing deployment/maintenance** → unless explicitly agreed on, that’s outside the one-off project.

After a week, the client returned the signed documents. Although these documents were not legally binding, their purpose was to formally acknowledge the project and establish a mutual understanding of responsibilities, ensuring accountability on both sides.

Thanks to [LibreOffice](https://www.libreoffice.org/) (a free, open-source tool), I was able to draft and share them easily.

## Picking The Right Template

One of the first major decisions in this project was selecting the right platform and template for the client’s website. My goal was to balance performance, cost, and ease of use so the client could manage their website independently after launch.

I researched several options and presented the pros and cons to the client. While platforms like WordPress or Shopify offer extensive features, they also bring added complexity, higher hosting costs, and ongoing maintenance. Since the client only needed a showcase website with minimal content updates, these platforms would have been excessive.

Instead, I selected Astro.js, a lightweight and highly performant framework. It provided exactly what the project required: a fast, scalable, and affordable solution that integrates smoothly with a content management system. This ensured the client could update their website without incurring ongoing development or hosting fees.

By making this decision, I was able to deliver a solution that aligned with the client’s goals while also being mindful of long-term sustainability and boundaries around my role. My responsibility was to help them launch successfully, not to commit to indefinite maintenance — and Astro.js provided the right balance.

The template came down to three templates:

### Data Nova:

Free Astro theme specially designed for Business, Marketing, SaaS and Startup websites.

![Data Nova Template](/dr-pressure/data-nova-template.webp)

### ScrewFast

Free Astro theme specially designed for Business, Marketing, SaaS and Startup websites.

![ScrewFast Template](/dr-pressure/screw-fast-template.png)

### Stone:

Free Astro theme specially designed for Business, Marketing, SaaS and Startup websites.

![Stone Template](/dr-pressure/astrojs-stone.png)

After two weeks of waiting for the client’s response, he finally made a decision and chose the Stone Template. We went with this template because of its beautiful design and responsive nature — it ticked all the boxes and had everything we were looking for.

That is the end of part one of picking the template.

## Designing The Website

The next phase of the website was simple it the goal was to customize the tepmlate to make sure it fit the companies branding guidelines. It was hard for me to digest the infromation correctly as there was no offical design documentation just a pdf of the current business card. SO what I did was use the eye-dropper tool on the business card that was sent to me and used another tool to  give me additional colour codes.

For example:

![Stone Template](/dr-pressure/dr-pressure-full-logo.png)

I used the eyedropper tool in Chrome’s Inspect Element to extract the following color codes directly from the image:

- `#045179` — Background color
- `#effaff` — Bottom text color
- `#e3bc6c` — Border around the **“Dr. Pressure”** text
- `#676664` — Gray from the pants of the icon
- `#000000` — Black border around the pressure washer and pump
- `#fec49f` — Skin tone of the person

My goal was to use all of these colours found on this image alone and then apply them to the astro.js stone template getting it away from the dull gray look and tailoring it to the client.

I applied the same method to the typography, using existing elements from the card and translating them into the website. This process required careful attention to hierarchy and readability to ensure the site felt unique to the client, rather than looking like another default template anyone could use.
