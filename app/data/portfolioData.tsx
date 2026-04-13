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

export interface AboutContent {
  paragraphs: string[];
  technologies: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    email: string;
    tagline: string;
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

const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Vanessa Yeung",
    email: "hello@vanessayeung.dev",
    tagline: "I build ecommerce experiences.",
    description:
      "I'm a frontend developer specializing in Shopify - from headless storefronts to deep theme customizations, building ecommerce experiences that help brands scale.",
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
    ],
  },
  about: {
    paragraphs: [
      "Hello! I'm a frontend developer specializing in ecommerce - particularly Shopify. My journey started at an ecommerce agency 4 years ago where I worked with brands like 7mesh and Organika, and I've been hooked on flexible, custom solutions ever since.",
      "Now I help brands go further than their theme allows - building custom storefronts, flexible architecture, and ecommerce experiences that are built to last.",
      "Here are a few technologies I've been working with:",
    ],
    technologies: [
      "Shopify / Liquid",
      "JavaScript (ES6+) / Typescript",
      "React / Next.js",
      "HTML / CSS",
      "Node.js",
      "Tailwind",
      "Klaviyo",
    ],
  },
  services: [
    {
      title: "Custom Theme Development",
      tab: "Custom Theme Development",
      items: [
        "Building headless Shopify storefronts with custom frontends",
        "Creating custom theme sections, pages, and mega menus",
        "Architecting scalable, component-based theme systems",
      ],
    },
    {
      title: "Shopify Plus Features",
      tab: "Shopify Plus Features",
      items: [
        "Customizing checkout process and checkout UI extensions",
        "Customizing discount rules, shipping logic, and checkout validations",
      ],
      plus: true,
    },
    {
      title: "Performance Optimization",
      tab: "Performance Optimization",
      items: [
        "Running comprehensive site audits",
        "Providing recommendations to optimize the speed and performance of your site",
      ],
    },
    {
      title: "Shopify Flow & Automations",
      tab: "Shopify Flow",
      items: [
        "Creating automated email campaigns",
        "Implementing upselling strategies after checkout",
        "Workflow automations",
      ],
    },
    {
      title: "Store Setup & Migration",
      tab: "Store Setup & Migration",
      items: [
        "Migrating themes and platforms",
        "Setting up new Shopify stores with custom configurations",
        "Configuring shipping, payment, discounts, and apps",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "7mesh",
      desc: "Worked as part of a team to build a custom Shopify Plus store with headless architecture. My contributions included building custom components with CMS integration, implementing complex sale features, and developing custom checkout extensions.",
      tech: ["Shopify Plus,", "Shopify Extensions,", "Headless"],
      link: "https://7mesh.com/",
      img: "/assets/scheduler.jpg",
    },
    {
      title: "Bikeshack",
      desc: "A theme built leveraging Dawn 2.0 with added featured to support a dynamic product comparison page, product quiz for product recommendation, and custom product pages with availability display.",
      tech: ["Section Rendering API,", "Custom Form,", "Custom Sections"],
      link: "https://bikeshack-dev.myshopify.com/",
      img: "/assets/bikeshack.png",
    },
  ],
  otherProjects: [
    {
      title: "Subscription Box App",
      desc: "Custom Shopify app for managing subscription boxes with flexible delivery schedules.",
      tech: ["Node.js", "React", "Polaris"],
      github: "#",
    },
    {
      title: "Inventory Sync Tool",
      desc: "Real-time inventory synchronization between Shopify and external warehouse systems.",
      tech: ["GraphQL", "Webhooks", "AWS"],
      github: "#",
    },
    {
      title: "Custom Checkout Extension",
      desc: "Shopify checkout extension for custom gift messaging and delivery date selection.",
      tech: ["Checkout UI", "React", "Liquid"],
      github: "#",
    },
    {
      title: "Product Customizer",
      desc: "Interactive product customizer allowing customers to personalize items in real-time.",
      tech: ["JavaScript", "Canvas API", "Liquid"],
      github: "#",
    },
    {
      title: "Wholesale Portal",
      desc: "B2B wholesale ordering portal with tiered pricing and bulk order management.",
      tech: ["Shopify Plus", "B2B", "Custom App"],
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      desc: "Custom analytics dashboard aggregating Shopify data with marketing metrics.",
      tech: ["React", "D3.js", "Shopify API"],
      github: "#",
    },
  ],
  contact: {
    message:
      "I'm currently available for freelance projects and open to discussing new opportunities. If you have a question, want to start a project, or just want to connect, feel free to reach out!",
  },
};

export default portfolioData;
