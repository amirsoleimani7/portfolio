import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import { IconType } from "react-icons";

export type SocialsType = {
    id : number,
    name : string,
    logo : IconType,
    link : string
}

export const Socials: SocialsType[] = [
    {
        id : 1,
        name : "instagram",
        logo : FaInstagram,
        link : "https://www.instagram.com/amirhossein_soleimani7/"
        
    },
    {
        id : 2,
        name : "github",
        logo : FaGithub,
        link : "https://github.com/amirsoleimani7/"
    },
    {
        id : 3,
        name : "linkedin",
        logo : FaLinkedin,
        link : "www.linkedin.com/in/amir-hossein-soleimani-b2a603227"
    },
]

