import { IconType } from "react-icons";
import { IoHomeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { AiOutlineProfile } from "react-icons/ai";

export type headerButton = {
  id: number;
  title: string;
  Icon: IconType;  
}

const navigationData: headerButton[] = [
  {
    id: 1,
    title: "Home",
    Icon: IoHomeOutline,
  },
  {
    id : 2,
    title : "Projecs",
    Icon : GrProjects
  },
  {
    id : 3,
    title : "About Me",
    Icon : AiOutlineProfile
  }
];

export default navigationData;
