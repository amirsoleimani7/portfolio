import React, { useRef } from "react";
import navigationData, {
  headerButton,
} from "../../storage/data/navigationData";
import { buildProjectionTransform } from "framer-motion";

const Navigation = () => {
  

  return (
    
    <div
      className="flex justify-center gap-4 p-3 border border-gray-700 rounded-3xl text-white font-Lato transition-all duration-200"
    > 
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
  );
};

export default Navigation;
