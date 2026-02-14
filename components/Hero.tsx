"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 lg:py-0">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-parchment-100/50 via-transparent to-cyan-400/5 dark:from-ink-900/50 dark:to-cyan-600/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Typography-first content */}
        <div className="space-y-8 lg:space-y-12 opacity-0 animate-fade-in-up">
          {/* Logo + Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Image
              src="/logo.png"
              alt="Lyrate Logo"
              width={96}
              height={96}
              className="w-24 h-24"
            />
            <span className="font-display font-bold text-6xl tracking-tight text-ink-900 dark:text-parchment-100">
              Lyrate
            </span>
          </motion.div>

          {/* Separator line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="h-px w-full bg-ink-300 dark:bg-parchment-600 origin-left"
          />

          {/* Headline - Literary scale */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-bold text-4xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] tracking-tight"
          >
            <span className="block text-balance">Your library.</span>
            <span className="block text-balance text-gradient">Perfectly organized.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl lg:text-2xl font-body text-ink-700 dark:text-parchment-300 leading-relaxed max-w-xl text-balance"
          >
            A blazing-fast iOS eBook reader built for serious readers. Manage thousands of books, build reading habits, and enjoy a beautiful native reading experience.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://testflight.apple.com/join/VU4j4CwJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-body font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <span className="relative z-10">Join TestFlight Beta</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-ink-300 dark:border-parchment-700 text-ink-900 dark:text-parchment-100 font-body font-semibold text-lg transition-all duration-300 hover:border-ink-900 dark:hover:border-parchment-300"
            >
              Explore Features →
            </a>
          </motion.div>
        </div>

        {/* Right: iPhone mockup with screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative lg:justify-self-end"
        >
          <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
            {/* Floating effect background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 dark:from-cyan-500/30 dark:to-cyan-700/30 blur-3xl rounded-full" />

            {/* Screenshot with elegant border */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-ink-900 dark:border-ink-800 bg-ink-900">
              <Image
                src="/screenshots/library.png"
                alt="Lyrate library interface showing clean organization"
                width={390}
                height={844}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-cyan-500/30" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
