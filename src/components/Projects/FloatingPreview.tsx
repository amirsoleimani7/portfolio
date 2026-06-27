import React from "react";
import { motion } from "motion/react";

export interface PositionType {
  is_active: boolean;
  x: number;
  y: number;
}

export const FloatingPreview: React.FC<PositionType> = (prop: PositionType) => {
  return (
    <motion.div
      className="w-[100px] h-[100px]  bg-red-500 fixed pointer-events-none"
      animate={{
        left: prop.x,
        top: prop.y,
        opacity: `${prop.is_active ? "1" : "0"}`,
      }}
    />
  );
};
