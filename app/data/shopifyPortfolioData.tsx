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
  desc: string;
  tech: string[];
  link: string;
  github: string | null;
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

export interface ShopifyPortfolioData {
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

const shopifyPortfolioData: ShopifyPortfolioData = {
  personalInfo: {
    name: "Vanessa Yeung",
    email: "hello@vanessayeung.dev",
    tagline: "I build Shopify stores.",
    description:
      "I'm a web developer specializing in Theme Development, UI Extensions, Functions, and custom solutions that help brands scale.",
    socialLinks: [
      {
        platform: "GitHub",
        url: "#",
        icon: "github",
      },
      {
        platform: "LinkedIn",
        url: "#",
        icon: "linkedin",
      },
      {
        platform: "Twitter",
        url: "#",
        icon: "twitter",
      },
    ],
  },
  about: {
    paragraphs: [
      "Hello! I'm a Web developer passionate about creating beautiful, high-performing e-commerce experiences. My journey started 4 years ago working at a boutique agency specializing in Headless builds, and I've been hooked on flexible, custom solutions ever since.",
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
      title: "Luxe Botanicals",
      desc: "A high-converting skincare e-commerce store with custom product bundling, subscription features, and an elegant UI that increased conversions by 45%.",
      tech: ["Shopify Plus", "Liquid", "JavaScript", "Recharge"],
      link: "#",
      github: "#",
      img: "/assets/tweeter.jpg",
    },
    {
      title: "Urban Threads Co.",
      desc: "Complete platform migration from WooCommerce to Shopify Plus for a fashion retailer with 10K+ SKUs, preserving SEO rankings and improving load times by 60%.",
      tech: ["Migration", "Shopify Plus", "SEO", "Data Transfer"],
      link: "#",
      github: null,
      img: "/assets/scheduler.jpg",
    },
    {
      title: "Peak Performance",
      desc: "Performance optimization project that reduced page load times from 8s to under 2s, resulting in a 40% increase in mobile conversion rate.",
      tech: ["Performance", "Core Web Vitals", "Optimization"],
      link: "#",
      github: "#",
      img: "/assets/jungle.jpg",
    },
    {
      title: "Artisan Home Goods",
      desc: "Multi-currency international store with custom filtering, AR product visualization, and region-specific shipping calculators.",
      tech: ["Multi-currency", "AR", "Custom Filters", "Liquid"],
      link: "#",
      github: null,
      img: "/assets/glasswalls.jpg",
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
};

export default shopifyPortfolioData;
