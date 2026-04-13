"use client";

export default function Footer() {
  return (
    <footer className="py-5 pb-10 text-center font-mono text-[11px] text-[var(--text-muted)]">
      <p className="text-[16px]">
        {" "}
        <a
          href="https://vanessayeung.dev"
          className="no-underline hover:underline text-[var(--text-muted)]"
          rel="noopener noreferrer"
        >
          vanesssayeung.dev &copy; {new Date().getFullYear()}
        </a>
      </p>
      <p className="mt-2 text-[10px]">
        Design inspired by{" "}
        <a
          href="https://brittanychiang.com"
          className="no-underline hover:underline text-[var(--text-muted)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>
  );
}
