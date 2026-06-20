import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import {
  MdOutlineEmail,
  MdOutlinePhoneAndroid,
  MdOutlineAccessTime,
  MdOutlineLocationOn,
} from "react-icons/md";

import { IconType } from "react-icons";

export type SocialsType = {
  id: number;
  name: string;
  logo: IconType;
  link: string;
};

export const Socials: SocialsType[] = [
  {
    id: 1,
    name: "instagram",
    logo: FaInstagram,
    link: "https://www.instagram.com/amirhossein_soleimani7/",
  },
  {
    id: 2,
    name: "github",
    logo: FaGithub,
    link: "https://github.com/amirsoleimani7/",
  },
  {
    id: 3,
    name: "linkedin",
    logo: FaLinkedin,
    link: "https://linkedin.com/in/amir-hossein-soleimani-b2a603227",
  },
];


export type OtherType = {
  id: number;
  description: string;
  logo: IconType;
  value?: string;
  time?: Promise<string>
};

export const otherInformation: OtherType[] = [
  {
    id: 1,
    description: "location",
    logo: MdOutlineLocationOn,
    value: "Iran, Bushehr",
  },
  {
    id: 2,
    description: "time",
    logo: MdOutlineAccessTime,
  },
  {
    id: 3,
    description: "phoneNumber",
    logo: MdOutlinePhoneAndroid,
    value: "+98 9171758529",
  },
  {
    id: 4,
    description: "email",
    logo: MdOutlineEmail,
    value: "a.soleimani@ec.iut.ac.ir",
  },
];
