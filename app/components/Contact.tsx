"use client";

interface ContactProps {
  email: string;
}

export default function Contact({ email }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-24 px-4 text-center max-w-[600px] mx-auto"
    >
      <p className="text-[var(--accent-cyan)] font-mono text-base mb-4">
        What's Next?
      </p>
      <h2 className="text-[clamp(40px,5vw,60px)] font-semibold text-[var(--heading-dark)] mb-5">
        Get In Touch
      </h2>
      <p className="text-[var(--text-primary)] leading-relaxed text-lg mb-10">
        I'm currently available for freelance projects and open to discussing
        new opportunities. Whether you have a question, want to start a project,
        or just want to say hi, my inbox is always open!
      </p>
      <a
        href={`mailto:${email}`}
        className="inline-block px-12 py-4 border border-[var(--accent-cyan)] rounded text-[var(--accent-cyan)] no-underline font-mono text-sm hover:bg-[var(--accent-cyan)]/10 transition-all duration-200"
      >
        Say Hello
      </a>
    </section>
  );
}
