/**
 * Stand-in copy. Replace every field with your own name, jobs, and shipped
 * apps before launch. The page and, later, the chatbot both read this file.
 */
export const profile = {
  name: "Your Name",
  role: "Web developer",
  pitch: "I build and deploy web applications, and I care how they feel to use.",
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-name",
  github: "https://github.com/example",
  about: [
    "I take a product from the interface through to a running deployment. The work is usually a web app someone else has to rely on, so the screen, the data behind it, and the release all have to hold up.",
    "I like small teams, a clear problem, and software that is still understandable six months later.",
  ],
  skillGroups: [
    {
      name: "Languages",
      items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      name: "Frameworks",
      items: ["React", "Next.js", "Node.js"],
    },
    {
      name: "Tools",
      items: ["Git", "Linux", "AWS", "PostgreSQL"],
    },
  ],
  experience: [
    {
      role: "Web developer",
      org: "Company name",
      dates: "2024 — Present",
      outcomes: [
        "Shipped a customer-facing web app and stayed with it after launch.",
        "Simplified a slow page by cutting extra client work and shortening the data path.",
      ],
    },
    {
      role: "Junior web developer",
      org: "Studio name",
      dates: "2022 — 2024",
      outcomes: [
        "Built internal tools that replaced a weekly spreadsheet handoff.",
        "Paired with design on the screens people actually used every day.",
      ],
    },
  ],
  projects: [
    {
      name: "Ledger",
      summary:
        "A shared budget app for a small team: accounts, monthly totals, and a status page anyone on the project can open.",
      stack: ["Next.js", "TypeScript", "PostgreSQL"],
      liveUrl: "https://example.com/ledger",
      repoUrl: "https://github.com/example/ledger",
    },
    {
      name: "Harbor",
      summary:
        "A deployment log that shows what shipped, when it shipped, and whether the check passed.",
      stack: ["React", "Node.js"],
      liveUrl: "https://example.com/harbor",
      repoUrl: "https://github.com/example/harbor",
    },
    {
      name: "Relay",
      summary:
        "A lightweight status board for on-call notes, with a public view and a private edit screen.",
      stack: ["Next.js", "SQL"],
      liveUrl: "https://example.com/relay",
      repoUrl: "https://github.com/example/relay",
    },
  ],
} as const;
