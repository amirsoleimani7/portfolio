import React from "react";
import navigationData, {
  headerButton,
} from "../../storage/data/navigationData";
import { buildProjectionTransform } from "framer-motion";

const Navigation = () => {
  
  return (
    <div className="flex gap-4 p-3  border border-gray-800 rounded-3xl text-white font-Lato">
      {navigationData.map((btn: headerButton, index: number) => {
        let Icon = btn?.Icon as React.ComponentType;
        return (
          <button key={btn.id} className="flex items-center  gap-1 hover:text-sky-400 transition-colors duration-200">
            <Icon />
            <p>{btn.title}</p>
          </button>
        );
      })}
    </div>
  );
};


export default Navigation;
