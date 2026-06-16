import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeScss } from "react-icons/bs";
import { SiShadcnui } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiDjango } from "react-icons/si";
import { SiQt } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiAxios } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";



export type teckStackType = {
  id: number;
  text: string;
  icon: IconType;
};

export const teckStack: teckStackType[] = [
  {
    id: 1,
    text: "React",
    icon: FaReact,
  },
  {
    id: 2,
    text: "Tailwindcss",
    icon: RiTailwindCssFill,
  },
  {
    id: 3,
    text: "SCSS",
    icon: BsFiletypeScss,
  },
  {
    id: 4,
    text: "Shadcn",
    icon: SiShadcnui,
  },
  {
    id: 5,
    text: "Python",
    icon: FaPython,
  },
  {
    id: 6,
    text: "typescript",
    icon: SiTypescript,
  },
  {
    id: 7,
    text: "javascript",
    icon: IoLogoJavascript,
  },
  {
    id: 8,
    text: "figma",
    icon: FaFigma,
  },
  {
    id: 9,
    text: "git",
    icon: FaGitAlt,
  },
  {
    id: 10,
    text: "github",
    icon: FaGithub,
  },
  {
    id: 11,
    text: "mySQL",
    icon: GrMysql,
  },
  {
    id: 12,
    text: "Django",
    icon: SiDjango,
  },
  {
    id: 13,
    text: "QT",
    icon: SiQt,
  },
  {
    id: 14,
    text: "C++",
    icon: TbBrandCpp,
  },
  {
    id: 15,
    text: "axios",
    icon: SiAxios,
  },
  {
    id : 16,
    text : "GitLab",
    icon: FaGitlab
  },
  {
    id : 17,
    text : "vercel",
    icon : RiVercelLine
  },
  {
    id : 18,
    text : "css",
    icon : FaCss3Alt
  },
  {
    id :  19,
    text : "html",
    icon : FaHtml5
  },
  {
    id : 20,
    text : "Redux",
    icon : TbBrandRedux
  },
  {
    id : 21,
    text : "Docker",
    icon : FaDocker
  },
  {
    id : 22,
    text : "Linux",
    icon : FaLinux
  }
];

