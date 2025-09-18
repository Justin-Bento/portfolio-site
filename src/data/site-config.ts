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
    subtitle: 'Full-Stack Website Developer',
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
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: 'Hi, I’m Justin Bento, a Full-Stack Developer based in Toronto, Ontario, Canada. I am passionate about solving problems for companies while keeping the users happy and engaged with your platform. The tools I work with include and are not limited to HTML, CSS (+Tailwind CSS), JavaScript, TypeScript, React.js Next.js Astro.js, Ruby and Ruby on Rails. On my website, you will find a collection of projects, case studies, and articles that have been completed in the past, or find topics that peak my interest. Please feel free to browse my work on my website, review my code on [GitHub](https://github.com/Justin-Bento) or connect with me on [LinkedIn](https://www.linkedin.com/in/justinbento/).',
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
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
