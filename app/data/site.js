// app/data/site.js

export const siteMeta = {
  name: "Ala Ahmed",
  role: "Full Stack JavaScript Developer",
  location: "Tunis, Tunisia 🇹🇳",
  email: "contact@evootech.com",
  availability: true,
  bio: [
    `Hey — I'm a <strong class="text-terminal-green">Full Stack JavaScript developer</strong> based in <strong class="text-terminal-cyan">Tunis, Tunisia</strong>, specialising in building complete web applications from the ground up.`,
    `My core stack revolves around <strong class="text-terminal-green">Nuxt.js</strong> on the frontend and <strong class="text-terminal-green">Express.js</strong> on the backend, backed by both relational (<strong class="text-terminal-cyan">PostgreSQL</strong>) and document-based (<strong class="text-terminal-cyan">MongoDB</strong>) databases.`,
    `I enjoy working on products end-to-end — from designing RESTful APIs and managing database schemas to building smooth, performant UI with SSR capabilities. Particularly interested in <strong class="text-terminal-green">real-time applications</strong> and developer tooling.`,
  ],
  stats: [
    { label: "EXPERIENCE", value: "7+ yrs" },
    { label: "PROJECTS", value: "22+" },
    { label: "STACK", value: "JS" },
    { label: "AVAILABLE", value: "YES", green: true },
  ],
};

export const skills = [
  {
    label: "Frontend",
    comment: "// Frontend",
    tags: [
      { name: "Nuxt.js", highlight: true },
      { name: "Vue.js", highlight: true },
      { name: "Pinia" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Webpack" },
      { name: "Vite" },
    ],
  },
  {
    label: "Backend",
    comment: "// Backend",
    tags: [
      { name: "Express.js", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "REST API" },
      { name: "JWT Auth" },
      { name: "Middleware" },
      { name: "Socket.io" },
      { name: "Multer" },
    ],
  },
  {
    label: "Databases",
    comment: "// Databases",
    tags: [
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "Sequelize" },
      { name: "Mongoose" },
      { name: "Redis" },
      { name: "SQL" },
    ],
  },
  {
    label: "DevOps & Tools",
    comment: "// DevOps & Tools",
    tags: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "Nginx" },
      { name: "GitHub Actions" },
      { name: "Postman" },
    ],
  },
];

export const socialLinks = [
  {
    label: "contact@evootech.com",
    href: "mailto:contact@evootech.com",
    icon: "✉",
  },
  {
    label: "Github",
    href: "https://github.com/ala1ahmed",
    icon: "⌥",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/ala-ahmed/",
    icon: "◈",
  },
];
