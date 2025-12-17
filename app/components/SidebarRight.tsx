"use client";

interface SidebarRightProps {
  email: string;
}

export default function SidebarRight({ email }: SidebarRightProps) {
  return (
    <aside className="fixed right-0 top-0 bottom-0 w-12 hidden md:flex flex-col items-center justify-end pb-5 z-50">
      <div className="flex flex-col items-center gap-5">
        <a
          href={`mailto:${email}`}
          className="[writing-mode:vertical-rl] text-[var(--text-dim)] hover:text-[var(--accent-cyan)] hover:-translate-y-1 transition-all duration-200 font-mono text-xs tracking-wider no-underline"
        >
          {email}
        </a>
        <div className="w-px h-24 bg-[var(--text-muted)] mt-2.5" />
      </div>
    </aside>
  );
}
