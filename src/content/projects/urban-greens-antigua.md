---
title: 'Urban Greens Antigua'
description: "Urban Greens Antigua connects consumers, restaurants, and hotels with locally grown microgreens. Since sales happen in person, the site's sole job is discovery — introducing an unfamiliar product, building trust, and pointing people to where they can buy it."
publishDate: 2021/05/08
tags: 
- "Website Design and Development"
- "Software Projects"
seo: 
  image: 
    src: ""
    alt: ""
---

**Stack**: Next.js 15 (App Router) with React and TypeScript, styled with Tailwind CSS and shadcn/ui components. Content is modeled and managed through Sanity, a headless CMS, with generated types (sanity-typegen) keeping the schema and front-end in sync — a setup that lets a non-technical owner update copy, FAQs, and product listings without touching code. The project is packaged with pnpm and deployed on Vercel, and ESLint keeps the codebase consistent across its 460+ commits.

**Architecture**: A lean five-route structure (Home, About, Products, Questions, Contact) keeps the funnel simple: hero messaging → education → proof points → purchase locations → contact. Image delivery runs through Next.js's built-in optimization pipeline, serving responsively sized assets without extra tooling overhead — a sensible default for a media-heavy marketing site.

**Content Design**: The FAQ, powered by Sanity content rather than hardcoded copy, doubles as on-page education and SEO, answering practical questions directly instead of burying them in a separate resource.