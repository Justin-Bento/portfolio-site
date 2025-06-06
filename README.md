# Portfolio Website (v4)

Welcome to my corner of the internet. This personal website serves as a central hub to showcase my skills, experience, and work samples. It provides employers and collaborators with easy access to my professional journey.

- Date Created: Tue May 13 2025
- Last Updated: Wed Jun 04 2025
- Previous iterations: v1, v2,
- Last Update: 1.3.12
- Status: Working On Case Studies.
- Live Link: www.justin-bento.com
- Credits: See full credits

## Theme Features:

- ✅ Dark and light color mode
- ✅ Hero section with bio
- ✅ Portfolio collection
- ✅ Pagination support
- ✅ Post tags support
- ✅ Subscription form
- ✅ View transitions
- ✅ Tailwind CSS
- ✅ Mobile-first responsive layout
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## Project Structure

Inside of Dante Astro theme, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── icons/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro (`.astro`) components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Acknowledgements

Special thanks to the creators of these great resources:

- **Dante Astro Theme by JustGoodUI** - This website uses a modified version of the Dante Astro Theme by JustGoodUI. The original theme is available at https://github.com/JustGoodUI/dante-astro-theme.

- **Loading Screen Inspiration** – The loading animation and transition behavior were inspired by [Brittany Chiang’s v4 portfolio](https://github.com/bchiang7/v4), which features a beautifully crafted intro experience.

- **Visual Style Inspiration** – Color palette and stylistic elements were influenced by the visual aesthetics of Final Fantasy Dissidia 012, developed by Square Enix.

- Demo content generate with [Chat GPT](https://chat.openai.com/)

- Images for demo content from [Unsplash](https://unsplash.com/)

- [Ovidius](https://github.com/JustGoodUI/ovidius-astro-theme) is a free single author blog theme.
