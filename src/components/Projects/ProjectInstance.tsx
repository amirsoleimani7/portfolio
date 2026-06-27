import React, { useState } from "react";
import { ProjectInformationType } from "../../storage/data/ProjectsInformation";
import { FloatingPreview } from "./FloatingPreview";

type CustomType = ProjectInformationType & {
  is_last: boolean;
};

export const ProjectInstance: React.FC<CustomType> = (props) => {
  
  type postionType = {
    is_active: boolean;
    x?: number;
    y?: number;
  };
  

  const [mousePosition, setMousePosition] = useState<postionType>({
    is_active: false,
    x: undefined,
    y: undefined,
  });

  const [show, setShow] = useState<boolean>(false);

  const updatePosition = (event: MouseEvent) => {
    setMousePosition({
      is_active: true,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleEnter = () => {
    window.addEventListener("mousemove", updatePosition);
    setShow(true);
    setMousePosition({
      is_active: true,
    });
  };

  const handleLeave = () => {
    window.removeEventListener("mousemove", updatePosition);
    setShow(false);
    setMousePosition({
      is_active: false,
      x: 0,
      y: 0,
    });
  };

  return (
    <a
      href={props.githubLink}
      target="_blank"
      rel="noreferrer"
      className="w-full"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className={`w-full h-[100px] items-center flex justify-between text-white group cursor-pointer relative`}
      >
        <div className="w-[30%]">
          <h1 className="text-xl letter-spacing font-bold tracking-wide group-hover:translate-x-10 transition-all duration-500 ease-in-out">
            {props.projectName}
          </h1>
          <h1 className="text-sm text-gray-500 group-hover:translate-x-10 transition-all duration-300 ease-in-out">
            {props.ProjectYear}
          </h1>
        </div>

        <div className="w-[30%] flex flex-wrap  duration-200 transition-all ease-in-out group">
          {props.tecksUsed.map((p, index: number) => {
            return (
              <div
                key={index}
                className={`px-2 py-1 m-1 flex group-hover:-translate-x-10 justify-center items-center outline outline-1 outline-gray-700 gap-2 rounded-full text-gray-400  transition-all  ease-in-out hover:text-white hover:outline-white cursor-pointer `}
                style={{
                  transitionDuration: `${p.id * 150}ms`,
                }}
              >
                <p.icon />
                <p className="max-md:hidden ">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {show ? (
        <FloatingPreview
          imageUrl={props.imageLink}
          is_active={mousePosition.is_active}
          x={mousePosition.x}
          y={mousePosition.y}
        />
      ) : (
        <></>
      )}
    </a>
  );
};
