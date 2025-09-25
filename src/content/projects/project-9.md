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

From the start, I was upfront with the client: I would be using a template and customizing it to reflect their brand. They had no issue with this approach—they simply wanted a professional, functioning website that is tailored to their demands. Their clear and enthusiastic communication made it easy to collaborate, and we quickly moved our discussions to email.

This case study will walk through the process of building the website, the challenges faced, and the key lessons I took away from the project.

## Understanding The Challenge

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

The next phase of the website was simple it the goal was to customize the template to make sure it fit the companies branding guidelines. It was hard for me to digest the information correctly as there was no official design documentation just a pdf of the current business card. SO what I did was use the eye-dropper tool on the business card that was sent to me and used another tool to  give me additional color codes.

For example:

![Stone Template](/dr-pressure/dr-pressure-full-logo.png)

I used the eyedropper tool in Chrome’s Inspect Element to extract the following color codes directly from the image:

- `#045179` — Background color
- `#effaff` — Bottom text color
- `#e3bc6c` — Border around the **“Dr. Pressure”** text
- `#676664` — Gray from the pants of the icon
- `#000000` — Black border around the pressure washer and pump
- `#fec49f` — Skin tone of the person

My goal was to use all of these colors found on this image alone and then apply them to the astro.js stone template getting it away from the dull gray look and tailoring it to the client.

I applied the same method to the typography, using existing elements from the card and translating them into the website. This process required careful attention to hierarchy and readability to ensure the site felt unique to the client, rather than looking like another default template anyone could use.

## Developing The Website

At this stage, we were close to completing the project, but there were still a lot of hiccups—something that’s natural in web development.

### 1. Understanding The Code

Since this project was based on someone else’s code, I first forked the codebase and cloned a copy onto my local system. I then explored the project to understand how everything was connected. The code was in a fixed state, meaning the website was not designed to integrate with a content management system.

This made sense to me, and I wanted to handle it in a way that would let the client work on the website without having to worry about hiring another developer.

After a deep dive, I finally understood how everything was integrated by following the Astro.js tutorials and the React.js component setup.

### 2. Updating The Packages & Dependencies

Everything looked good at first, but issues quickly arose when I started adding packages. Many of the existing resources were outdated, and the package versions were inconsistent across the project. The problem became unavoidable when I tried installing the latest version of Tailwind CSS, among other packages. At first, it seemed simple—just run `pnpm update`—but that didn’t work, which was concerning.

To fix this, I had to completely remove the existing Astro version from the `package.json`, perform a fresh install of Astro.js, and then carefully reinstall the component code, styles, and other project elements.

It was a time-consuming process, but necessary to bring the project up to date and ensure everything worked correctly.

### 3. Setting Up and Using Keystatic Content Management System

Since the code was not originally mine and the documentation for Keystatic was limited, linking the website to the content management system presented a challenge. Specifically, I needed to determine whether to create separate instances for each element on the webpage or if a single connection would suffice. With guidance from the team at Maple Coding, we confirmed that each element required its own instance.

For example, consider the `<h1>` tag at the top of the website.

Before:

````
<h1 class="tracking-wide text-4xl leading-[1.15] font-[600] tracking-tight text-balance capitalize sm:text-5xl lg:text-6xl">
  Professional Pressure Washing Across Vancouver Island!
</h1>
````

After linking to Keystatic:

```
<h1class="tracking-wide text-4xl leading-[1.15] font-[600] tracking-tight text-balance capitalize sm:text-5xl lg:text-6xl">
  {page?.missionHeadline}
</h1>
```

This change means that instead of hardcoding the headline directly into the HTML, the content now comes dynamically from the Keystatic content management system. This allows the client to update the headline through the CMS without touching the code, making the website more flexible and easier to maintain.

### 4. Launching & Setting Up Hosting For The Website

For deployment, I chose **Vercel** because of its seamless integration with Astro.js and its ability to handle continuous deployment directly from GitHub. This meant that every time I pushed changes to the repository, the live website would automatically update without needing any manual steps.

The setup process involved:

- Linking the GitHub repository to Vercel.
- Configuring the build settings for Astro.js.
- Adding environment variables required by Keystatic.
- Running test builds to ensure everything rendered correctly in production.

One of the main challenges was making sure the CMS-linked content displayed properly after deployment. Some of the paths and assets that worked locally needed to be adjusted for the production environment. After troubleshooting and tweaking the configuration, I was able to get everything working as expected.

Once these issues were resolved, the site was live and fully functional, ready for the client to use and update as needed.

### 5. Training The Client Through Documentation

As the project approached its conclusion, the client did not request any additional services. My focus shifted to ensuring they felt confident managing the website independently, particularly when updating content such as testimonials and other key sections.

To support this, I prepared a short screen recording demonstrating the update process and paired it with clear, step-by-step documentation. I also sent a friendly email explaining how to connect to and manage their Vercel-hosted website. This way, the client could easily make updates on their own, or schedule a call with me if needed, without feeling overwhelmed.


## Project Showcase

After overcoming the technical challenges and setting up the CMS, the website was ready to go live. The final product reflected the client’s vision while also being modern, responsive, and easy to manage.

### Key Features

- **Responsive Design** – optimized for desktop, tablet, and mobile.
- **Dynamic Content** – integrated with Keystatic, allowing the client to update content without touching the code.
- **Performance Optimized** – leveraging Astro.js’s speed and Vercel’s hosting.
- **Scalable Setup** – packages and dependencies fully updated, making the project easier to maintain in the long term.

### Final Look

- Github Code -> [https://github.com/Justin-Bento/drpressure](https://github.com/Justin-Bento/drpressure)
- Live Demo Link -> [https://drpressure.vercel.app/](https://drpressure.vercel.app/)


The client now has a professional, easy-to-manage website that reflects their services and brand identity, without the burden of needing a developer for every small update.

## Key Takeaways

Every project comes with its own challenges, and this one was no exception. From migrating outdated packages to setting up a content management system with limited documentation, I gained valuable hands-on experience in troubleshooting and adapting code to meet modern standards.

One key lesson I learned was the importance of flexibility when working with clients. In this case, the client became less responsive towards the end of the project, which made it difficult to gather feedback and finalize additional features. To address this, I focused on delivering a solution that was simple, self-sufficient, and easy to maintain.

By preparing documentation and recording walkthroughs, I ensured the client could manage the website independently—even if they were too busy to stay actively involved at the end of the process.
