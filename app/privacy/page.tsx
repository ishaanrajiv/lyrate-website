import type { Metadata } from "next";
import type { ReactNode } from "react";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import { SUPPORT_EMAIL } from "@/components/content";

const title = "Lyrate privacy policy";
const description =
  "How Lyrate stores your library on your device, handles optional metadata lookups, and lets you manage your data and backups.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy", type: "website" },
};

function PolicySection({
  id,
  title,
  children,
}: Readonly<{ id: string; title: string; children: ReactNode }>) {
  return (
    <section aria-labelledby={id} className="mt-12 sm:mt-14">
      <h2 id={id} className="mb-5 text-2xl font-semibold tracking-[-0.025em] text-ink">
        {title}
      </h2>
      <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-ink/80 [&_a]:text-ink [&_a]:underline [&_a]:decoration-ink/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-ink [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <TopNav />
      <main id="top" className="px-5 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-24">
        <article className="mx-auto max-w-[42rem]">
          <header className="border-b rule pb-10 sm:pb-12">
            <p className="label">Your data</p>
            <h1 className="display mt-4 text-[2.75rem] sm:text-[4rem]">Privacy policy</h1>
            <p className="mt-5 text-sm text-ink/60">
              Last updated: <time dateTime="2026-10-31">31 October 2026</time>
            </p>
            <p className="lede mt-8">
              Lyrate is an eBook reader for iPhone and iPad. This policy explains what
              happens to your information when you use it.
            </p>
          </header>

          <PolicySection id="short-version" title="The short version">
            <p>
              Lyrate has no account, analytics, advertising or tracking. Your library and
              reading activity are stored on your device and are not sent to the developer.
              Optional metadata lookups send limited book details to external catalogues,
              as explained below.
            </p>
          </PolicySection>

          <PolicySection id="device-storage" title="What stays on your device">
            <p>Lyrate stores the following in its own storage on your iPhone or iPad:</p>
            <ul>
              <li>Books you import, their covers and the details you edit</li>
              <li>Highlights, bookmarks and shelves</li>
              <li>Reading positions and reading statistics, such as time spent reading and days read</li>
              <li>Your reading and app settings</li>
            </ul>
            <p>
              The developer cannot see this local data. It remains until you remove it or
              delete the app. Deleting Lyrate removes its local app data. Offloading the app
              keeps its documents and data so you can reinstall it later.
            </p>
            <p>
              Your device&apos;s iCloud or computer backups may include Lyrate&apos;s data,
              depending on your backup settings. Deleting Lyrate does not delete exported
              ZIP files or existing device backups. You manage those separately through
              their storage location or backup settings. The developer holds no copy of
              your library to delete.
            </p>
            <p>
              Dictionary lookups and read-aloud run on your device. Read-aloud uses the
              speech voices built into iOS.
            </p>
          </PolicySection>

          <PolicySection id="backups" title="Backups you create">
            <p>
              Settings &gt; Advanced &gt; Backup All Data creates a ZIP file of your library,
              annotations, reading statistics and settings. You choose where to save or
              share it, for example the Files app or iCloud Drive.
            </p>
            <p>
              Lyrate does not send the backup to the developer. Saving or sharing it through
              a cloud service transfers it to the service you choose, under that
              service&apos;s terms and privacy policy.
            </p>
          </PolicySection>

          <PolicySection id="online-features" title="Optional online features">
            <p>
              When you choose Fetch Metadata for a book or selected books, Lyrate contacts
              Open Library and Google Books to retrieve book details and missing covers.
              It sends the ISBN when available, or otherwise the title and author. It does
              not send the book&apos;s text, highlights, bookmarks or reading statistics.
            </p>
            <ul>
              <li>
                Open Library is run by the Internet Archive. Read its{" "}
                <a href="https://archive.org/about/terms">privacy policy</a>.
              </li>
              <li>
                Google Books is run by Google. Read its{" "}
                <a href="https://policies.google.com/privacy">privacy policy</a>.
              </li>
            </ul>
            <p>
              If a catalogue returns a cover image and the book is missing one, Lyrate
              downloads it. Lyrate does not add your name, account details or a unique
              device identifier to these requests. The services receive your IP address
              and the book details used for the lookup, and handle those requests under
              their own privacy policies.
            </p>
            <p>
              Metadata lookups happen only when you choose Fetch Metadata. You can use
              Lyrate without using this feature. To stop sending these requests, stop using
              Fetch Metadata. Deleting local data does not delete any request records
              retained by the catalogue services. Their policies explain their retention
              practices and available privacy choices.
            </p>
            <p>
              Links inside a book open in an in-app Safari view. The website you visit
              receives the visit and handles any resulting data under its own privacy
              policy, as it would when you browse in Safari.
            </p>
          </PolicySection>

          <PolicySection id="children" title="Children">
            <p>
              The developer does not knowingly collect personal information from children
              under 13 through Lyrate. The optional online features described above contact
              external services under their own privacy policies.
            </p>
          </PolicySection>

          <PolicySection id="contact" title="Contact">
            <p>
              For privacy questions or requests, email{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>
            <p>
              If you email support, the developer receives your email address, your message
              and any attachments you send. This information is used to respond to your
              request and is kept while needed to handle it and follow up on the issue.
              You can request deletion of your support correspondence at the same address.
            </p>
          </PolicySection>

          <PolicySection id="changes" title="Changes">
            <p>
              If a future version changes how Lyrate handles your information, this policy
              will be updated before that version is released, and the date at the top
              will change.
            </p>
          </PolicySection>
        </article>
      </main>
      <footer>
        <SiteFooter />
      </footer>
    </>
  );
}
