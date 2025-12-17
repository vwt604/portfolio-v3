"use client";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import portfolioData from "./data/portfolioData";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const { header, projects } = portfolioData;
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <ThemeToggle />
        <Header
          name={header.name}
          title={header.title}
          description={header.description}
          resumeUrl={header.resumeUrl}
          socialLinks={header.socialLinks}
        />
        <Projects projects={projects} />
        <Footer socialLinks={header.socialLinks} resumeUrl={header.resumeUrl} />
      </main>
    </ThemeProvider>
  );
}
