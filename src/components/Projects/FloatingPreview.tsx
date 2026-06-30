import React, {  useState } from "react";
import { motion } from "motion/react";
import Skeleton from "react-loading-skeleton";

export interface PositionType {
  currentIndex: number[];
  allImages: string[];
  x?: number;
  y?: number;
}

export const FloatingPreview: React.FC<PositionType> = (prop: PositionType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  return (
    <motion.div
      className="w-[350px] h-[200px] fixed pointer-events-none rounded-xl z-50 bg-gray-800 scale-0 overflow-hidden outline outline-1 outline-gray-600"
      animate={{
        scale: 1,
        left: prop.x,
        top: prop.y,
        transition: { duration: 0.1 },
      }}
    >
      <img
        src={prop.allImages[prop.currentIndex[1]]}
        className={`w-full h-full object-cover absolute left-0 transition-all duration-300 ease-in-out`}
        alt="projects sample"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(true)}
      />

      {isLoading && (
        <div className="w-full h-full absolute top-0 left-0">
          <Skeleton
            duration={1.5}
            baseColor="#4b5563"
            className="w-full h-full !block"
          />
        </div>
      )}
    </motion.div>
  );
};
