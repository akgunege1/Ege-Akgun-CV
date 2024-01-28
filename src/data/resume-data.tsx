import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kaan Demir",
  initials: "KD",
  location: "Samsun, Konya, Turkey",
  locationLink: "https://www.google.com/maps/place/Samsun",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Developer, I excel in both frontend and backend development. I’m passionate about crafting visually appealing, user-friendly web applications and optimizing server-side performance. Eager to contribute my skills to deliver end-to-end solutions.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4D03AQGm0SG9cdvnCA/profile-displayphoto-shrink_200_200/0/1703268593155?e=1712188800&v=beta&t=4KnKnna1qvoHuCq-R6JY0dKzK1oQcwVjJmzCkakExtY",
  personalWebsiteUrl: "https://",
  contact: {
    email: "buzzka.bussiness@gmail.com",
    tel: "+90 530 890 1995",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/buzzkaan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/buzzka/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Selcuk University",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  activities: [
    {
      school: "SelcukChain",
      degree:
        " ”It is a club where educational activities, events, and similar club activities on Blockchain are organized, and where I actively participate, assisting people in coding and other subjects",
      start: "2023",
      end: "",
    },
    {
      school: "GSB Hackaton",
      degree:
        "The GSB Blockchain Summit and Blockchain Youth Hackathon, held in Ankara on December 15-17, 2023.",
      start: "2023",
      end: "",
    },
  ],
  work: [
    {
      company: "TrueFeedBack Inc",
      link: "https://truefeedback.io/",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      start: "2022",
      end: "Sept 2023",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Fastify",
    "TailwindCSS",
    "Chakra UI",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "Buildify",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "TailwindCSS"],
      description:
        "I developed a platform with the help of OpenAI that allows users to create components with prompts. These generated codes are integrated into a live user interface, enabling users to edit the code from OpenAI through an online IDE and observe their work.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "PremarketCap",
      techStack: [
        "Side Project",
        "Full Stack",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
      ],
      description:
        "The project I developed, taking an active role in the company, is a website where users can list their own projects and manage funds, capital, airdrops, nodes, and portfolio tracking. This platform adopts a CoinMarketCap-style logic, providing users assistance in various areas.",
      link: {
        label: "https://premarketcap.vercel.app/",
        href: "https://premarketcap.vercel.app/",
      },
    },
    {
      title: "Premarket Dasboard",
      techStack: [
        "Side Project",
        "Full Stack",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
      ],
      description:
        "The Admin Dashboard of the PremarketCap project is a web application where various CRUD operations such as approving user applications, managing new projects, and handling operations related to capital, airdrops, funds, etc., are performed.",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Evolve360",
      techStack: ["Freelance", "React", "GSAP", "i18n", "ChakraUi"],
      description:
        "The animated website providing information about the fitness equipment I’ve created as a freelancer",
      link: {
        label: "evolve360.gr",
        href: "https://evolve360.gr",
      },
    },
    {
      title: "ChainAuth",
      techStack: ["Hackaton Project", "NextJs", "Front End", "BlockChain"],
      description:
        "The blockchain-based authentication system we developed during the hackathon, which includes smart contracts.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Todo-App",
      techStack: ["React"],
      description:
        "Stay organized with our simple and efficient todo app. Manage tasks effortlessly and boost your productivity. Never miss a deadline again!",
      link: {
        label: "https://buzzkaan.github.io/Todo-app/",
        href: "https://buzzkaan.github.io/Todo-app/",
      },
    },
    {
      title: "Basic Fitness App",
      techStack: ["Flutter/Dart"],
      description:
        "Get fit effortlessly with our easy-to-use fitness app. Personalized workouts, quick tracking, and instant motivation. Your journey to a healthier you starts here!",
      link: {
        label: "https://buzzkaan.github.io/Todo-app/",
        href: "https://buzzkaan.github.io/Todo-app/",
      },
    },
  ],
} as const;
