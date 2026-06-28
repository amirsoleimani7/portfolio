import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Skeleton from "react-loading-skeleton";

export interface PositionType {
  currentIndex: number[];
  allImages : string[];
  x?: number;
  y?: number;
}

export const FloatingPreview: React.FC<PositionType> = (prop: PositionType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [transition, setTransition] = useState<boolean>(true);

  useEffect(() => {
    
  }, [prop.currentIndex]);
  
  console.log(prop.currentIndex);
  

  return (
    <motion.div
      className="w-[350px] h-[200px]  fixed pointer-events-none  rounded-xl z-50 bg-gray-800 scale-0"
      animate={{
        scale: 1,
        left: prop.x,
        top: prop.y,
        transition: { duration: 0.1 },
      }}
    >
      <img
        src={prop.allImages[prop.currentIndex[1]]}
        className={`w-full h-full object-cover transition-all  duration-1000 translate-x-full`}
        alt="projects sample"
        onLoad={() => {
          console.log("loaded");
          setIsLoading(false);
        }}
        onError={() => {
          console.log("error loading image");
          setIsLoading(true);
        }}
      />
      
      <img
        src={prop.allImages[prop.currentIndex[0]]}
        className={`w-full h-full object-cover transition-all  duration-1000 translate-x-full`}
        alt="projects sample"
        onLoad={() => {
          console.log("loaded");
          setIsLoading(false);
        }}
        onError={() => {
          console.log("error loading image");
          setIsLoading(true);
        }}
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
