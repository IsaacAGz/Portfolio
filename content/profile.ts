/**
 * The page and the chatbot both read this file.
 */
export const profile = {
  name: "Isaac Angulo Gomez",
  role: "Full-stack developer",
  pitch: "I build web applications, from the interface through to a running deployment.",
  email: "isaac.angulogomez@gmail.com",
  linkedin: "https://www.linkedin.com/in/isaac-angulo-gomez-8aa9b61b0/",
  github: "https://github.com/IsaacAGz",
  about: [
    "I live in San Diego and finished a B.S. in Computer Science at San Diego State University in May 2026. I build web platforms, and the APIs and databases behind them.",
    "I like following a request from the screen through the data and out to a deployment someone can actually open.",
  ],
  skillGroups: [
    {
      name: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    },
    {
      name: "Frameworks",
      items: ["React", "Next.js", "Astro", "Vue", "Node.js", "FastAPI"],
    },
    {
      name: "Tools",
      items: ["PostgreSQL", "SQLite", "Docker", "Git", "Linux", "Cloudflare"],
    },
  ],
  experience: [
    {
      role: "Helpdesk Technician",
      org: "Turning Point Therapeutics",
      dates: "Jan 2022 — Aug 2022",
      outcomes: [
        "Supported Windows and Mac users on software, hardware, printers, and network access, and tracked tickets in ServiceNow through resolution or escalation.",
        "Wrote knowledge-base articles and onboarding guides, and handled account permissions and equipment when people joined or left.",
      ],
    },
    {
      role: "Cyber Network Operator",
      org: "United States Marine Corps",
      dates: "Jan 2017 — June 2021",
      outcomes: [
        "Supported more than 300 users on workstations, applications, and network access, and administered Active Directory accounts and permissions. I hold an active DoD Secret clearance.",
        "Maintained Linux servers and VMware ESXi hosts, including patching, and wrote the procedures and user guides for that work.",
      ],
    },
  ],
  projects: [
    {
      name: "Casa Toro",
      summary:
        "A bilingual site for a cabin in Valle de Guadalupe, between Tecate and Ensenada. I designed and built it in Astro, and stay inquiries open WhatsApp.",
      stack: ["Astro", "Vue", "Tailwind CSS"],
      liveUrl: "https://casa-toro-eight.vercel.app/en/",
      repoUrl: "https://github.com/IsaacAGz/Casa-Toro",
    },
    {
      name: "Power Meals",
      summary:
        "A Spanish site for a Tijuana meal-prep kitchen. The order form writes a complete WhatsApp message, and payment happens later by transfer.",
      stack: ["Next.js", "TypeScript", "MapLibre", "Cloudflare"],
      liveUrl: "https://power-meals.isaac-angulogomez.workers.dev/",
    },
    {
      name: "Roadtrip Planner",
      summary:
        "A planner that drafts a day-by-day driving itinerary, then checks every drive against real routing data. Impossible trips are rejected before the model runs.",
      stack: ["Python", "FastAPI", "React", "Leaflet"],
      repoUrl: "https://github.com/IsaacAGz/Roadtrip-Planner",
    },
    {
      name: "Card Scanner",
      summary:
        "A service that finds Magic: The Gathering cards in photos and video, names them against official art, and exports straightened crops.",
      stack: ["Python", "FastAPI", "YOLO", "OpenCV"],
      repoUrl: "https://github.com/IsaacAGz/Card-Scanner",
    },
  ],
} as const;
