"use client";

interface HeroProps {
  name: string;
  tagline: string;
  description: string;
}

export default function Hero({ name, tagline, description }: HeroProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 px-6 sm:px-12 md:px-24 lg:px-36 max-w-[1200px] mx-auto"
    >
      <p className="text-[var(--accent-cyan)] font-mono text-sm md:text-base mb-5">
        Hi, my name is
      </p>
      <h1 className="text-[clamp(40px,8vw,80px)] font-bold text-[var(--heading-dark)] leading-[1.1] m-0">
        {name}.
      </h1>
      <h2 className="text-[clamp(40px,8vw,80px)] font-bold leading-[1.1] mt-2.5 mb-0 text-[var(--text-muted)] ">
        I build <span className="text-[var(--accent-cyan)]">Shopify</span>{" "}
        stores.
      </h2>
      <p className="max-w-[540px] mt-6 text-base md:text-lg leading-relaxed text-[var(--text-dim)]">
        {description}
      </p>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("contact");
        }}
        className="inline-block mt-10 px-7 py-4 border border-[var(--accent-cyan)] rounded text-[var(--accent-cyan)] no-underline font-mono text-sm hover:bg-[var(--accent-cyan)]/10 transition-all duration-200 w-fit"
      >
        Get In Touch
      </a>
    </section>
  );
}
