import { useState } from "react";
import { projects } from "../../storage/data/ProjectsInformation";
import { ProjectInstance } from "./ProjectInstance";
import {FloatingPreview} from "./FloatingPreview";

export const Projects = () => {
  type postionType = {
    x?: number;
    y?: number;
  };

  const [mousePosition, setMousePosition] = useState<postionType>({});

  const [show, setShow] = useState<boolean>(false);

  const updatePosition = (event: MouseEvent) => {
    console.log(mousePosition);
    setMousePosition({
      x: event.clientX,
      y: event.clientY - 210,
    });
  };

  const handleEnter = () => {
    window.addEventListener("mousemove", updatePosition);
    setShow(true);
  };

  const handleLeave = () => {
    window.removeEventListener("mousemove", updatePosition);
    setShow(false);
  };

  return (
    <div
      className="w-full p-[5%] flex flex-col gap-5"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className=" w-full flex items-center justify-start mb-5">
        <h1 className="text-2xl font-bold text-gray-500 max-md:text-xl">
          My <span className="text-white">Projects</span>
        </h1>
      </div>

      {projects.map((p, index) => {
        return p === projects[projects.length - 1] ? (
          <ProjectInstance
            {...p}
            key={index}
            is_last={p === projects[projects.length - 1]}
          />
        ) : (
          <div className="flex flex-col gap-5 w-full">
            <ProjectInstance
              {...p}
              key={index}
              is_last={p === projects[projects.length - 1]}
            />
            <div className="w-full border-b border-b-gray-800"></div>
          </div>
        );
      })}

      {show ? (
        <FloatingPreview
          x={mousePosition?.x}
          y={mousePosition?.y}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
