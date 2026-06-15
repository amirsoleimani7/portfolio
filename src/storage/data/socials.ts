import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import { IconType } from "react-icons";

export type SocialsType = {
    id : number,
    name : string,
    logo : IconType
}

export const Socials: SocialsType[] = [
    {
        id : 1,
        name : "instagram",
        logo : FaInstagram
    },
    {
        id : 2,
        name : "github",
        logo : FaGithub
    },
    {
        id : 3,
        name : "linkedin",
        logo : FaLinkedin
    },
]
