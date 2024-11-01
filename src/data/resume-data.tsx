import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Berat Ege Akgün",
  initials: "BEA",
  location: "Kocaeli, Konya, Turkey",
  locationLink: "https://www.google.com/maps/place/Kocaeli",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Developer, I excel in both frontend and backend development. I’m passionate about crafting visually appealing, user-friendly web applications and optimizing server-side performance. Eager to contribute my skills to deliver end-to-end solutions.",
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
    {
      school: "TUBITAK",
      degree:
        "The GSB Blockchain Summit and Blockchain Youth Hackathon, held in Ankara on December 15-17, 2023.",
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
    "Deutsch as a beginner",
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
        "I created a landing page for a little quiz. This is a tradition for our new members of Selcukchain",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "CryptoZombies TR",
      techStack: ["Phython"],
      description:
        "I am developing a platform with the help of AI that allows users to create industrial areas which are capable of self-sustain. With the power of AI, my target is creating a high efficient workspace with clean energy sources for the community.",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
