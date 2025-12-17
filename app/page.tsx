"use client";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import portfolioData from "./data/portfolioData";
import shopifyPortfolioData from "./data/shopifyPortfolioData";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  const { header, projects } = portfolioData;
  const { personalInfo } = shopifyPortfolioData;

  return (
    <ThemeProvider>
      {/* New Fixed Elements */}
      <Navigation />
      <SidebarLeft socialLinks={personalInfo.socialLinks} />
      <SidebarRight email={personalInfo.email} />

      <main className="min-h-screen">
        {/* New Hero Section */}
        <Hero
          name={personalInfo.name}
          tagline={personalInfo.tagline}
          description={personalInfo.description}
        />

        {/* Old sections - will replace incrementally */}
        {/* <Header
          name={header.name}
          title={header.title}
          description={header.description}
          resumeUrl={header.resumeUrl}
          socialLinks={header.socialLinks}
        /> */}
        <Projects projects={projects} />
        <Footer socialLinks={header.socialLinks} resumeUrl={header.resumeUrl} />
      </main>
    </ThemeProvider>
  );
}
