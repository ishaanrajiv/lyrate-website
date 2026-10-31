import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import { SUPPORT_EMAIL } from "@/components/content";

const title = "Lyrate support";
const description = "Get help with Lyrate for iPhone and iPad, report a problem, or suggest an improvement.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/support" },
  openGraph: { title, description, url: "/support", type: "website" },
};

export default function Support() {
  return (
    <>
      <TopNav />
      <main id="top" className="px-5 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-24">
        <article className="mx-auto max-w-[42rem]">
          <header className="border-b rule pb-10 sm:pb-12">
            <p className="label">Here to help</p>
            <h1 className="display mt-4 text-[2.75rem] sm:text-[4rem]">Lyrate support</h1>
            <p className="lede mt-8">
              Have a question, found a bug, or have an idea for Lyrate? Send an email.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-6 inline-block rounded-sm text-lg font-semibold underline decoration-ink/40 underline-offset-4 transition-colors hover:decoration-ink"
            >
              {SUPPORT_EMAIL}
            </a>
          </header>

          <section aria-labelledby="reporting-a-problem" className="mt-12 sm:mt-14">
            <h2 id="reporting-a-problem" className="text-2xl font-semibold tracking-[-0.025em]">
              Reporting a problem
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.8] text-ink/80">
              These details help work out what happened:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.0625rem] leading-[1.8] text-ink/80 [&_li]:pl-1">
              <li>Your iPhone or iPad model and iOS or iPadOS version</li>
              <li>The Lyrate app version</li>
              <li>What you were doing, what you expected, and what happened instead</li>
            </ul>
            <p className="mt-5 text-[1.0625rem] leading-[1.8] text-ink/80">
              A screenshot can help, too.
            </p>
          </section>

          <nav aria-label="More help" className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t rule pt-8 text-sm font-semibold sm:mt-14">
            <Link href="/#faq" className="rounded-sm underline decoration-ink/40 underline-offset-4 hover:decoration-ink">
              Frequently asked questions
            </Link>
            <Link href="/privacy" className="rounded-sm underline decoration-ink/40 underline-offset-4 hover:decoration-ink">
              Privacy policy
            </Link>
          </nav>
        </article>
      </main>
      <footer>
        <SiteFooter />
      </footer>
    </>
  );
}
