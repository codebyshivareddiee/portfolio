
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";


// Import Tekisky separately
import Viswamai from "../assets/company/Viswamai.svg";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "leadership",
    title: "Leadership",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];
const experiences = [
  {
    title: "Tech-Lead Intern – Summer of AI 2025",
    company_name: "Viswam.ai",
    icon: Viswamai, 
    iconBg: "#383E56",
    date: "May 2025 – Present",
    points: [
      "Leading the development of AI pipelines using Python, NLP, and Transformer architectures.",
      "Working on data collection, curation, and annotation for Indic language datasets.",
      "Fine-tuning AI models tailored for regional languages and evaluating performance metrics.",
      "Collaborating with a hybrid team under the Summer of AI program in partnership with IIITH, Meta, TASK, and Swecha.",
    ],
  },
];

const leadershipExperiences = [
  {
    title: "Technical Member",
    company_name: "Microsoft Innovation Hub, VNR VJIET",
    icon: web, // placeholder icon
    iconBg: "#232631",
    date: "January 2025 - Present",
    points: [
      "Contributing to technical development and event organization for 1000+ campus peers."
    ],
  },
  {
    title: "Technical Volunteer",
    company_name: "Computer Society of India, VNR VJIET",
    icon: backend, // placeholder icon
    iconBg: "#232631",
    date: "November 2024 – Present",
    points: [
      "Managed software tools for tech fests with 500+ participants."
    ],
  },
  {
    title: "Student Chairman",
    company_name: "ISTE, GIOE",
    icon: creator, // placeholder icon
    iconBg: "#232631",
    date: "September 2023 - April 2024",
    points: [
      "Led 300+ students during diploma tenure; organized technical activities."
    ],
  },
  {
    title: "Founder and Head",
    company_name: "YUKTHA Student Club",
    icon: mobile, // placeholder icon
    iconBg: "#232631",
    date: "August 2023 - Present",
    points: [
      "Founded a peer-driven club; organized tech sessions impacting 300+ students."
    ],
  },
];

const projects = [
  {
    name: "Collaborative AI-Powered Project Management and Code Collaboration Platform",
    description:
      "Developed a full-stack web application enabling real-time project collaboration, AI-assisted task management, and a web-based code editor. Integrated user authentication, messaging, project-based socket communication, and AI-powered automation for enhanced productivity. Features include a file tree structure, syntax highlighting, and Web Container API for code execution. (Currently improving)",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Express", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Redux", color: "white-text-gradient" },
      { name: "Socket.io", color: "blue-text-gradient" },
      { name: "Redis", color: "green-text-gradient" },
      { name: "Web Container API", color: "pink-text-gradient" },
      { name: "Google Generative Language API", color: "white-text-gradient" },
    ],
    image: Project1,
    source_code_link: "https://github.com/codebyshivareddiee/Collaborative-AI-Powered-code-generation-and-Collaboration-Platform",
  },
  {
    name: "Excelidraw – Real-Time Collaborative Whiteboarding (Full-Stack, Monorepo)",
    description:
      "Developed a real-time collaborative whiteboard and diagramming platform with multiplayer editing, secure authentication, and persistent storage. Designed a modular monorepo architecture using Turborepo to manage frontend (Next.js), REST and WebSocket backends, and shared packages for types, UI, and DB access.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "white-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "WebSocket", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Prisma", color: "pink-text-gradient" },
      { name: "Zod", color: "white-text-gradient" },
      { name: "PNPM", color: "blue-text-gradient" },
      { name: "Turborepo", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: Project2,
    source_code_link: "https://github.com/codebyshivareddiee/excelidraw-clone",
  },
  {
    name: "Second Brain – Your Digital Knowledge Hub (Full-Stack, Knowledge Management)",
    description:
      "Built a responsive and visually intuitive personal knowledge management system that enables users to store, categorize, and access their thoughts, links, and ideas. Implemented dynamic UI components such as tag-based filters, sidebar navigation, and content cards to organize information by categories (e.g., YouTube, Documents).",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "HTML/CSS", color: "white-text-gradient" },
      { name: "LocalStorage", color: "green-text-gradient" },
      { name: "DOM Manipulation", color: "pink-text-gradient" },
      { name: "Responsive Design", color: "blue-text-gradient" },
      { name: "GitHub Pages", color: "white-text-gradient" },
    ],
    image: Project3,
    source_code_link: "https://github.com/codebyshivareddiee/brainly-secondbrain-webapp",
  },
  {
    name: "AI-Powered Multilingual Video Dubbing & Synchronization (Deep Learning, NLP)",
    description:
      "Developed an AI-powered application that automates video dubbing by extracting audio, transcribing speech, translating it into multiple languages (including Telugu), generating speech from translated text, and synchronizing it with the original video. The application enables seamless multilingual content creation using deep learning models and natural language processing (NLP).",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "Whisper (OpenAI)", color: "pink-text-gradient" },
      { name: "Google Translator API", color: "white-text-gradient" },
      { name: "gTTS / TTS (Coqui-AI)", color: "blue-text-gradient" },
      { name: "FFmpeg / MoviePy", color: "green-text-gradient" },
    ],
    image: Project4,
    source_code_link: "https://github.com/codebyshivareddiee/Multilingual_video_dubbing",
  },
  {
    name: "Healthcare Premium Prediction Model (Machine Learning, Data Science)",
    description:
      "Developed a machine learning model that analyzed 50,000 healthcare records to identify key factors influencing premium pricing. Extracted actionable insights to optimize policy offerings and improve decision-making.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "XGBoost", color: "green-text-gradient" },
      { name: "Logistic Regression", color: "pink-text-gradient" },
      { name: "Streamlit", color: "white-text-gradient" },
    ],
    image: Project5,
    source_code_link: "https://github.com/codebyshivareddiee/ML-healthcare_premium-Prediction-Regression",
  },
];

export { services, technologies, experiences, leadershipExperiences, projects };
