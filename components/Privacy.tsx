"use client";

import { motion } from "framer-motion";

const privacyFeatures = [
  {
    title: "Local-First Architecture",
    description: "Your books, highlights, reading progress, and statistics live on your device. No cloud sync required, no data harvesting.",
  },
  {
    title: "Optional On-Device AI",
    description: "Use Apple Intelligence for completely private, on-device AI summaries and Q&A. Your reading stays between you and your device.",
  },
  {
    title: "Secure Key Storage",
    description: "If you choose cloud AI providers, your API keys are encrypted in iOS Keychain. Lyrate never sees or stores them.",
  },
  {
    title: "Full Data Control",
    description: "Complete backup/restore, cache management, and data export. Your library belongs to you, not a platform.",
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="relative py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 lg:mb-24 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-4xl">🔐</span>
              <span className="text-sm tracking-[0.3em] uppercase text-ink-600 dark:text-parchment-400 font-body font-semibold">
                Privacy First
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-6xl tracking-tight mb-6 text-balance">
              Your reading life stays{" "}
              <span className="text-gradient">yours</span>
            </h2>
            <p className="text-xl lg:text-2xl font-body text-ink-600 dark:text-parchment-400 leading-relaxed">
              Built with privacy and data ownership at the core. No tracking. No data collection. No compromises.
            </p>
          </motion.div>
        </div>

        {/* Privacy features */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 lg:p-10 border-2 border-ink-200 dark:border-ink-800 bg-parchment-50/80 dark:bg-ink-900/80 backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-xl">
                <h3 className="font-display font-semibold text-2xl lg:text-3xl mb-4 text-ink-900 dark:text-parchment-100">
                  {feature.title}
                </h3>
                <p className="font-body text-lg text-ink-700 dark:text-parchment-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center p-12 lg:p-16 border border-ink-300 dark:border-ink-700 bg-gradient-to-br from-parchment-100 to-parchment-200 dark:from-ink-900 dark:to-ink-800"
        >
          <p className="font-display text-2xl lg:text-3xl font-semibold text-ink-900 dark:text-parchment-100 leading-relaxed mb-6">
            "A reading app shouldn't need to know what you read, when you read, or how much you read."
          </p>
          <p className="font-body text-lg text-ink-600 dark:text-parchment-400">
            That's why Lyrate keeps everything local by default. AI features are entirely optional, and when you do use them, you control exactly what data leaves your device.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
