import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  taskmanager,
  portfolio,
  eventsapi,
  chatbot,
  bookslibrary,
  community,
  threejs,
  mathwork,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Expérience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "JavaScript", icon: javascript },
  { title: "Python", icon: python },
  { title: "HTML5", icon: html },
  { title: "CSS3", icon: css },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Python", icon: python },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "IT en Santé Publique",
    company_name: "Direction Régionale de la Santé et de la Protection Sociale",
    icon: nodejs,
    iconBg: "#161329",
    date: "2024 - Présent",
    points: [
      "Saisie et gestion des données informatiques pour la Direction Régionale de la Santé (via 3STD, Settat)",
      "Traitement et mise à jour des informations dans les systèmes de santé",
      "Contribution à la digitalisation des services de santé publique",
      "Pré-traitement des données et saisie d'informations dans une plateforme en ligne",
    ],
  },
  {
    title: "Stage Fin d'Études – Développement Web MERN",
    company_name: "Coding Republic, Casablanca",
    icon: eduskill,
    iconBg: "#161329",
    date: "2023",
    points: [
      "Développement Web MERN",
      "Création et test de fonctionnalités",
      "Amélioration du front-end",
    ],
  },
  {
    title: "Vendeuse & Modèle",
    company_name: "nisaturc, Casablanca",
    icon: mathwork,
    iconBg: "#161329",
    date: "2023",
    points: [
      "Conseil client et gestion boutique",
      "Mise en valeur produits et organisation",
    ],
  },
  {
    title: "Agent Centre d'Appel",
    company_name: "HM Phoning, Casablanca",
    icon: edunet,
    iconBg: "#161329",
    date: "2022",
    points: [
      "Réception et aide aux clients",
      "Saisie et mise à jour des informations",
    ],
  },
];

export const projects = [
  {
    name: "Task Manager - Gestion de Tâches",
    description:
      "Application web de gestion de tâches développée lors de mon stage de fin d'études. Architecture Client/Server avec interface utilisateur interactive permettant de créer, modifier et supprimer des tâches. Fonctionnalités de calendrier intégrées et système de suivi des tâches terminées.",
    tags: [
      { name: "JavaScript", color: "yellow-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/bensmailfati11/TaskManagerPFE",
  },
  {
    name: "Events Organizer API - Plateforme d'Événements",
    description:
      "API REST complète pour créer, gérer et participer à des événements. Système d'authentification avec rôles (Admin/Organizer/Member), inscription/désinscription aux événements. Architecture modulaire avec middlewares de sécurité. 3 branches disponibles : master (API pure), handlebars (templates serveur), typescript (version complète TypeScript).",
    tags: [
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "yellow-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
    ],
    image: eventsapi,
    source_code_link: "https://github.com/bensmailfati11/Event-Organizer-API",
  },
  {
    name: "AI Chatbot - Assistant Virtuel Intelligent",
    description:
      "Chatbot web propulsé par l'API OpenRouter. Interface conversationnelle simple et élégante avec animations de frappe en temps réel. Serveur Flask gérant les requêtes chat, intégration API pour réponses IA, mémoire de conversation. Architecture légère : app.py (serveur), templates HTML (interface), gestion sécurisée des clés API.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Flask", color: "blue-text-gradient" },
      { name: "OpenRouter", color: "pink-text-gradient" },
      { name: "HTML/CSS", color: "yellow-text-gradient" },
    ],
    image: chatbot,
    source_code_link: "https://github.com/bensmailfati11/geeks-institute/tree/master/week_3/day_3/chatbot_project",
  },
  {
    name: "Books Library - Bibliothèque Numérique",
    description:
      "Application web Full Stack de gestion de bibliothèque. Catalogue de livres avec recherche et filtres, système d'emprunt et de réservation. Architecture MVC avec Flask, modèles de données structurés, templates HTML dynamiques et base de données SQLite. Gestion complète du cycle de vie des livres et des emprunts.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Flask", color: "blue-text-gradient" },
      { name: "SQLite", color: "yellow-text-gradient" },
      { name: "HTML/CSS", color: "pink-text-gradient" },
    ],
    image: bookslibrary,
    source_code_link: "https://github.com/bensmailfati11/geeks-institute/tree/master/week_2/day_5/full_stack_web_app",
  },
  {
    name: "Z-Swey3 - Plateforme Communautaire (Équipe)",
    description:
      "Projet collaboratif réalisé en équipe lors d'un hackathon de 48h. Plateforme de gestion d'événements communautaires avec fonctionnalités de partage, commentaires et système de vote. Architecture MERN avec méthodologie Agile et gestion de version Git.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Hackathon", color: "yellow-text-gradient" },
    ],
    image: community,
    source_code_link: "https://github.com",
  },
  {
    name: "Portfolio Personnel - Site Vitrine 3D",
    description:
      "Portfolio moderne et interactif présentant mon parcours, compétences et projets. Intégration de modèles 3D avec Three.js, animations fluides avec Framer Motion, et design responsive. Formulaire de contact fonctionnel avec EmailJS.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
      { name: "Vite", color: "yellow-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/bensmailfati11/portfolio",
  },
];

export const bootcamps = [
  {
    title: "Bootcamp en Développement Web",
    organization: "Geeks Institute Formation",
    icon: eduskill,
    iconBg: "#161329",
    date: "Septembre 2025 - Présent",
    description: "Formation intensive en Développement Web Full Stack pour renforcer mes compétences en frontend et backend.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Hackathon ESSEC",
    organization: "ESSEC Business School",
    icon: mathwork,
    iconBg: "#161329",
    date: "Novembre 2025",
    description: "Participation au hackathon ESSEC. Projet collaboratif avec focus sur l'innovation et la résolution de problèmes.",
    skills: ["MERN Stack", "Travail d'équipe", "Gestion de projet", "Présentation"],
  },
  {
    title: "Hackathon Local",
    organization: "Mohammedia",
    icon: edunet,
    iconBg: "#161329",
    date: "Mai 2025",
    description: "Participation au hackathon local de Mohammedia. Développement de solutions innovantes en équipe.",
    skills: ["Développement Web", "Collaboration", "Créativité", "Problem Solving"],
  },
];
