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
    subtitle: 'Front-End Designer & Developer',
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
        text: "Hi, my name is Justin, and I am a Front-End Designer based in Toronto. For the past three years, I’ve been helping companies and charities build accessible websites and web applications that make information easier to use and understand. My focus is on creating interfaces that feel intuitive and natural to navigate. I mainly work with HTML, CSS, JavaScript, TypeScript, Node, and React. Take your time and browse through my website, think of it as a space for me to learn, reflect, and share what I learn along the way.",
        image: {
            src: '/Social-Media-ProfilePicture.jpeg',
            alt: 'A person sitting standing in a recording studio behind a drumkit set.'
        },
        // Light theme specific image
        lightThemeImage: {
            src: '/Social-Media-ProfilePicture.jpeg',
            alt: 'This is a self-portrait photograph of Justin Bento.'
        },
        darkThemeImage: {
            src: '/justin-bento-dark.webp',
            alt: 'This is a self-portrait photograph of Justin Bento playing guitar in a studio.'
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
