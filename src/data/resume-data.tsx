import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Berat Ege Akgün",
  initials: "BEA",
  location: "Kocaeli, Konya, Turkey",
  locationLink: "https://www.google.com/maps/place/Kocaeli",
  about:
    "Self-taught Frontend Developer.",
  summary:
    "I am a Frontend Developer currently focusing on JavaScript. I'm passionate about self-improvement and eager to expand my skills. My goal is to become a Blockchain Developer in the future.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/146973881?s=400&u=dc48299506081eb969395ff89642c029025d0492&v=4",
  personalWebsiteUrl: "https://",
  contact: {
    email: "akgunegebusiness@gmail.com",
    tel: "+90 545 927 8333",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/akgunege1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/berat-ege-akgün-284994294/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Selcuk University",
      degree: "Student in Computer Engineering",
      start: "2023",
      end: "",
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
  ],
  work: [
    {
      company: "Selcukchain",
      link: "https://www.selcukchain.com/",
      badges: [""],
      title: "Vice President",
      start: "October 2023",
      end: "",
      description:
        "As a community, we work together to enhance our skills, create projects, and explore blockchain technologies.",
    },
  ],
  skills: [
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "SQL",
    "Git/Github",
    "C++",
    "Beginner in German",
    "English at C2 (certified)",
  ],
  Hobbies: [
    "Listening to music",
    "Swimming",
    "Motorsports",
    "Reading",
    "Body building",
    "Motorcycle riding, maintenance, and repair",
    "Sailing",
  ],
  projects: [
    {
      title: "AI Powered Smart Industry4.0 Settlement Project",
      techStack: ["Python"],
      description:
        "I am developing a platform that enables users to create self-sustaining industrial areas with the support of AI. The goal is to create an energy-efficient workspace powered by clean energy sources for community use.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "My Landing Page",
      techStack: ["HTML/CSS"],
      description:
        "I created a landing page for a quiz, which is a tradition for new Selcukchain members. The page is in German, allowing me to practice the language while working on the project.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "CryptoZombies TR",
      techStack: [""],
      description:"I am translating an educational tool that covers Solidity and smart contracts for Selcukchain members. Since coding documentation in Turkish is limited, these translations are essential for supporting the Turkish coding community.",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
