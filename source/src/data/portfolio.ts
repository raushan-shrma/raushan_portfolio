export type Project = {
  name: string;
  description: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export const profile = {
  name: "Raushan Kumar",
  email: "raushankumar30887@gmail.com",
  phone: "7739232121",
  github: "https://github.com/raushan-shrma",
  linkedin: "https://www.linkedin.com/in/raushan-kumar-908b66363/",
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Express", "REST APIs", "JSON", "Socket.IO"],
  },
  {
    name: "Database",
    skills: ["MySQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Postman", "Vite", "VS Code"],
  },
];

export const projects: Project[] = [
  {
    name: "Secret Imposter",
    description:
      "A real-time multiplayer social deduction game with live rooms, synchronized player states, and event-driven gameplay.",
    technologies: ["React", "Node.js", "Express", "Socket.IO"],
    category: "Full stack · Real time",
  },
  {
    name: "Student Management System",
    description:
      "A student management application pairing a React interface with a Spring Boot API and MySQL data storage.",
    technologies: ["React", "Spring Boot", "MySQL"],
    category: "Full stack · Java",
  },
  {
    name: "E-commerce Product Store",
    description:
      "A responsive storefront experience for browsing products, built with a modern React and Vite frontend.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    category: "Frontend · Commerce",
    github: "https://github.com/raushan-shrma/ecommerce-product-store",
    demo: "https://raushan-shrma.github.io/ecommerce-product-store/",
  },
  {
    name: "Personal Finance Dashboard",
    description:
      "A personal finance dashboard that brings spending insights and chart-based summaries into one clear view.",
    technologies: ["React", "Tailwind CSS", "Charts"],
    category: "Frontend · Dashboard",
    github: "https://github.com/raushan-shrma/personal-finance-dashboard",
    demo: "https://raushan-shrma.github.io/personal-finance-dashboard/",
  },
  {
    name: "Link Shortener",
    description:
      "A full-stack link-shortening project with a React client and a Node.js and Express backend.",
    technologies: ["React", "Node.js", "Express"],
    category: "Full stack · Utility",
    github: "https://github.com/raushan-shrma/link-shortner",
  },
  {
    name: "Job Tracker",
    description:
      "A responsive job tracking application with REST API job data, search and filtering, bookmarking, and local data persistence to help organize applications.",
    technologies: ["React", "Vite", "JavaScript", "REST API"],
    category: "Frontend · Productivity",
    github: "https://github.com/raushan-shrma/job-tracker",
    demo: "https://raushan-shrma.github.io/job-tracker/",
  },
];
