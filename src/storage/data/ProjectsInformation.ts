import { SiDjango } from "react-icons/si";
import { teckStackType } from "./techStack";
import { RiTailwindCssFill, RiVercelLine } from "react-icons/ri";
import { FaFigma, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPytorch } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

export type ProjectInformationType = {
  projectName: string;
  ProjectYear: number;
  githubLink: string;
  tecksUsed: teckStackType[];
  desc: string;
  imageLink: string;
};

export const projects: ProjectInformationType[] = [
  {
    projectName: "LLM Robotics",
    ProjectYear: 2026,
    githubLink: "https://github.com/amirsoleimani7/llm-robotics",
    imageLink: process.env.PUBLIC_URL + "/images/projectsImage/loading.png",
    desc: "using llm for making multi step plans for robots, chatui is included for better experience, connection is RESTfull api with django app",
    tecksUsed: [
      {
        id: 1,
        text: "Django",
        icon: SiDjango,
      },
      {
        id: 2,
        text: "Tailwind",
        icon: RiTailwindCssFill,
      },
      {
        id: 3,
        text: "React",
        icon: FaReact,
      },
      {
        id: 4,
        text: "javascript",
        icon: IoLogoJavascript,
      },
    ],
  },
  {
    projectName: "Smart Class",
    ProjectYear: 2025,
    githubLink: "https://github.com/amirsoleimani7/smart-class-project",
    imageLink: process.env.PUBLIC_URL + "/images/projectsImage/main-menu.png",
    desc: "A “smart classroom” system that combines webserver(ui) , computer vision",
    tecksUsed: [
      {
        id: 1,
        text: "javascript",
        icon: IoLogoJavascript,
      },
      {
        id: 2,
        text: "figma",
        icon: FaFigma,
      },
      {
        id: 3,
        text: "computer vision",
        icon: SiPytorch,
      },
    ],
  },
  {
    projectName: "Frontend Lab (mini projects)",
    ProjectYear: 2025,
    githubLink: "https://github.com/amirsoleimani7/frontend-lab",
    imageLink: process.env.PUBLIC_URL + "/images/projectsImage/frontendLab.png",
    desc: "some of my projects in the frontend field",

    tecksUsed: [
      {
        id: 1,
        text: "react",
        icon: FaReact,
      },
      {
        id: 2,
        text: "Tailwind",
        icon: RiTailwindCssFill,
      },
      {
        id: 3,
        text: "scss",
        icon: BsFiletypeScss,
      },
      {
        id: 4,
        text: "vercel",
        icon: RiVercelLine,
      },
    ],
  },
];
