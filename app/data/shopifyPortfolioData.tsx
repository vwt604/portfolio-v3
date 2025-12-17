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
    name: "Developer Name",
    email: "hello@devname.dev",
    tagline: "I build Shopify stores.",
    description:
      "I'm a Shopify developer specializing in building exceptional e-commerce experiences. Currently focused on creating accessible, conversion-optimized storefronts and custom solutions that help brands scale.",
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
      "Hello! I'm a freelance Shopify developer passionate about creating beautiful, high-performing e-commerce experiences. My journey started 5 years ago when I built my first online store, and I've been hooked on the intersection of design and commerce ever since.",
      "Fast-forward to today, I've had the privilege of working with startups, established brands, and creative agencies. My main focus is building custom Shopify themes, optimizing store performance, and creating seamless shopping experiences that convert.",
      "Here are a few technologies I've been working with recently:",
    ],
    technologies: [
      "Shopify / Liquid",
      "JavaScript (ES6+)",
      "React / Next.js",
      "Node.js",
      "GraphQL",
      "Shopify Hydrogen",
    ],
  },
  services: [
    {
      title: "Shopify Store Builds & Migration",
      tab: "Store Builds",
      items: [
        "End to end Shopify store development",
        "Setting up delivery and shipping rules",
        "Adding products and collections",
        "Store migrations from other platforms",
      ],
    },
    {
      title: "Theme Development & Customization",
      tab: "Theme Dev",
      items: [
        "Creating custom theme sections",
        "Creating custom pages and forms to personalize how customers discover and purchase your products",
        "Reorganizing menus and creating custom mega menus",
      ],
    },
    {
      title: "Shopify Functions & Extensions",
      tab: "Functions",
      items: [
        "Customize checkout process",
        "Customize discounts and shipping rules",
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
        "Order tagging and workflow automation",
      ],
    },
    {
      title: "Performance Audit & Optimization",
      tab: "Performance",
      items: [
        "Run comprehensive site audits",
        "Provide recommendations to optimize the speed and performance of your site",
        "Core Web Vitals optimization",
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
