
"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail, Code2, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
          staggerChildren: 0.12,
          delayChildren: 0.1,
        },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as const,
        },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-112 w-160 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.12),rgba(255,255,255,0))]" />

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-slate-900/80 px-3.5 py-1.5 font-Exo text-xs font-semibold text-cyan-300 shadow-sm shadow-cyan-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              variants={itemVariants}
              className="mb-2 text-base font-medium text-slate-300 sm:text-3xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Swagata Mondal
              </span>
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl"
            >
              <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text font-Exo text-transparent">
                Aspiring Full-Stack Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mb-2 max-w-2xl font-Space-Grotesk text-sm leading-relaxed text-slate-300 sm:text-lg"
            >
              Building modern web experiences with clean code, thoughtful
              design, and a passion for learning.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-2xl font-Space-Grotesk text-sm leading-relaxed text-slate-300 sm:text-lg"
            >
              I&apos;m a Diploma in Computer Engineering student passionate
              about building responsive, user-friendly web applications with
              React and Next.js, while expanding my skills in backend
              development and database technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mb-10 flex w-full items-center gap-4"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="/projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-500/40 sm:w-auto sm:px-6"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900 px-4 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white sm:w-auto sm:px-6"
                >
                  <span>Contact Me</span>
                  <Mail className="h-4 w-4 text-cyan-400" />
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex w-full items-center gap-6 border-t border-slate-800/80 pt-4"
            >
              <span className="font-Exo text-xs font-semibold tracking-wider text-slate-300 uppercase">
                Connect:
              </span>

              <div className="flex items-center gap-3">
                {/* GitHub */}
                <motion.a
                  href="https://github.com/swagatamondalahona"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  whileHover={
                    shouldReduceMotion ? {} : { scale: 1.15, y: -2 }
                  }
                  whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/swagatamondalahona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  whileHover={
                    shouldReduceMotion ? {} : { scale: 1.15, y: -2 }
                  }
                  whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-400 transition-colors hover:border-blue-500/40 hover:text-blue-400"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:swagatamondal682@gmail.com"
                  aria-label="Email Me"
                  whileHover={
                    shouldReduceMotion ? {} : { scale: 1.15, y: -2 }
                  }
                  whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 rotate-[-3deg] scale-95 rounded-3xl bg-linear-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl" />

            {/* Profile Card */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.92, y: 20 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-700/60 bg-linear-to-b from-slate-700/40 via-slate-800/40 to-slate-900/60 p-2 shadow-2xl backdrop-blur-xl sm:max-w-md"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-950">
                <Image
                  src="/HeroSection1.png"
                  alt="Swagata Mondal - Aspiring Full-Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>

            {/* Floating Tech Badge */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : { y: [0, -10, 0], rotate: [0, 2, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-4 hidden items-center gap-2.5 rounded-2xl border border-cyan-500/30 bg-slate-900/90 px-3.5 py-2 shadow-xl backdrop-blur-md sm:-left-6 sm:flex"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Code2 className="h-4 w-4" />
              </div>

              <div className="text-left">
                <p className="text-[10px] leading-none text-slate-400">
                  Focus &amp; Goal
                </p>
                <p className="font-Exo text-xs font-semibold text-white">
                  Full-Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Floating Design Badge */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : { y: [0, 10, 0], rotate: [0, -2, 0] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -right-4 -bottom-6 hidden items-center gap-2.5 rounded-2xl border border-blue-500/30 bg-slate-900/90 px-3.5 py-2 shadow-xl backdrop-blur-md sm:-right-6 sm:flex"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <Cpu className="h-4 w-4" />
              </div>

              <div className="text-left">
                <p className="text-[10px] leading-none text-slate-400">
                  Design
                </p>
                <p className="font-Exo text-xs font-semibold text-white">
                  Modern &amp; Responsive
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
