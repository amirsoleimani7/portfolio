import React from "react";
import { motion } from "motion/react";

export interface PositionType {
  imageUrl: string;
  is_active: boolean;
  x?: number;
  y?: number;
}

export const FloatingPreview: React.FC<PositionType> = (prop: PositionType) => {
  return (
    <motion.div
      className="w-[300px] h-[150px]  bg-red-500 fixed pointer-events-none transition-all  ease-linear overflow-hidden rounded-xl z-50"
      animate={{
        left: prop.x,
        top: prop.y,
        transition: { duration: 0.05 },
        opacity: `${prop.is_active ? "1" : "0"}`,
      }}
    >
      <img src={prop.imageUrl} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
};
