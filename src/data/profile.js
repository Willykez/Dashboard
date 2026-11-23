// Central content file. Edit this to change everything shown in the app —
// no component code needs to change.

export const profile = {
  name: "Your Name",
  title: "Independent Developer",
  tagline: "I build native Android apps and web tools, end to end.",
  avatarInitials: "YN",
  location: "Dar es Salaam, Tanzania",
  status: "Available for freelance work",
  bio: "I'm a self-directed software developer focused on native Android " +
    "development with Kotlin and Jetpack Compose, plus web projects spanning " +
    "full static sites to small SaaS tools. I like building things end to end — " +
    "product thinking, UI, and the engine underneath.",
  email: "you@example.com",
  resumeUrl: "#",
  social: [
    { label: "GitHub", url: "https://github.com/yourname", icon: "github" },
    { label: "Email", url: "mailto:you@example.com", icon: "mail" },
    { label: "Website", url: "https://example.com", icon: "globe" },
    { label: "X / Twitter", url: "https://x.com/yourname", icon: "twitter" },
  ],
};

export const stats = [
  { label: "Projects", value: 3, suffix: "" },
  { label: "Years coding", value: 5, suffix: "+" },
  { label: "GitHub repos", value: 18, suffix: "" },
  { label: "Cups of coffee", value: 1200, suffix: "+" },
];

export const skills = [
  { name: "Kotlin / Jetpack Compose", level: 92, category: "Android" },
  { name: "Android Architecture (MVVM, Rust/UniFFI)", level: 85, category: "Android" },
  { name: "JavaScript / React", level: 80, category: "Web" },
  { name: "HTML / CSS / Design systems", level: 78, category: "Web" },
  { name: "Rust", level: 65, category: "Systems" },
  { name: "SQL & data modeling", level: 70, category: "Backend" },
];

export const projects = [
  {
    id: "repomaster",
    name: "RepoMaster",
    tag: "Android",
    status: "Active build",
    description: "Native Kotlin/Jetpack Compose Git client for GitHub — browse, clone, " +
      "commit and manage repos entirely on-device.",
    details: "RepoMaster brings a full GitHub workflow to a native Android client: " +
      "repository browsing, diff viewing, commit history, and local Git operations, " +
      "all built with Jetpack Compose and a modern MVVM architecture.",
    highlights: ["Jetpack Compose UI", "On-device Git engine", "GitHub API integration"],
    url: "https://github.com/yourname/repomaster",
    year: "2026",
  },
  {
    id: "wordcraft",
    name: "WordCraft Android",
    tag: "Android",
    status: "Active build",
    description: "Android word processor built on the WordCraft Rust engine, with a " +
      "Kotlin/Compose UI connected through a UniFFI bridge.",
    details: "A full document editor for Android where the text engine is written in " +
      "Rust for performance and portability, exposed to Kotlin through UniFFI, with a " +
      "native Compose front end for editing, formatting, and file management.",
    highlights: ["Rust core engine", "UniFFI bridge", "Rich text editing"],
    url: "https://github.com/yourname/wordcraft-android",
    year: "2026",
  },
  {
    id: "trading-summit",
    name: "Trading Summit",
    tag: "Web",
    status: "Build & monetization",
    description: "Forex trading education website, covering course content, lead " +
      "capture, and monetization.",
    details: "A content-driven site teaching forex trading fundamentals, structured " +
      "around a funnel from free articles to paid courses, with analytics and " +
      "monetization built in from the start.",
    highlights: ["Content funnel", "SEO-first structure", "Monetization flow"],
    url: "https://example.com",
    year: "2025",
  },
];

export const activity = [
  {
    id: 1,
    date: "2026-11-18",
    title: "Shipped RepoMaster diff viewer",
    description: "Added a side-by-side diff viewer with syntax highlighting.",
    tag: "RepoMaster",
  },
  {
    id: 2,
    date: "2026-11-05",
    title: "WordCraft UniFFI bridge rewrite",
    description: "Rebuilt the Rust/Kotlin bridge layer for better type safety.",
    tag: "WordCraft Android",
  },
  {
    id: 3,
    date: "2026-10-22",
    title: "Trading Summit funnel redesign",
    description: "Reworked the landing funnel, improving signup conversion.",
    tag: "Trading Summit",
  },
  {
    id: 4,
    date: "2026-10-09",
    title: "Explored custom ROM tooling",
    description: "Side project: building flashing scripts for a custom Android ROM.",
    tag: "Exploration",
  },
  {
    id: 5,
    date: "2026-09-28",
    title: "RepoMaster architecture refactor",
    description: "Migrated to a cleaner MVVM structure across the app.",
    tag: "RepoMaster",
  },
];

export const nav = [
  { id: "dashboard", label: "Dashboard", icon: "home" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "activity", label: "Activity", icon: "activity" },
  { id: "about", label: "About", icon: "user" },
  { id: "contact", label: "Contact", icon: "mail" },
];
