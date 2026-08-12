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
  {
    projectName: "HotWire digital twin",
    ProjectYear: 2025,
    githubLink: "https://github.com/amirsoleimani7/hotwire-digital-twin",
    imageLink: process.env.PUBLIC_URL + "/images/projectsImage/hotwire.png",
    desc: "A full IoT-based Digital Twin system that visualizes real-world sensor data in a Unity 3D environment",

    tecksUsed: [
      {
        id: 1,
        text: "Unity",
      },
      {
        id: 2,
        text: "esp32",
      },
      {
        id: 3,
        text: "MQTT",
      },
      {
        id: 4,
        text: "WebSocket",
      },
      {
        id: 4,
        text: "Thingsbord",
      },
    ],
  },
  {
    projectName: "AVR Password Manager System",
    ProjectYear: 2025,
    githubLink: "https://github.com/amirsoleimani7/avr-password-manager",
    imageLink: process.env.PUBLIC_URL + "/images/projectsImage/AVR.png",
    desc: "A complete AVR-based password manager system designed and simulated in Proteus 8/9, using an ATmega32 microcontroller",

    tecksUsed: [
      {
        id: 1,
        text: "ATmega32 micro",
      },
      {
        id: 2,
        text: "GLCD",
      },
      {
        id: 3,
        text: "GLCD",
      },
      {
        id: 4,
        text: "EEPROM",
      },
      {
        id: 5,
        text: "USART",
      },
      {
        id: 6,
        text: "Proteus",
      },
    ],
  },
  {
    projectName: "ECU Simulation",
    ProjectYear: 2025,
    githubLink: "https://github.com/amirsoleimani7/ECUsim",
    imageLink: process.env.PUBLIC_URL + "/images/projectsImage/ECU.png",
    desc: "This project implements an Electronic Control Unit (ECU) simulation for a vehicle system that manages fuel mode transitions (Petrol/Gas), monitors engine RPM, reads pressure sensor data, and controls various actuators and indicators",

    tecksUsed: [
      {
        id: 1,
        text: "STM32F103C8Tx",
      },
      {
        id: 2,
        text: "USART",
      },
      {
        id: 3,
        text: "ADC (int)",
      },
      {
        id: 4,
        text: "(Timer RPM)",
      },

      {
        id: 5,
        text: "Proteus",
      },
    ],
  },
];
