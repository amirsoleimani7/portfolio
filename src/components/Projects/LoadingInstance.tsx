import { useState } from "react";
import { ProjectInformationType } from "../../storage/data/ProjectsInformation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingInstance(p: ProjectInformationType) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  return (
    <div className="overflow-hidden w-full h-full">
      <img
        src={p.imageLink}
        alt=""
        // width={100}
        height={60}
        onLoad={() => {
          setIsLoading(false);
        }}
        className="w-full  h-full object-cover ease-in-out transition-all duration-200  group-hover:scale-105 cursor-pointer"
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
    </div>
  );
}
