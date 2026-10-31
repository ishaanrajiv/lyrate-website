// All site copy. Keep claims in line with Lyrate-iOS README.md: features behind
// flags there (AI, Calibre) are not mentioned until they ship.
import type { IconName } from "./icons";

export const TESTFLIGHT_URL = "https://testflight.apple.com/join/VU4j4CwJ";
export const SUPPORT_EMAIL = "lyrate@ishaanrajiv.com";

export interface Screenshot {
  light: string;
  dark?: string;
  alt: string;
}

export const SHOTS = {
  library: {
    light: "/shots/library-light.png",
    dark: "/shots/library-dark.png",
    alt: "The Lyrate library, with Continue Reading covers above a list of books",
  },
  reader: {
    light: "/shots/reader-serif-light.png",
    dark: "/shots/reader-serif-dark.png",
    alt: "The opening of chapter VII of The Great Gatsby, set in Georgia",
  },
  search: {
    light: "/shots/search-light.png",
    dark: "/shots/search-dark.png",
    alt: "A search for “green light” finding passages in five books",
  },
  typography: {
    light: "/shots/typography-light.png",
    alt: "Reading Settings with typeface, size, spacing, columns and margins",
  },
} satisfies Record<string, Screenshot>;

export const NAV_LINKS = [
  { label: "Reading", href: "#reading" },
  { label: "Library", href: "#library" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO = {
  eyebrow: "EPUB reader for iPhone and iPad",
  title: "A quiet place to read.",
  body: "Lyrate keeps your books on your device and stays out of the way while you read them. There is no account to make and nothing asking for your attention.",
  primary: "Join the TestFlight beta",
  secondary: "See the reader",
  note: "Free beta · iOS and iPadOS 26 or later",
};

export const READING = {
  label: "The page",
  title: "Set the page the way you like to read.",
  body: "Pick a typeface, then adjust the size, line and paragraph spacing, margins and alignment. Lyrate justifies and hyphenates properly, and moves to two columns when the page is wide enough. Your place, highlights and bookmarks stay attached to the text when the layout changes.",
  specimenNote:
    "Try it here. These are the reader's own typefaces; browsers without them substitute the nearest match.",
  // Public domain (US): F. Scott Fitzgerald, The Great Gatsby (1925), chapter VII.
  specimenText:
    "It was when curiosity about Gatsby was at its highest that the lights in his house failed to go on one Saturday night—and, as obscurely as it had begun, his career as Trimalchio was over. Only gradually did I become aware that the automobiles which turned expectantly into his drive stayed for just a minute and then drove sulkily away.",
};

export const TYPEFACES = [
  { name: "Seravek", stack: "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif" },
  { name: "Georgia", stack: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" },
  { name: "Avenir Next", stack: "'Avenir Next', Avenir, Montserrat, Corbel, 'URW Gothic', sans-serif" },
  { name: "Palatino", stack: "Palatino, 'Palatino Linotype', 'Book Antiqua', 'URW Palladio L', serif" },
] as const;

export interface Detail {
  icon: IconName;
  title: string;
  body: string;
}

export const DETAILS: { label: string; title: string; items: Detail[] } = {
  label: "In the reader",
  title: "Small things, done carefully.",
  items: [
    {
      icon: "document-text",
      title: "Footnotes in place",
      body: "Notes open over the page, so you never lose your spot to read one.",
    },
    {
      icon: "search-text",
      title: "A dictionary built in",
      body: "Press and hold a word to look it up, offline, without leaving the book.",
    },
    {
      icon: "highlight",
      title: "Highlights that hold",
      body: "Highlights and bookmarks are pinned to the text, not the page number.",
    },
    {
      icon: "quote",
      title: "Quotes worth sharing",
      body: "Turn a passage into a styled image and send it anywhere.",
    },
    {
      icon: "listen",
      title: "Read aloud",
      body: "Have the page read to you with the voices already on your device.",
    },
    {
      icon: "contents",
      title: "Chapters at a glance",
      body: "The progress bar marks every chapter, so you can see how far the next break is.",
    },
    {
      icon: "brightness",
      title: "Brightness by touch",
      body: "Slide up or down in the middle of the page to dim or brighten it.",
    },
    {
      icon: "book-open",
      title: "Wide tables, opened up",
      body: "A table too wide for the page opens on its own, at full width.",
    },
  ],
};

export const LIBRARY = {
  label: "The library",
  title: "Every book where you left it.",
  points: [
    {
      icon: "book-import",
      title: "Bring your own books",
      body: "Add EPUB files from Files, Mail or Safari, one at a time or several at once. MOBI and PRC files open too, with some limits.",
    },
    {
      icon: "collections",
      title: "Shelves",
      body: "Arrange books on shelves of your own. Series and quick filters appear as shelves by themselves.",
    },
    {
      icon: "search",
      title: "Search inside every book",
      body: "Find a title or author, or search the text of your whole library and jump straight to the passage.",
    },
    {
      icon: "stats",
      title: "Reading stats",
      body: "Reading time, pages turned, finished books, your current streak and the hours you tend to read.",
    },
  ] satisfies Detail[],
};

export const PRIVACY = {
  label: "Privacy",
  title: "Your books live on this device.",
  body: "Lyrate has no account, no sign-in and no server holding your library. What you read, and how much, stays with you.",
  policyLink: "Read the privacy policy",
  points: [
    {
      icon: "lock",
      title: "Nothing watching",
      body: "The app contains no analytics or advertising code, and doesn’t track you across apps.",
    },
    {
      icon: "archive",
      title: "One-file backups",
      body: "Save your books, highlights and stats to a single ZIP file, and restore them on another iPhone or iPad.",
    },
    {
      icon: "check",
      title: "Works offline",
      body: "Reading, search, the dictionary and stats all work without a connection.",
    },
  ] satisfies Detail[],
};

export const FAQ = [
  {
    question: "Which file formats does Lyrate open?",
    answer:
      "EPUB is fully supported. MOBI and PRC files open, but some images in those formats may not display. Fixed-layout EPUBs are reflowed rather than shown as fixed pages.",
  },
  {
    question: "Which devices does it run on?",
    answer: "iPhone and iPad running iOS or iPadOS 26 or later. On iPad the reader can set text in two columns.",
  },
  {
    question: "Do I need an account?",
    answer: "No. Open the app and start reading. Your library lives on your device.",
  },
  {
    question: "Can I move my library to a new device?",
    answer:
      "Yes. Back up from Settings to a ZIP file containing your books, highlights and reading stats, then restore it on the new device.",
  },
  {
    question: "I don’t have any EPUB files yet. Can I still try it?",
    answer: "Lyrate comes with Pride and Prejudice, so there is something to read the moment it is installed.",
  },
  {
    question: "How do I get the beta?",
    answer:
      "Lyrate is in public beta on TestFlight. Install Apple’s TestFlight app, then open the invite link on your iPhone or iPad.",
  },
];

export const CLOSING = {
  title: "Start with a classic.",
  body: "Lyrate comes with Pride and Prejudice, so you can start reading as soon as it’s installed.",
};
