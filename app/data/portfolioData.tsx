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
      "Hello! I'm a web developer passionate about creating beautiful, tailored e-commerce experiences. My journey started 4 years ago working at an agency specializing in Headless builds, and I've been hooked on flexible, custom solutions ever since.",
      "My main focus is building custom Shopify themes, optimizing store performance, and creating seamless shopping experiences that convert.",
      "Here are a few technologies I've been working with recently:",
    ],
    technologies: [
      "Shopify / Liquid",
      "JavaScript (ES6+)",
      "React / Next.js",
      "Node.js",
      "Tailwind",
      "Shopify Hydrogen",
    ],
  },
  services: [
    {
      title: "Theme Development & Customization",
      tab: "Theme Development & Customization",
      items: [
        "Creating custom theme sections",
        "Creating custom pages and forms to personalize how customers discover and purchase your products",
        "Reorganizing menus and creating custom mega menus",
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
      title: "Store Builds & Migration",
      tab: "Store Builds & Migration",
      items: [
        "End to end Shopify store development",
        "Setting up delivery and shipping rules",
        "Adding products and collections",
        "Store migrations from other platforms",
      ],
    },
    {
      title: "Automations",
      tab: "Automations",
      items: [
        "Creating automated email campaigns",
        "Automating customer segmentation for targeted marketing campaigns",
        "Tagging orders and workflow automation",
      ],
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
      title: "Bikeshack",
      desc: "A theme built leveraging Dawn 2.0 with added featured to support a dynamic product comparison page, product quiz for product recommendation, and custom product pages with availability display.",
      tech: ["Section Rendering API", "Custom Form", "Custom Sections"],
      link: "https://bikeshack-dev.myshopify.com/",
      img: "/assets/bikeshack.png",
    },
    {
      title: "7mesh",
      desc: "A technical apparel Headless store with multi-warehousing, custom discounts, multicurrency and locale handling. Was the Tehnical Lead on this project.",
      tech: ["Shopify Plus", "Shopify Functions & Extensions", "Headless"],
      link: "#",
      img: "/assets/scheduler.jpg",
    },
    // {
    //   title: "Peak Performance",
    //   desc: "Performance optimization project that reduced page load times from 8s to under 2s, resulting in a 40% increase in mobile conversion rate.",
    //   tech: ["Performance", "Core Web Vitals", "Optimization"],
    //   link: "#",
    //   github: "#",
    //   img: "/assets/jungle.jpg",
    // },
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
};

export default portfolioData;
