"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Native Performance",
    description: "Blazing-fast native iOS app. Handles 1000+ books effortlessly with smart caching. Instant word and phrase search across your entire library. Pages load instantly, no lag.",
  },
  {
    title: "Simple Organization",
    description: "Clean, intuitive interface. Create collections to organize your books. Fast import from Files, AirDrop, or Calibre. Your library stays perfectly organized.",
  },
  {
    title: "Reading Habits",
    description: "Track your reading time, pages read, and streaks. Beautiful analytics show your reading patterns. Build consistent habits with daily goals and progress tracking.",
  },
  {
    title: "Reader Features",
    description: "Beautiful light and dark modes. Customize fonts, sizing, and spacing to your preference. Optional AI summarization for chapter and book summaries.",
  },
];

export default function Pillars() {
  return (
    <section className="relative py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-6xl tracking-tight mb-6 text-balance">
              Everything you need.{" "}
              <span className="text-gradient">Nothing you don't.</span>
            </h2>
            <p className="text-xl lg:text-2xl font-body text-ink-600 dark:text-parchment-400 leading-relaxed">
              Four core pillars that make Lyrate the best way to read on iOS.
            </p>
          </motion.div>
        </div>

        {/* Pillars grid - 2x2 layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card background with subtle border */}
              <div className="relative h-full p-8 lg:p-10 border border-ink-200 dark:border-ink-800 bg-parchment-50/50 dark:bg-ink-900/50 backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                {/* Title */}
                <h3 className="font-display font-semibold text-2xl lg:text-3xl mb-4 text-ink-900 dark:text-parchment-100">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-body text-lg text-ink-700 dark:text-parchment-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
