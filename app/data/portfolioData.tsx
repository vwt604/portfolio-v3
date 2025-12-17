export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface PortfolioData {
  header: {
    name: string;
    title: string;
    description: string;
    resumeUrl: string;
    socialLinks: SocialLink[];
  };
  projects: Project[];
}

const portfolioData: PortfolioData = {
  header: {
    name: "Vanessa",
    title:
      "I'm a developer who's passionate about creating seamless user experiences that not only look great but also perform well.",
    description:
      "I also love to travel and have been living around the world since 2012.",
    resumeUrl: "/assets/20250408_VanessaYeungResume.pdf",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/yeungvanessa/",
        icon: "FaLinkedin",
      },
      {
        platform: "GitHub",
        url: "https://github.com/vwt604",
        icon: "FaGithub",
      },
      {
        platform: "Email",
        url: "mailto:vanessa.yeung@ehl.ch",
        icon: "FaEnvelope",
      },
    ],
  },
  projects: [
    {
      id: "scheduler",
      title: "Scheduler",
      description:
        "A single-page React app developed in a test-driven environment that lets students book interview appointments.",
      technologies: ["REACT", "AXIOS", "STORYBOOK", "JEST", "CYPRESS"],
      image: "/assets/scheduler.jpg",
      githubUrl: "https://github.com/vwt604/scheduler#readme",
      demoUrl: "https://vwt604-scheduler.netlify.app/",
    },
    {
      id: "glasswalls",
      title: "GlassWalls",
      description:
        "A neighbourhood and apartment review app with Leaflet map integration that helps movers to a new city find a home.",
      technologies: [
        "REACT",
        "AXIOS",
        "NODE",
        "EXPRESS",
        "PSQL",
        "MATERIAL UI",
      ],
      image: "/assets/glasswalls.jpg",
      githubUrl: "https://github.com/vwt604/GlassWalls#readme",
    },
    {
      id: "tweeter",
      title: "Tweeter",
      description:
        "A simple, single-page Twitter clone with a focus on learning front-end development using jQuery and AJAX.",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "NODE"],
      image: "/assets/tweeter.jpg",
      githubUrl: "https://github.com/vwt604/tweeter#readme",
    },
    {
      id: "jungle",
      title: "Jungle",
      description:
        "A mini e-commerce app with Stripe integration, and a built-in admin dashboard for product and category management.",
      technologies: ["RUBY", "RAILS", "PSQL", "STRIPE", "RSPEC"],
      image: "/assets/jungle.jpg",
      githubUrl: "https://github.com/vwt604/jungle-rails#readme",
    },
  ],
};

export default portfolioData;
