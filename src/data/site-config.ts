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
    website: 'https://www.justin-bento.com/',
    title: 'Justin Bento',
    subtitle: 'Website Designer and Developer',
    description: 'This is a portfolio website for Justin Bento. It serves as a central hub to showcase his skills, experience, and work samples.',
    image: {
        src: '/justin-bento-dark.webp',
        alt: 'Justin Bento - Astro.js and Tailwind CSS Portfolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
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
            text: 'About',
            href: '/about'
        },
        {
            text: 'Acknowledgements',
            href: '/acknowledgements'
        },
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
            text: 'Email',
            href: 'mailto:contact@justin-bento.com'
        }
    ],
    hero: {
        title: 'Welcome To My Website!',
        text: `I’m Justin Bento, a Website Designer and Developer with a focus on Ruby on Rails and React. I create digital experiences for small businesses, charities, and clients that want intuitive experience for users and developers. What makes my approach unique is that I embrace 'the why' behind a website and conduct enough research to leverage aesthetics as a catalyst. You can also find me at industry events like TorontoJS, TechTank Toronto, or Toronto Ruby.`,
        image: {
            src: '/Social-Media-ProfilePicture.jpeg',
            alt: 'A person sitting staring at the computer.'
        },
        actions: [
            {
                text: 'Learn More About Me',
                href: '/about'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
