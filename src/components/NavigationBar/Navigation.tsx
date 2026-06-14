import React, { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineContactEmergency } from "react-icons/md";
import navigationData, {
  headerButton,
} from "../../storage/data/navigationData";
import { buildProjectionTransform } from "framer-motion";

// morphining between icons 

const Navigation = () => {

  const [isOpen, setOpen] = useState<boolean>(false);
  
  const handleSideBar =  () => {
    setOpen(!isOpen);
  }

  
  return (
    <div className="w-full flex justify-center">
      <div className="hidden max-md:w-full max-md:flex max-md:justify-between max-md:items-center mx-[2.5%]">
        <button className="flex rounded-3xl border border-gray-800 justify-center items-center p-2 gap-2 mt-2">
          <div className="w-2 h-2 rounded-full animate-pulse bg-green-300"></div>
          <span className="text-white hover:text-sky-400 transition-colors duration-200">
            amirsoleimani7
          </span>
        </button>
        <button className="flex items-center justify-center text-white gap-2 mt-2 p-2"
        onClick={handleSideBar}>
          {
            isOpen ? <RxCross1 size={22}/> : <RxHamburgerMenu size={22}/>
          }
          </button>
      </div>
      <div className="flex justify-center gap-4 p-3 border border-gray-800 rounded-3xl text-white font-Lato transition-all duration-200 max-lg:w-[65%] mt-2 max-lg:mt-0 max-lg:border-t-0 max-lg:rounded-t-none max-md:hidden ">
        {navigationData.map((btn: headerButton, index: number) => {
          // making icon as component type so it would't through the error
          let Icon = btn?.Icon as React.ComponentType;
          return (
            <button
              key={btn.id}
              className="flex items-center  gap-1 hover:text-sky-400 transition-colors duration-200"
            >
              <Icon />
              <p>{btn.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
