"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import shopifyPortfolioData from "./data/shopifyPortfolioData";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  const { personalInfo, about, services, featuredProjects } = shopifyPortfolioData;

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

        {/* New About Section */}
        <About about={about} />

        {/* New Services Section */}
        <Services services={services} />

        {/* New Featured Projects Section */}
        <FeaturedProjects projects={featuredProjects} />

        {/* New Contact Section */}
        <Contact email={personalInfo.email} />

        {/* New Footer */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
