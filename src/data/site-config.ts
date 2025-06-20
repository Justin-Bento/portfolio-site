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
    subtitle: 'Full Stack Website Developer',
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
        text: 'I’m *Justin Bento*, a Full Stack Ruby on Rails and JavaScript developer based in Toronto, Ontario, Canada. I am currently seeking new opportunities and have previously worked at Humber College as well as volunteered with The LifeLine Canada Foundation. I am passionate about creating websites that that have a clear mission to keep users front and centre. The tools I commonly use include Ruby on Rails, React, Astro, and Tailwind CSS. On my website, you will find a collection of client projects with case studies, along with articles on software development, cybersecurity, and other topics I am exploring. Please feel free to browse my work on my website, review my code on [GitHub](https://github.com/Justin-Bento) or connect with me on [LinkedIn](https://www.linkedin.com/in/justinbento/).',
        image: {
            src: '/justin-bento-preview.webp',
            alt: 'A person sitting standing in a recording studio behind a drumkit set.'
        },
        // Light theme specific image
        lightThemeImage: {
            src: '/justin-bento-light.jpg',
            alt: 'This is a self-portrait photograph of Justin Bento  - light version'
        },
        darkThemeImage: {
            src: '/justin-bento-dark.webp',
            alt: 'This is a self-portrait photograph of Justin Bento playing guitar in a studio - dark version'
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
