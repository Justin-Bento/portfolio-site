export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    lightThemeImage?: Image;
    darkThemeImage?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Justin Bento',
    subtitle: 'Full Stack Website Developer',
    description: 'This is a portfolio website for Justin Bento. It serves as a central hub to showcase his skills, experience, and work samples.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/Justin-Bento'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/justinbento/'
        },
        {
            text: 'SoundCloud',
            href: 'https://on.soundcloud.com/1ofQFETLwvvcIe1Uh6'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm <i>Justin Bento</i>, a Full Stack Ruby on Rails and JavaScript Developer with professional experience at Humber College, now seeking exciting new opportunities. Welcome to my space, where I explore the worlds of software, cybersecurity, and the growth of curious minds. I build web applications using Ruby on Rails, JavaScript, React, Astro, and Tailwind CSS. Currently, my focus is on creating accessible, human-centered products. Feel free to explore some of my coding endeavors on <a href='https://github.com/Justin-Bento'>GitHub</a> or follow me on <a href='https://www.linkedin.com/in/justinbento/'>LinkedIn</a>.",
        image: {
            src: '/justin-bento-preview.webp',
            alt: 'A person sitting standing in a recording studio behind a drumkit set.'
        },
        // Light theme spxsecific image
        lightThemeImage: {
            src: '/justin-bento-light.webp',
            alt: 'A person standing in a recording studio behind a drumkit set - light version'
        },
        darkThemeImage: {
            src: '/justin-bento-dark.webp',
            alt: 'A person standing in a recording studio behind a drumkit set - dark version'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
