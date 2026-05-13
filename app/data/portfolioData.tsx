export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  title: string;
  tab: string;
  items: string[];
  plus?: boolean;
}

export interface FeaturedProject {
  title: string;
  desc?: string;
  tech?: string[];
  link: string;
  github?: string | null;
  img: string;
}

export interface OtherProject {
  title: string;
  desc: string;
  tech: string[];
  github: string;
}

export interface Paragraph {
  text: string;
  links?: Record<string, string>;
}

export interface AboutContent {
  paragraphs: Paragraph[];
  technologies: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    email: string;
    description: string;
    socialLinks: SocialLink[];
  };
  about: AboutContent;
  services: Service[];
  featuredProjects: FeaturedProject[];
  otherProjects: OtherProject[];
  contact: {
    message: string;
  };
}

export const resumeUrl =
  "https://www.canva.com/design/DAHGIknk_h4/AUn2Jri-k2sLCnTBA65gFg/view?utlId=he3ec6b33a2";

const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Vanessa Yeung",
    email: "hello@vanessayeung.dev",
    description:
      "Frontend developer with 4+ years experience building scalable ecommerce solutions. I care about user experience, clean architecture, and code that holds up.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/yeungvanessa/",
        icon: "linkedin",
      },
      {
        platform: "GitHub",
        url: "https://github.com/vwt604",
        icon: "github",
      },
      {
        platform: "Mail",
        url: "mailto:hello@vanessayeung.dev",
        icon: "mail",
      },
      {
        platform: "Resume",
        url: resumeUrl,
        icon: "file-text",
      },
    ],
  },
  about: {
    paragraphs: [
      {
        text: "I'm a frontend developer with 4+ years of experience at a Vancouver-based ecommerce agency. I started working on headless Shopify builds early in my career and grew a passion for scalable, custom frontend solutions.",
        links: {
          "ecommerce agency": "https://thejibe.com/",
        },
      },
      {
        text: "What drives me is building things that solve real business problems. I'm currently looking for frontend engineering roles at ecommerce-focused companies where I can work with modern stacks and keep pushing past what off-the-shelf solutions allow.",
      },
      {
        text: "Here are a few technologies I've worked with:",
      },
    ],
    technologies: [
      "JavaScript (ES6+) / TypeScript",
      "React / Next.js",
      "HTML / CSS",
      "Shopify / Liquid",
      "GraphQL",
      "Node.js",
      "Tailwind",
      "Prismic",
      "Contentful",
      "Storybook",
      "Klaviyo",
      "Yotpo",
      "Git / GitHub Actions",
      "Vercel",
    ],
  },
  services: [
    {
      title: "Headless & Frontend",
      tab: "Headless & Frontend",
      items: [
        "Building custom storefronts with React and Next.js, and Liquid-based Shopify themes",
        "CMS integrations with Prismic and Contentful",
        "Building and maintaining in-house UI component libraries and design systems",
        "Architecting scalable, reusable component-based frontend systems",
      ],
    },
    {
      title: "Shopify Plus",
      tab: "Shopify Plus",
      items: [
        "Custom checkout experiences with Shopify UI Extensions",
        "Custom discount functions, shipping rules, and cart validations with Shopify Functions",
        "Internationalization with Shopify Markets — multi-currency, multi-language, and regional pricing",
      ],
      plus: true,
    },
    {
      title: "Integrations & Apps",
      tab: "Integrations & Apps",
      items: [
        "Klaviyo email flows, segmentation, and Shopify integration",
        "Shopify REST and GraphQL Admin and Storefront API",
        "Shopify Flow automations and workflow triggers",
        "Custom content modelling with metaobjects and metafields",
      ],
    },
    {
      title: "Tooling & Workflow",
      tab: "Tooling & Workflow",
      items: [
        "TypeScript across frontend and backend codebases",
        "Git version control, branching strategies, and code review on GitHub",
        "CI/CD pipelines and deployment with Vercel and GitHub Actions",
        "Design collaboration in Figma, component documentation with Storybook, and Agile/Scrum workflows",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "Shopify Plus Storefront",
      desc: "Headless Shopify Plus storefront for a global outdoor apparel brand, serving customers across multiple countries and currencies. Contributed CMS-integrated components built with Prismic, complex promotional sale logic, and custom checkout extensions.",
      tech: ["Shopify Plus,", "Shopify Extensions,", "Headless"],
      link: "#",
      img: "/assets/scheduler.jpg",
    },
    {
      title: "Bikeshack",
      desc: "A Shopify demo store built on Dawn 2.0 to showcase theme development depth. Features a dynamic product comparison page, a conditional product recommendation quiz, and custom product pages with real-time availability display.",
      tech: ["Section Rendering API,", "Custom Form,", "Custom Sections"],
      link: "https://bikeshack-dev.myshopify.com/",
      img: "/assets/bikeshack.png",
    },
  ],
  otherProjects: [
    {
      title: "Tweeter",
      desc: "A Twitter clone rebuilt in Vue.js, refactored from a legacy jQuery codebase — an exercise in translating imperative DOM manipulation into a component-driven architecture.",
      tech: ["Vue.js", "JavaScript", "CSS"],
      github: "https://github.com/vwt604/tweeter",
    },
    {
      title: "Portfolio v3",
      desc: "This portfolio, built with Next.js, TypeScript, and Tailwind CSS. Dark terminal aesthetic with a data-driven architecture — all content lives in a single typed data file.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/vwt604/portfolio-v3",
    },
  ],
  contact: {
    message:
      "I'm currently available to discussing new projects and opportunities. If you have a question, want to start a project, or just want to connect, feel free to reach out!",
  },
};

export default portfolioData;
