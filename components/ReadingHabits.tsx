"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ReadingHabits() {
  return (
    <section id="reading-habits" className="relative py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Gradient background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-green-400/20 to-emerald-600/20 dark:from-green-500/30 dark:to-emerald-700/30 blur-3xl rounded-full" />

              {/* Device frame - 25% smaller */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-ink-900 dark:border-ink-800 bg-ink-900 max-w-xs mx-auto">
                <Image
                  src="/screenshots/reading-stats.png"
                  alt="Reading statistics and analytics"
                  width={293}
                  height={633}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="text-sm tracking-[0.3em] uppercase text-ink-600 dark:text-parchment-400 font-body font-semibold">
                  Track Progress
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl lg:text-6xl tracking-tight mb-6 text-balance">
                Build lasting{" "}
                <span className="text-gradient">reading habits</span>
              </h2>
              <p className="text-xl lg:text-2xl font-body text-ink-600 dark:text-parchment-400 leading-relaxed mb-8">
                See your progress. Stay motivated. Read more consistently.
              </p>
            </motion.div>

            {/* Stats features */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-xl lg:text-2xl mb-2 text-ink-900 dark:text-parchment-100">
                      Reading Time & Pages
                    </h3>
                    <p className="font-body text-lg text-ink-700 dark:text-parchment-300 leading-relaxed">
                      Track total time spent reading and pages completed. See your progress over days, weeks, and months.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-xl lg:text-2xl mb-2 text-ink-900 dark:text-parchment-100">
                      Reading Streaks
                    </h3>
                    <p className="font-body text-lg text-ink-700 dark:text-parchment-300 leading-relaxed">
                      Build consistency with daily reading streaks. Stay motivated to read every day.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-xl lg:text-2xl mb-2 text-ink-900 dark:text-parchment-100">
                      Activity Heatmap
                    </h3>
                    <p className="font-body text-lg text-ink-700 dark:text-parchment-300 leading-relaxed">
                      Beautiful heatmap visualization shows your reading patterns at a glance. Identify your most productive reading days.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-xl lg:text-2xl mb-2 text-ink-900 dark:text-parchment-100">
                      Books Completed
                    </h3>
                    <p className="font-body text-lg text-ink-700 dark:text-parchment-300 leading-relaxed">
                      Celebrate every book you finish. Track completion rates and set yearly goals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
