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
  { title: "HTML5", icon: html },
  { title: "CSS3", icon: css },
  { title: "React", icon: reactjs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Python", icon: python },
];

export const experiences = [
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
    name: "Application Web MERN - Gestion de Tâches",
    description:
      "Application complète de gestion de tâches avec système d'authentification sécurisé (JWT). Les utilisateurs peuvent créer, modifier, supprimer et organiser leurs tâches avec un tableau de bord interactif. Interface responsive adaptée à tous les écrans.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Express", color: "yellow-text-gradient" },
    ],
    image: taskmanager,
    source_code_link: "https://github.com",
  },
  {
    name: "Events Organizer API - Plateforme d'Événements",
    description:
      "API REST complète pour la gestion d'événements en ligne. Système de création, modification et recherche d'événements avec gestion des participants. Templates Handlebars pour les vues serveur, authentification JWT et système de notifications.",
    tags: [
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "yellow-text-gradient" },
      { name: "Handlebars", color: "blue-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: eventsapi,
    source_code_link: "https://github.com",
  },
  {
    name: "Chatbot IA - Assistant Virtuel pour Événements",
    description:
      "Chatbot intelligent développé lors d'un hackathon. Utilise l'IA pour répondre aux questions sur les événements, suggérer des recommandations personnalisées et aider à la navigation. Frontend React avec interface conversationnelle moderne et backend Python avec NLP.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "IA/NLP", color: "pink-text-gradient" },
      { name: "Hackathon", color: "yellow-text-gradient" },
    ],
    image: chatbot,
    source_code_link: "https://github.com",
  },
  {
    name: "Books Library - Bibliothèque Numérique",
    description:
      "Plateforme de gestion de bibliothèque en ligne avec catalogue de livres, système de recherche avancée et réservation. Développée en TypeScript pour garantir la qualité du code. Authentification multi-niveaux (admin/utilisateur) et gestion des emprunts.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Express", color: "yellow-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: bookslibrary,
    source_code_link: "https://github.com",
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
    ],
    image: portfolio,
    source_code_link: "https://github.com",
  },
];

export const bootcamps = [
  {
    title: "Bootcamps en Développement Web",
    organization: "Plusieurs institutions",
    icon: eduskill,
    iconBg: "#161329",
    description: "Participation à plusieurs bootcamps en Développement Web pour renforcer mes compétences en frontend et backend.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "2 Hackathons",
    organization: "Geeks Institute Formation",
    icon: mathwork,
    iconBg: "#161329",
    description: "Participation à 2 hackathons organisés par Geeks Institute Formation. Projets collaboratifs avec focus sur l'innovation et la résolution de problèmes.",
    skills: ["MERN Stack", "Travail d'équipe", "Gestion de projet", "Présentation"],
  },
];
