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
    tagline: "I build Shopify stores.",
    description:
      "I'm a web developer specializing in Shopify Theme Development, UI Extensions, Functions, and custom solutions that help brands scale.",
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
      "Hello! I'm a web developer specializing in building custom, scalable Shopify storefronts. My journey started out at a headless-focused agency 4 years ago, and I've been hooked on flexible, custom solutions ever since.",
      "Now I help brands move beyond basic themes - implementing custom features, improving speed, and optimizing customer journeys that convert.",
      "Here are a few technologies I've been working with recently:",
    ],
    technologies: [
      "Shopify / Liquid",
      "JavaScript (ES6+)",
      "React / Next.js",
      "HTML / CSS",
      "Node.js",
      "Tailwind",
      "Klaviyo",
    ],
  },
  services: [
    {
      title: "Theme Development & Customization",
      tab: "Theme Development & Customization",
      items: [
        "Creating custom theme sections",
        "Creating custom pages and forms to personalize how customers discover and purchase your products",
        "Reorganizing navigation and creating custom mega menus",
      ],
    },
    {
      title: "Shopify Flow Automations",
      tab: "Shopify Flow",
      items: [
        "Creating automated email campaigns",
        "Implementing upselling stratgies after check out",
        "Tagging orders and workflow automation",
      ],
    },
    {
      title: "Functions & Extensions",
      tab: "Functions & Extensions",
      items: [
        "Customizing checkout process",
        "Customizing discounts and shipping rules",
        "Creating checkout validations",
      ],
      plus: true,
    },
    {
      title: "Performance Audit & Optimization",
      tab: "Performance",
      items: [
        "Running comprehensive site audits",
        "Providing recommendations to optimize the speed and performance of your site",
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
