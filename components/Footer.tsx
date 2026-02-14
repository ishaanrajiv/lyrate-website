"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <footer className="relative py-16 lg:py-24 px-6 border-t border-ink-200 dark:border-ink-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-3xl mb-4 text-ink-900 dark:text-parchment-100">
              Lyrate
            </h3>
            <p className="font-body text-lg text-ink-600 dark:text-parchment-400 leading-relaxed max-w-md mb-6">
              A blazing-fast iOS eBook reader. Manage thousands of books, build reading habits, and enjoy a beautiful native reading experience.
            </p>
            <a
              href="https://testflight.apple.com/join/VU4j4CwJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-body font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Join TestFlight Beta
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-ink-900 dark:text-parchment-100">
              Product
            </h4>
            <ul className="space-y-3 font-body text-ink-600 dark:text-parchment-400">
              <li>
                <a href="#features" className="hover:text-cyan-500 transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#reading-habits" className="hover:text-cyan-500 transition-colors duration-300">
                  Reading Habits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors duration-300">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors duration-300">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-ink-900 dark:text-parchment-100">
              Resources
            </h4>
            <ul className="space-y-3 font-body text-ink-600 dark:text-parchment-400">
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors duration-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-ink-600 dark:text-parchment-400">
            © 2026 Lyrate. Built for readers who care about craft.
          </p>
          <div className="flex items-center gap-6 font-body text-sm text-ink-600 dark:text-parchment-400">
            <a href="#" className="hover:text-cyan-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-500 transition-colors duration-300">
              Terms of Service
            </a>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-xs opacity-50 hover:opacity-100 transition-opacity duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
