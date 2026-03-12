// app/data/projects.js

export const projects = [
  {
    slug: "lingerie-rania",
    index: "001",
    status: "live",
    type: "Full Stack",
    year: "2021",
    title: "Lingerie Rania",
    shortTitle: "Lingerie Rania",
    tagline:
      "Full-featured e-commerce platform for a Tunisian lingerie brand with 5 stores across Tunisia.",
    description: `A production-grade e-commerce platform built for Lingerie Rania, a Tunisian lingerie brand with 5 shops across Tunisia. Built with Symfony 3.4 and MySQL, the platform covers the full shopping experience — from product browsing to checkout — alongside a complete admin dashboard for managing orders, inventory and customers. SwiftMailer handles transactional email notifications throughout.`,
    demoUrl: "https://lingerierania.com",
    githubUrl: null,
    seoTitle: "Lingerie Rania — Symfony 3.4 + MySQL E-Commerce Platform",
    seoDescription:
      "Full-stack e-commerce platform for Lingerie Rania, a Tunisian lingerie brand. Built with Symfony 3.4, MySQL, Twig and Bootstrap with a complete admin dashboard and SwiftMailer notifications.",
    techStack: [
      { name: "Twig", layer: "fe" },
      { name: "Bootstrap", layer: "fe" },
      { name: "Symfony 3.4", layer: "be" },
      { name: "MySQL", layer: "db" },
      { name: "SwiftMailer", layer: "ext" },
    ],
    architecture: [
      {
        title: "CLIENT LAYER",
        nodes: [
          { label: "Templating", value: "Twig", color: "green" },
          { label: "UI Framework", value: "Bootstrap", color: "default" },
        ],
      },
      {
        title: "API LAYER",
        nodes: [
          { label: "Backend", value: "Symfony 3.4", color: "green" },
          { label: "Mailer", value: "SwiftMailer", color: "default" },
        ],
      },
      {
        title: "DATA LAYER",
        nodes: [{ label: "Relational", value: "MySQL", color: "cyan" }],
      },
    ],
    features: [
      {
        icon: "🛍️",
        title: "Product Catalog",
        description:
          "Browsable product catalog with categories, filters and detailed product pages.",
      },
      {
        icon: "🛒",
        title: "Shopping Cart & Checkout",
        description:
          "Full cart management with a smooth checkout flow for end users.",
      },
      {
        icon: "📦",
        title: "Order Tracking",
        description:
          "Users can track their orders and view order history from their account.",
      },
      {
        icon: "👤",
        title: "User Accounts",
        description: "User registration, login and profile management.",
      },
      {
        icon: "📊",
        title: "Admin Dashboard",
        description:
          "Complete admin portal for managing products, inventory, orders and customers.",
      },
      {
        icon: "📧",
        title: "Email Notifications",
        description:
          "Transactional emails for order confirmations and updates via SwiftMailer.",
      },
    ],
    challenges: [],
    stats: [
      { label: "Year", value: "2021" },
      { label: "Status", value: "● Live", highlight: true },
    ],
  },

  {
    slug: "wiiform",
    index: "002",
    status: "live",
    type: "Full Stack",
    year: "2025",
    title: "Wiiform",
    shortTitle: "Wiiform",
    tagline:
      "All-in-one online training platform where trainers create, sell and automate courses with AI assistance.",
    description: `Wiiform is a comprehensive online training platform that empowers trainers to create and sell courses through configurable sales channels. It features a drag & drop course module builder supporting video, quizzes, PDFs and documents, alongside an AI integration layer that lets trainers connect their own AI accounts (Claude, OpenAI, Mistral, Gemini, Deepseek) to generate course content. The platform also supports enterprise accounts for tracking employee progress, automated mailing with a template builder, a certification builder, real-time chat and deep analytics for both trainers and learners.`,
    demoUrl: "https://wiiform.com",
    githubUrl: null,
    seoTitle:
      "Wiiform — Online Training Platform with AI, Drag & Drop Builder & Enterprise Accounts",
    seoDescription:
      "Wiiform is a full-stack online training platform built with Nuxt 3, Express.js and MongoDB. Features drag & drop course creation, AI content generation, enterprise accounts, automated mailing and certification builder.",
    techStack: [
      { name: "Nuxt 3", layer: "fe" },
      { name: "Vuex", layer: "fe" },
      { name: "Express.js", layer: "be" },
      { name: "Socket.io", layer: "be" },
      { name: "Nodemailer", layer: "be" },
      { name: "BullMQ", layer: "be" },
      { name: "MongoDB", layer: "db" },
      { name: "Custom File System", layer: "db" },
      { name: "Redis", layer: "db" },
      { name: "OpenAI", layer: "ext" },
      { name: "Claude", layer: "ext" },
      { name: "Mistral", layer: "ext" },
      { name: "Gemini", layer: "ext" },
      { name: "Deepseek", layer: "ext" },
    ],
    architecture: [
      {
        title: "CLIENT LAYER",
        nodes: [
          { label: "SSR / SPA", value: "Nuxt 3", color: "green" },
          { label: "State", value: "Vuex", color: "default" },
          { label: "DnD", value: "Custom Builder", color: "default" },
        ],
      },
      {
        title: "API LAYER",
        nodes: [
          { label: "REST API", value: "Express.js", color: "green" },
          { label: "Realtime", value: "Socket.io", color: "default" },
          { label: "Mailer", value: "Nodemailer", color: "default" },
          { label: "Queue", value: "BullMQ", color: "default" },
          { label: "AI Layer", value: "Multi-provider", color: "default" },
        ],
      },
      {
        title: "DATA LAYER",
        nodes: [
          { label: "Document DB", value: "MongoDB", color: "cyan" },
          { label: "File Storage", value: "Custom FS", color: "amber" },
          { label: "Cache", value: "Redis", color: "cyan" },
        ],
      },
    ],
    features: [
      {
        icon: "🎯",
        title: "Drag & Drop Course Builder",
        description:
          "Intuitive drag & drop system to create course modules supporting video, quizzes, PDFs and documents.",
      },
      {
        icon: "🤖",
        title: "AI Content Generation",
        description:
          "Trainers connect their own AI accounts (Claude, OpenAI, Mistral, Gemini, Deepseek) to generate course content with prompt engineering and conversation history for accuracy.",
      },
      {
        icon: "🛒",
        title: "Sales Channel Integration",
        description:
          "Sell courses through configurable sales channels similar to Shopify, with template selection directly from the platform.",
      },
      {
        icon: "🏢",
        title: "Enterprise Accounts",
        description:
          "Trainers can invite companies and give them enterprise accounts to manage and track employee learning progress.",
      },
      {
        icon: "🎓",
        title: "Certification Builder",
        description:
          "Drag & drop certification template builder to create and issue custom certificates to learners.",
      },
      {
        icon: "📧",
        title: "Automated Mailing",
        description:
          "BullMQ-powered mail automation with a drag & drop email template builder for transactional and marketing emails.",
      },
      {
        icon: "💬",
        title: "Online Chat",
        description:
          "Real-time chat powered by Socket.io for communication between trainers and learners.",
      },
      {
        icon: "📊",
        title: "Analytics",
        description:
          "Comprehensive analytics dashboard for both trainers and employees covering course performance, engagement and progress.",
      },
    ],
    challenges: [
      {
        title: "Drag & Drop Course Builder Performance",
        problem:
          "Building a smooth and accurate drag & drop course module editor with complex nested structures caused performance and accuracy issues.",
        solution:
          "Leveraged GPU transitions to offload rendering to the GPU, ensuring smooth animations and accurate element positioning during drag & drop interactions.",
      },
      {
        title: "Drag & Drop Certification Template Builder",
        problem:
          "Same performance and accuracy challenges appeared when building the certification template editor with free-form element placement.",
        solution:
          "Applied the same GPU transition approach to ensure smooth, precise drag & drop interactions across the certification canvas.",
      },
      {
        title: "Unified AI Provider Integration",
        problem:
          "Connecting and managing multiple AI providers (Claude, OpenAI, Mistral, Gemini, Deepseek) each with different SDKs, authentication flows and response formats under one unified interface was architecturally complex.",
        solution:
          "Designed and implemented a unified AI provider abstraction layer that normalizes authentication and response handling across all five providers, allowing trainers to plug in their own API keys seamlessly.",
      },
      {
        title: "AI Content Generation Accuracy",
        problem:
          "AI responses for course content generation were often inaccurate, off-topic or lacked the necessary context to produce useful training material.",
        solution:
          "Implemented conversation history tracking, context injection and prompt engineering techniques to guide the AI models into producing accurate, structured and relevant course content.",
      },
    ],
    stats: [
      { label: "Duration", value: "2 years" },
      { label: "API Endpoints", value: "150+", highlight: true },
      { label: "DB Collections", value: "20+", highlight: true },
      { label: "AI Providers", value: "5", highlight: true },
      { label: "Status", value: "● Live", highlight: true },
    ],
  },

  {
    slug: "wiifleet",
    index: "003",
    status: "live",
    type: "Full Stack",
    year: "2026",
    title: "Wiifleet",
    shortTitle: "Wiifleet",
    tagline:
      "Full-featured ERP for car rental agencies to manage fleets, clients and contracts with smart insights.",
    description: `Wiifleet is a comprehensive ERP platform built for car rental agencies. It streamlines the full rental workflow — from fleet and client management to contract creation — while providing smart tools like a real-time car queue showing vehicles entering and leaving the park, a custom-built booking agenda, and client statistics that surface past behaviour such as late returns or vehicle damage. Sub-user management with granular permissions makes it suitable for teams of any size.`,
    demoUrl: "https://wiifleet.com",
    githubUrl: null,
    seoTitle:
      "Wiifleet — Car Rental ERP with Fleet Management, Agenda & Client Insights",
    seoDescription:
      "Wiifleet is a full-stack ERP for car rental agencies built with Nuxt v4, Express.js and MongoDB. Features car queue, custom booking agenda, client statistics and sub-user permissions.",
    techStack: [
      { name: "Nuxt v4", layer: "fe" },
      { name: "Vuex", layer: "fe" },
      { name: "Express.js", layer: "be" },
      { name: "BullMQ", layer: "be" },
      { name: "MongoDB", layer: "db" },
      { name: "Redis", layer: "db" },
      { name: "Docker", layer: "ext" },
    ],
    architecture: [
      {
        title: "CLIENT LAYER",
        nodes: [
          { label: "SSR / SPA", value: "Nuxt v4", color: "green" },
          { label: "State", value: "Vuex", color: "default" },
          { label: "Agenda", value: "Custom Built", color: "default" },
        ],
      },
      {
        title: "API LAYER",
        nodes: [
          { label: "REST API", value: "Express.js", color: "green" },
          { label: "Queue", value: "BullMQ", color: "default" },
        ],
      },
      {
        title: "DATA LAYER",
        nodes: [
          { label: "Document DB", value: "MongoDB", color: "cyan" },
          { label: "Cache", value: "Redis", color: "cyan" },
        ],
      },
    ],
    features: [
      {
        icon: "🚗",
        title: "Fleet Management",
        description:
          "Complete car inventory management — add, update and track every vehicle in the agency's fleet.",
      },
      {
        icon: "👥",
        title: "Client Management",
        description:
          "Manage client profiles with full rental history and behaviour insights.",
      },
      {
        icon: "📄",
        title: "Contract Management",
        description:
          "Create and manage rental contracts with all necessary details and status tracking.",
      },
      {
        icon: "🚦",
        title: "Car Queue",
        description:
          "Beautiful real-time overview of cars scheduled to leave and enter the park, giving staff full visibility of fleet movement.",
      },
      {
        icon: "📊",
        title: "Client Statistics",
        description:
          "When creating a contract, instantly surface the client's history — previous car damage, late returns and overall reliability score.",
      },
      {
        icon: "📅",
        title: "Booking Agenda",
        description:
          "Custom-built agenda component providing a clear visual overview of all bookings and reservations.",
      },
      {
        icon: "👤",
        title: "Sub-users & Permissions",
        description:
          "Invite team members and assign granular permissions to control access across the platform.",
      },
    ],
    challenges: [
      {
        title: "Car Queue Date Management",
        problem:
          "Accurately calculating and displaying which cars are entering and leaving the park required complex date logic, with edge cases around overlapping contracts and timezone handling.",
        solution:
          "Implemented a robust custom date computation layer that correctly resolves all contract date ranges, ensuring the car queue always reflects an accurate real-time state of the fleet.",
      },
      {
        title: "Custom Booking Agenda",
        problem:
          "No existing agenda or calendar library matched the specific requirements of a car rental booking overview — existing solutions were either too generic or lacked the necessary flexibility.",
        solution:
          "Built a fully custom agenda component from scratch, tailored precisely to the car rental workflow with support for overlapping bookings, fleet-level views and intuitive navigation.",
      },
    ],
    stats: [
      { label: "Duration", value: "6 months" },
      { label: "API Endpoints", value: "50+", highlight: true },
      { label: "DB Collections", value: "10+", highlight: true },
      { label: "Status", value: "● Live", highlight: true },
    ],
  },
  {
    slug: "noore-lounge",
    index: "004",
    status: "live",
    type: "Full Stack",
    year: "2025",
    title: "Nooré Lounge",
    shortTitle: "Nooré Lounge",
    tagline:
      "Modern restaurant app for a UK-based lounge with table reservations, dine-in and pickup ordering.",
    description: `Nooré Lounge is a full-stack restaurant application built for a UK-based dining establishment. It offers customers a rich browsing experience with full restaurant and menu information, online table reservations and flexible ordering for both dine-in and pickup. An admin panel gives staff complete control over menu management, incoming orders and reservations, with email notifications keeping both staff and customers informed throughout.`,
    demoUrl: "https://noorelounge.com",
    githubUrl: null,
    seoTitle:
      "Nooré Lounge — Restaurant App with Reservations & Online Ordering",
    seoDescription:
      "Full-stack restaurant app for Nooré Lounge UK, built with Nuxt v4, Express.js and MongoDB. Features table reservations, dine-in and pickup ordering and a complete admin panel.",
    techStack: [
      { name: "Nuxt v4", layer: "fe" },
      { name: "Pinia", layer: "fe" },
      { name: "Express.js", layer: "be" },
      { name: "Nodemailer", layer: "be" },
      { name: "MongoDB", layer: "db" },
      { name: "Redis", layer: "db" },
      { name: "Docker", layer: "ext" },
    ],
    architecture: [
      {
        title: "CLIENT LAYER",
        nodes: [
          { label: "SSR / SPA", value: "Nuxt v4", color: "green" },
          { label: "State", value: "Pinia", color: "default" },
        ],
      },
      {
        title: "API LAYER",
        nodes: [
          { label: "REST API", value: "Express.js", color: "green" },
          { label: "Mailer", value: "Nodemailer", color: "default" },
        ],
      },
      {
        title: "DATA LAYER",
        nodes: [
          { label: "Document DB", value: "MongoDB", color: "cyan" },
          { label: "Cache", value: "Redis", color: "cyan" },
        ],
      },
    ],
    features: [
      {
        icon: "🍽️",
        title: "Restaurant & Menu Info",
        description:
          "Full restaurant presentation with detailed menu browsing and dish descriptions.",
      },
      {
        icon: "📅",
        title: "Table Reservations",
        description:
          "Clients can book a table online with date, time and party size selection.",
      },
      {
        icon: "🛍️",
        title: "Dine-in & Pickup Orders",
        description:
          "Flexible online ordering supporting both dine-in and pickup options.",
      },
      {
        icon: "🔔",
        title: "Email Notifications",
        description:
          "Automated email notifications via Nodemailer for order confirmations and reservation updates.",
      },
      {
        icon: "⚙️",
        title: "Admin Panel",
        description:
          "Complete back-office for managing the menu, incoming orders and table reservations.",
      },
    ],
    challenges: [],
    stats: [
      { label: "Duration", value: "2 weeks" },
      { label: "API Endpoints", value: "15", highlight: true },
      { label: "DB Collections", value: "5", highlight: true },
      { label: "Status", value: "● Live", highlight: true },
    ],
  },
  {
    slug: "lingerie-rania-v2",
    index: "005",
    status: "wip",
    type: "Full Stack",
    year: "2025",
    title: "Lingerie Rania v2",
    shortTitle: "Lingerie Rania v2",
    tagline:
      "Full redesign and rebuild of Lingerie Rania's e-commerce platform with advanced analytics and marketing tools.",
    description: `A complete redesign and tech stack overhaul of the original Lingerie Rania e-commerce platform. Migrated from Symfony to a modern Nuxt v4 and Express.js architecture with PostgreSQL, bringing significant performance improvements and a refreshed UI. The v2 adds deep product analytics with per-product revenue insights, newsletter-based marketing campaigns and promotional banner management — giving the brand powerful tools to grow and engage their customer base.`,
    demoUrl: null,
    githubUrl: null,
    seoTitle:
      "Lingerie Rania v2 — Nuxt v4 + Express + PostgreSQL E-Commerce Redesign",
    seoDescription:
      "Full redesign of Lingerie Rania's e-commerce platform built with Nuxt v4, Express.js and PostgreSQL. Features product analytics, revenue insights, newsletter campaigns and promotional banners.",
    techStack: [
      { name: "Nuxt v4", layer: "fe" },
      { name: "Pinia", layer: "fe" },
      { name: "Express.js", layer: "be" },
      { name: "Nodemailer", layer: "be" },
      { name: "PostgreSQL", layer: "db" },
      { name: "Redis", layer: "db" },
      { name: "Docker", layer: "ext" },
    ],
    architecture: [
      {
        title: "CLIENT LAYER",
        nodes: [
          { label: "SSR / SPA", value: "Nuxt v4", color: "green" },
          { label: "State", value: "Pinia", color: "default" },
        ],
      },
      {
        title: "API LAYER",
        nodes: [
          { label: "REST API", value: "Express.js", color: "green" },
          { label: "Mailer", value: "Nodemailer", color: "default" },
        ],
      },
      {
        title: "DATA LAYER",
        nodes: [
          { label: "Relational", value: "PostgreSQL", color: "cyan" },
          { label: "Cache", value: "Redis", color: "cyan" },
        ],
      },
    ],
    features: [
      {
        icon: "🛍️",
        title: "Product Catalog",
        description:
          "Browsable product catalog with categories, filters and detailed product pages.",
      },
      {
        icon: "🛒",
        title: "Shopping Cart & Checkout",
        description:
          "Full cart management with a smooth checkout flow for end users.",
      },
      {
        icon: "📦",
        title: "Order Tracking",
        description:
          "Users can track their orders and view order history from their account.",
      },
      {
        icon: "📊",
        title: "Product Analytics & Revenue Insights",
        description:
          "Deep per-product analytics showing sales performance, views and individual revenue contribution.",
      },
      {
        icon: "📧",
        title: "Newsletter Marketing Campaigns",
        description:
          "Built-in newsletter system to create and send marketing campaigns directly to the customer base.",
      },
      {
        icon: "🏷️",
        title: "Promotional Banners",
        description:
          "Admin-controlled promotional banners to highlight offers, new arrivals and seasonal campaigns.",
      },
      {
        icon: "🎨",
        title: "Full Redesign",
        description:
          "Completely refreshed UI/UX with improved design and significantly better performance over v1.",
      },
      {
        icon: "⚙️",
        title: "Admin Dashboard",
        description:
          "Complete admin portal for managing products, inventory, orders, customers and marketing.",
      },
    ],
    challenges: [],
    stats: [
      { label: "Duration", value: "5 months (ongoing)" },
      { label: "API Endpoints", value: "100+", highlight: true },
      { label: "DB Tables", value: "18", highlight: true },
      { label: "Status", value: "◐ WIP", highlight: true },
    ],
  },
  {
    slug: "dss-consulting",
    index: "006",
    status: "live",
    type: "Frontend",
    year: "2023",
    title: "DSS Consulting",
    shortTitle: "DSS Consulting",
    tagline:
      "Clean and professional showcase website for a French consulting agency.",
    description: `DSS Consulting is a sleek showcase website built for a France-based consulting agency. It presents the agency's identity, services and expertise through a clean and professional design, with an about section and a contact form powered by Nodemailer for direct client outreach.`,
    demoUrl: "https://dssconsulting.fr",
    githubUrl: null,
    seoTitle:
      "DSS Consulting — Showcase Website for a French Consulting Agency",
    seoDescription:
      "Professional showcase website for DSS Consulting, a France-based consulting agency. Built with Angular and Express.js featuring an about section and contact form.",
    techStack: [
      { name: "Angular", layer: "fe" },
      { name: "Express.js", layer: "be" },
      { name: "Nodemailer", layer: "ext" },
    ],
    architecture: [
      {
        title: "CLIENT LAYER",
        nodes: [{ label: "SPA", value: "Angular", color: "green" }],
      },
      {
        title: "API LAYER",
        nodes: [
          { label: "REST API", value: "Express.js", color: "green" },
          { label: "Mailer", value: "Nodemailer", color: "default" },
        ],
      },
    ],
    features: [
      {
        icon: "🏢",
        title: "Agency Showcase",
        description:
          "Full presentation of the agency's identity, values and expertise.",
      },
      {
        icon: "📋",
        title: "Services & About",
        description:
          "Detailed about section covering the agency's background and consulting services.",
      },
      {
        icon: "📧",
        title: "Contact Form",
        description:
          "Functional contact form with email delivery via Nodemailer for direct client enquiries.",
      },
    ],
    challenges: [],
    stats: [
      { label: "Duration", value: "7 days" },
      { label: "Status", value: "● Live", highlight: true },
    ],
  },
  {
    slug: "value-automl",
    index: "007",
    status: "live",
    type: "Full Stack",
    year: "2020",
    title: "ValueAutoML",
    shortTitle: "ValueAutoML",
    tagline:
      "Full CRISP-DM AutoML platform with role-based access for business owners, product owners and data scientists.",
    description: `ValueAutoML is a research internship project delivering a fully functional AutoML platform built around the CRISP-DM methodology. It covers every step from business understanding to model deployment, with three distinct roles — Business Owner, Product Owner and Data Scientist. Product owners define data specifications and requirements, while data scientists work through automated data exploration, preprocessing, model training, evaluation and deployment. MLflow integration provides full experiment tracking and training history across all projects.`,
    demoUrl: null,
    githubUrl: null,
    seoTitle:
      "ValueAutoML — Full CRISP-DM AutoML Platform with MLflow & PySpark",
    seoDescription:
      "Research AutoML platform covering the full CRISP-DM pipeline with role-based access, automated model training, PySpark data processing and MLflow experiment tracking.",
    techStack: [
      { name: "Vue 2", layer: "fe" },
      { name: "Express.js", layer: "be" },
      { name: "Django", layer: "be" },
      { name: "MongoDB", layer: "db" },
      { name: "PySpark", layer: "db" },
      { name: "Redis", layer: "db" },
      { name: "MLflow", layer: "ext" },
      { name: "scikit-learn", layer: "ext" },
      { name: "pandas", layer: "ext" },
      { name: "Docker", layer: "ext" },
    ],
    architecture: [
      {
        title: "CLIENT LAYER",
        nodes: [{ label: "SPA", value: "Vue 2", color: "green" }],
      },
      {
        title: "API LAYER",
        nodes: [
          { label: "REST API", value: "Express.js", color: "green" },
          { label: "ML Pipeline", value: "Django", color: "default" },
        ],
      },
      {
        title: "DATA LAYER",
        nodes: [
          { label: "Document DB", value: "MongoDB", color: "cyan" },
          { label: "Cache", value: "Redis", color: "cyan" },
          { label: "Big Data", value: "PySpark", color: "amber" },
          { label: "Experiments", value: "MLflow", color: "default" },
        ],
      },
    ],
    features: [
      {
        icon: "📋",
        title: "Full CRISP-DM Pipeline",
        description:
          "End-to-end AutoML workflow covering business understanding, data understanding, preparation, modeling, evaluation and deployment.",
      },
      {
        icon: "👥",
        title: "Role-Based Access",
        description:
          "Three distinct roles — Business Owner, Product Owner and Data Scientist — each with tailored access and responsibilities.",
      },
      {
        icon: "🔧",
        title: "Automated Preprocessing",
        description:
          "Automated data cleaning, transformation and feature engineering to prepare datasets for modeling.",
      },
      {
        icon: "🤖",
        title: "Automated Model Training & Selection",
        description:
          "Automatically trains, tunes and selects the best performing models using scikit-learn and custom tuning logic.",
      },
      {
        icon: "📊",
        title: "Evaluation Metrics",
        description:
          "Comprehensive model evaluation with performance metrics and comparison across experiments.",
      },
      {
        icon: "📜",
        title: "MLflow Experiment Tracking",
        description:
          "Self-hosted MLflow integration for full training history, experiment tracking and model versioning.",
      },
      {
        icon: "⚡",
        title: "PySpark Big Data Processing",
        description:
          "PySpark-powered data processing with chunk-based MongoDB handling for large-scale datasets.",
      },
      {
        icon: "🚀",
        title: "Model Deployment",
        description:
          "Deploy trained models directly from the platform for real-world inference.",
      },
    ],
    challenges: [
      {
        title: "Handling Big Data with MongoDB",
        problem:
          "Processing and storing large datasets in MongoDB caused performance bottlenecks and memory issues.",
        solution:
          "Implemented a chunk-based data processing strategy to break large datasets into manageable pieces, enabling efficient storage and retrieval without overloading the database.",
      },
      {
        title: "Automated Model Tuning",
        problem:
          "Automating hyperparameter tuning across multiple ML algorithms in a generalized and reliable way was highly complex.",
        solution:
          "Built a custom automated tuning system from scratch that systematically searches hyperparameter spaces and selects optimal configurations for each model.",
      },
      {
        title: "Project Tracking Across CRISP-DM Steps",
        problem:
          "Tracking the progress of each project across all CRISP-DM phases for multiple roles was architecturally challenging.",
        solution:
          "Implemented a custom project tracking system that monitors and persists the state of each CRISP-DM step per project, keeping all roles aligned throughout the workflow.",
      },
    ],
    stats: [
      { label: "Duration", value: "4 months" },
      { label: "API Endpoints", value: "60+", highlight: true },
      { label: "DB Collections", value: "7", highlight: true },
      { label: "Status", value: "● Research Project", highlight: true },
    ],
  },
];

/** Lookup a project by its slug */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

/** Get the previous and next projects for navigation */
export function getAdjacentProjects(slug) {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
