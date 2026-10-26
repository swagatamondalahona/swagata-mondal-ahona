
import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const githubUrl =
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    "https://github.com/swagatamondalahona";

  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/swagatamondalahona/";

  const emailUrl = "mailto:swagatamondal682@gmail.com";

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950/90 pt-5 pb-5 backdrop-blur-md">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-20 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-start gap-10 md:grid-cols-12">
          {/* Brand & Tagline */}
          <div className="col-span-2 space-y-1 md:col-span-5">
            <a
              href="/"
              aria-label="Swagata Mondal Home"
              className="group inline-flex items-center gap-2 focus:outline-none"
            >
              <span className="font-Exo text-2xl font-extrabold tracking-tight text-white transition-colors group-hover:text-cyan-400">
                Swagata<span className="text-cyan-400">.</span>
              </span>
            </a>

            <p className="max-w-sm font-Space-Grotesk text-sm leading-relaxed font-medium text-slate-300">
              Learning, Building, <br /> and Growing Through Code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="hidden space-y-3 md:col-span-4 md:block">
            <h3 className="font-Exo text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>

            <ul className="flex flex-wrap gap-x-6 gap-y-2.5 font-Share-Tech">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors duration-200 hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3 text-right md:col-span-3">
            <h3 className="font-Exo text-xs font-bold uppercase tracking-wider text-slate-300">
              Connect
            </h3>

            <div className="flex items-center gap-3 md:justify-end">
              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-slate-800 hover:text-blue-400"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>

              {/* Email */}
              <a
                href={emailUrl}
                aria-label="Send Email to swagatamondal682@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-slate-800 hover:text-cyan-400"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-slate-800/70 pt-4 text-center">
          <p className="font-Space-Grotesk text-xs text-slate-500">
            © {new Date().getFullYear()} Swagata Mondal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
