
"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Copy,
  Check,
  MapPin,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Personal Contact Information
  const contactEmail = "swagatamondal682@gmail.com";

  const githubUrl =
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    "https://github.com/swagatamondalahona";

  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/swagatamondalahona/";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setServerError("Unable to copy email. Please copy it manually.");
    }
  };

  const validateField = (
    field: keyof FormData,
    value: string
  ): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters.";
        return undefined;

      case "email":
        if (!value.trim()) return "Email address is required.";
        if (!EMAIL_REGEX.test(value.trim()))
          return "Please enter a valid email address.";
        return undefined;

      case "subject":
        if (!value.trim()) return "Subject is required.";
        if (value.trim().length < 3)
          return "Subject must be at least 3 characters.";
        return undefined;

      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters.";
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (serverError) setServerError(null);
    if (serverSuccess) setServerSuccess(null);

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    const error = validateField(field, formData[field]);

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setServerError(null);
    setServerSuccess(null);

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to deliver message. Please try again."
        );
      }

      setServerSuccess(
        data.message || "Your message has been sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTouched({});
      setErrors({});
    } catch (err: unknown) {
      setServerError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3.5 rounded-xl bg-slate-950 border text-white placeholder-slate-500 text-sm transition-all duration-200 focus:outline-none ${errors[field]
      ? "border-rose-500/70 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
      : "border-slate-800 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
    }`;

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-slate-950/70 py-15"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="mb-4 font-Exo text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="font-Space-Grotesk text-base leading-relaxed text-slate-300 sm:text-lg">
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to reach out.
          </p>
        </motion.div>

        {/* Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-5"
          >
            {/* Direct Contact */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <h3 className="mb-2 font-Exo text-xl font-bold text-white">
                Direct Contact
              </h3>

              <p className="mb-6 font-Space-Grotesk text-sm leading-relaxed text-slate-400">
                Send an email directly or copy the address to your clipboard.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-Exo text-xs text-slate-400">
                        Personal Email
                      </p>

                      <a
                        href={`mailto:${contactEmail}`}
                        className="block truncate font-Exo text-sm font-semibold text-white transition-colors hover:text-cyan-400"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
                    onClick={handleCopyEmail}
                    className="ml-2 shrink-0 rounded-xl bg-slate-800 p-2.5 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </motion.button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-Exo text-xs text-slate-400">
                      Location
                    </p>
                    <p className="font-Exo text-sm font-semibold text-white">
                      Bangladesh • Available Globally
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-Exo text-xs text-slate-400">
                      Availability
                    </p>
                    <p className="font-Exo text-sm font-semibold text-white">
                      Responses within 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <h4 className="mb-4 font-Exo text-sm font-bold uppercase tracking-wider text-slate-200">
                Professional Networks
              </h4>

              <div className="flex flex-wrap items-center gap-3">
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500/40 hover:text-blue-400"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Send a Direct Message
              </h3>

              <p className="mb-8 text-sm text-slate-400">
                Fill out the form below. I will receive your message and
                respond directly to your email.
              </p>

              {/* Status Messages */}
              <AnimatePresence>
                {serverSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-950/60 p-4 text-emerald-200"
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Message Sent Successfully!
                      </p>
                      <p className="mt-0.5 text-xs text-emerald-300/90">
                        {serverSuccess}
                      </p>
                    </div>
                  </motion.div>
                )}

                {serverError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 flex items-start gap-3 rounded-2xl border border-rose-500/40 bg-rose-950/60 p-4 text-rose-200"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Submission Failed
                      </p>
                      <p className="mt-0.5 text-xs text-rose-300/90">
                        {serverError}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-200"
                    >
                      Full Name{" "}
                      <span className="text-cyan-400" aria-hidden="true">
                        *
                      </span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? "name-error" : undefined
                      }
                      placeholder="Jane Doe"
                      className={inputClass("name")}
                    />

                    {errors.name && (
                      <p
                        id="name-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-200"
                    >
                      Email Address{" "}
                      <span className="text-cyan-400" aria-hidden="true">
                        *
                      </span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      placeholder="jane@example.com"
                      className={inputClass("email")}
                    />

                    {errors.email && (
                      <p
                        id="email-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-200"
                  >
                    Subject{" "}
                    <span className="text-cyan-400" aria-hidden="true">
                      *
                    </span>
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    onBlur={() => handleBlur("subject")}
                    aria-invalid={!!errors.subject}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    placeholder="Project Inquiry / Collaboration"
                    className={inputClass("subject")}
                  />

                  {errors.subject && (
                    <p
                      id="subject-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-200"
                  >
                    Message{" "}
                    <span className="text-cyan-400" aria-hidden="true">
                      *
                    </span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    placeholder="Tell me about your project, timeline, or what you'd like to discuss..."
                    className={`${inputClass("message")} resize-none`}
                  />

                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={
                      shouldReduceMotion || isSubmitting
                        ? {}
                        : { scale: 1.02 }
                    }
                    whileTap={
                      shouldReduceMotion || isSubmitting
                        ? {}
                        : { scale: 0.98 }
                    }
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-65"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
