import React from "react";
import { motion } from "motion/react";

export interface PositionType {
  x?: number;
  y?: number;
}


export const FloatingPreview: React.FC<PositionType> = (prop: PositionType) => {
  return (
    <motion.div
      className="w-[350px] h-[200px]  border border-white fixed pointer-events-none overflow-hidden rounded-xl z-50 bg-red-100"
            
      animate={{
        left: prop.x,
        top: prop.y,
        transition: { duration: 0.1},
      }}
    >
    </motion.div>
  );
};

