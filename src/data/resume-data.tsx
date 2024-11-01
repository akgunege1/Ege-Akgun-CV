import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Berat Ege Akgün",
  initials: "BEA",
  location: "Kocaeli, Konya, Turkey",
  locationLink: "https://www.google.com/maps/place/Kocaeli",
  about:
    "Self-taught Frontend Developer.",
  summary:
    "As a Frontend Developer, I am currently studying on JS. I am passionate about improving myself about anything. I want to be a Blockchain Developer in the future.",
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
        "As a community , we are trying to improve ourselves. We are trying to create projects and work on Blockchain technologies together.",
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
    "Deutsch as a beginner. Still learning",
    "English C2 with certificate",
  ],
  Hobbies: [
    "Listening to music",
    "Swimming",
    "Motorsports",
    "Reading",
    "Body building",
    "Motocycle riding",
    "Motocycle maintaining and repairing",
    "Sailing",
  ],
  projects: [
    {
      title: "AI Powered Smart Industry4.0 Settlement Project",
      techStack: ["Python"],
      description:
        "I am developing a platform with the help of AI that allows users to create industrial areas which are capable of self-sustain. With the power of AI, my target is creating a high efficient workspace with clean energy sources for the community.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "My Landing Page",
      techStack: ["HTML/CSS"],
      description:
        "I created a landing page for a little quiz. This is a tradition for our new members of Selcukchain. I wrote the site in Deutsch so I studied Deutsch at the same time.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "CryptoZombies TR",
      techStack: [""],
      description:"I am translating an education tool which contains solidity and smart contracts, for our members in Selcukchain. Coding community in Turkey doesn't have any documentations in their own language.Translating documentations is pretty important for communities. ",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
