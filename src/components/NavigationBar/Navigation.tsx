import React from "react";
import navigationData, {
  headerButton,
} from "../../storage/data/navigationData";
import { buildProjectionTransform } from "framer-motion";

const Navigation = () => {
  console.log(navigationData);
  return (
    <div className="w-full bg-green-500">
      {navigationData.map((btn: headerButton, index: number) => {
        let Icon = btn?.Icon as React.ComponentType;
        return (
          <button key={btn.id}>
            <p>{btn.title}</p>
            <Icon />
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;
