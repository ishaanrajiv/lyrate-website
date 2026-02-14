"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const features: Array<{
  title: string;
  description: string;
  screenshot: string;
  accent: string;
  experimental?: boolean;
}> = [
    {
      title: "Reading Analytics",
      description: "Track reading time, pages, books completed, and streaks. Beautiful heatmaps reveal your reading patterns and help build consistent habits.",
      screenshot: "/screenshots/reading-stats.png",
      accent: "from-green-500 to-emerald-500",
    },
    {
      title: "Beautiful Reader",
      description: "Customize fonts, sizing, and spacing. Perfect dark and light modes. Clean, distraction-free reading interface built for focus.",
      screenshot: "/screenshots/reader-font-3.png",
      accent: "from-indigo-500 to-violet-500",
    },
    {
      title: "Rich Content Support",
      description: "Beautiful rendering of images, tables, and complex layouts. Your ePubs look exactly as they should.",
      screenshot: "/screenshots/rich-image-support.png",
      accent: "from-cyan-500 to-blue-500",
    },
    {
      title: "Smart Collections",
      description: "Organize your library with collections. Simple, clean interface makes managing thousands of books effortless.",
      screenshot: "/screenshots/collections.png",
      accent: "from-cyan-500 to-teal-500",
    },
    {
      title: "AI Summarization",
      description: "Optional AI-powered chapter and book summaries. Get the key points without spoilers, or ask questions about what you're reading.",
      screenshot: "/screenshots/ai-summarization.png",
      accent: "from-purple-500 to-pink-500",
      experimental: true,
    },
  ];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="relative py-24 lg:py-32 px-6 bg-parchment-100 dark:bg-ink-900">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl lg:text-6xl tracking-tight mb-6 text-balance"
          >
            Powerful features.{" "}
            <span className="text-gradient">Simple design.</span>
          </motion.h2>
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Feature list */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.button
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-6 lg:p-8 border-l-4 transition-all duration-300 ${activeFeature === index
                  ? "border-cyan-500 bg-parchment-50 dark:bg-ink-950 shadow-lg"
                  : "border-ink-200 dark:border-ink-800 hover:border-ink-400 dark:hover:border-ink-600"
                  }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className={`font-display font-semibold text-2xl lg:text-3xl transition-colors duration-300 ${activeFeature === index
                      ? "text-ink-900 dark:text-parchment-100"
                      : "text-ink-700 dark:text-parchment-300"
                      }`}
                  >
                    {feature.title}
                  </h3>
                  {feature.experimental && (
                    <span className="px-2 py-1 text-xs font-body font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                      Experimental
                    </span>
                  )}
                </div>
                <p
                  className={`font-body text-lg leading-relaxed transition-colors duration-300 ${activeFeature === index
                    ? "text-ink-700 dark:text-parchment-300"
                    : "text-ink-600 dark:text-parchment-400"
                    }`}
                >
                  {feature.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Right: Screenshot showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-8"
          >
            <div className="relative">
              {/* Gradient background */}
              <div className={`absolute -inset-8 bg-gradient-to-br ${features[activeFeature].accent} opacity-20 blur-3xl rounded-full transition-all duration-500`} />

              {/* Device frame - 25% smaller */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-ink-900 dark:border-ink-800 bg-ink-900 max-w-xs mx-auto">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={features[activeFeature].screenshot}
                    alt={features[activeFeature].title}
                    width={293}
                    height={633}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>

              {/* Feature indicator */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeFeature === index
                      ? "bg-cyan-500 w-8"
                      : "bg-ink-400 dark:bg-ink-600 hover:bg-ink-500"
                      }`}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
