"use client";

export default function Footer() {
  return (
    <footer className="py-5 pb-10 text-center font-mono text-[11px] text-[var(--text-muted)]">
      <p>
        Design inspired by{" "}
        <a
          href="https://brittanychiang.com"
          className="text-[var(--accent-cyan)] no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
        <p className="mt-2">vanesssayeung.dev © 2025</p>
      </p>
    </footer>
  );
}
