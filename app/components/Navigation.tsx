"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navigation({}) {
  const navItems = [
    { id: "about", num: 1, label: "About" },
    { id: "services", num: 2, label: "Services" },
    { id: "projects", num: 3, label: "Projects" },
    { id: "contact", num: 4, label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--bg-primary)]/95 backdrop-blur-sm z-[100] px-6 sm:px-12 py-5">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="w-10 h-10 border-2 border-[var(--accent-cyan)] rounded flex items-center justify-center font-mono font-bold text-[var(--accent-cyan)] text-lg hover:bg-[var(--accent-cyan)]/10 transition-all duration-200"
        >
          V
        </button>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="bg-transparent border-none text-[var(--text-emphasis)] cursor-pointer text-xs font-mono hover:text-[var(--accent-cyan)] transition-colors duration-200"
            >
              <span className="text-[var(--accent-cyan)]">0{item.num}.</span>{" "}
              {item.label}
            </button>
          ))}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
