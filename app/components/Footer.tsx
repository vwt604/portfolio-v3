"use client";

export default function Footer() {
  return (
    <footer className="py-5 pb-10 text-center">
      <p className="font-mono text-xs text-[var(--text-muted)]">
        Built with React & Solarized Colors
      </p>
      <p className="font-mono text-[11px] text-[var(--text-muted)] mt-2">
        Design inspired by{" "}
        <a
          href="https://brittanychiang.com"
          className="text-[var(--accent-cyan)] no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>
  );
}
