"use client";

import { RESUME_DATA } from "@/data/resume-data";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#0a0a0a] px-4 py-12 text-white md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-2xl font-bold tracking-tighter">
          {RESUME_DATA.name.toLowerCase().replace(" ", "")}.
        </div>

        <div className="flex gap-6 font-mono text-sm text-neutral-500">
          <a
            href="https://github.com/syurodev"
            target="_blank"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:vupt1908@gmail.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>
          <a href="/cv" className="transition-colors hover:text-white">
            Full Resume
          </a>
        </div>

        <div className="text-xs text-neutral-600">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
