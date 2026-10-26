"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Code, Cpu } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Introduction */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </p>

          <p className="mb-3 text-lg text-zinc-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Swagata
            <span className="mt-2 block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Mondal
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-zinc-300 sm:text-2xl">
            Aspiring Full-Stack Developer
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-zinc-400 lg:mx-0">
            I&apos;m a Diploma in Computer Engineering student passionate
            about building modern, responsive, and user-friendly web
            applications with React, Next.js, TypeScript, and Tailwind CSS.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-300"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              href="mailto:swagatamondal682@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Contact Me
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <SocialIcons
              github="https://github.com/swagatamondalahona"
              linkedin="https://www.linkedin.com/in/swagatamondalahona/"
              email="mailto:swagatamondal682@gmail.com"
            />
          </div>

          <div className="mt-12 hidden items-center gap-3 text-sm text-zinc-500 lg:flex">
            <ArrowDown size={16} className="animate-bounce" />
            Scroll to explore
          </div>
        </motion.div>

        {/* Right: Profile image with all floating badges */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-teal-400/10 to-cyan-400/20 blur-2xl" />

            <div className="relative h-[280px] w-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]">
              <Image
                src="/hero-img.jpg"
                alt="Swagata Mondal"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                className="object-cover"
              />
            </div>

            {/* 1. Top-Left Floating Badge (Focus & Goal) */}
            <div className="absolute -top-6 -left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur z-20">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <Code size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Focus & Goal</p>
                <p className="text-sm font-semibold text-white">Full-Stack Developer</p>
              </div>
            </div>

            {/* 2. Bottom-Left Card (Computer Engineering) */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-3 shadow-xl backdrop-blur z-20">
              <p className="text-sm font-semibold text-white">
                Computer Engineering
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Learning · Building · Growing
              </p>
            </div>

            {/* 3. Bottom-Right Floating Badge (Design) */}
            <div className="absolute -bottom-6 -right-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur z-20">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Cpu size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Design</p>
                <p className="text-sm font-semibold text-white">Modern & Responsive</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}