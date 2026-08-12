import { projects } from "../../storage/data/ProjectsInformation";
import { useState } from "react";

import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export const Projects = () => {
  type postionType = {
    x?: number;
    y?: number;
  };

  const [mousePosition, setMousePosition] = useState<postionType>({});
  const [show, setShow] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<number>(0);

  const handleProjectHover = (index: number) => {
    setCurrentItem(index);
  };

  const updatePosition = (event: MouseEvent) => {
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
      <div className="w-full flex items-center justify-start mb-5">
        <h1 className="text-2xl font-bold text-gray-500 max-md:text-xl">
          My <span className="text-white">Projects</span>
        </h1>
      </div>

      <div className="grid  w-full h-200 grid-cols-2 p-5 gap-1 max-lg:grid-cols-1">
        {projects.map((p, index) => {
          return (
            <div className="flex flex-col p-5 border border-gray-800 *:select-none group cursor-pointer duration-200 ease-in-out transition-all hover:border-gray-500">
              <div className="overflow-hidden relative bg-green-50">
                <div className="overflow-hidden w-full h-full ">
                  <img
                    src={p.imageLink}
                    alt=""
                    className="w-full h-full object-cover ease-in-out transition-all duration-300  group-hover:scale-105 cursor-pointer"
                  />
                </div>
                <div className="flex gap-2 p-2 justify-end w-full h-15  z-10 duration-200 ease-in-out transition-all translate-y-full group-hover:-translate-y-full backdrop-blur-xl">
                  <div className="flex items-center text-gray-300 gap-2 border border-gray-500 py-1 px-2 rounded-2xl">
                    <span>code</span>
                    <FaCode />{" "}
                  </div>
                  <div className="flex items-center text-gray-300 gap-2 border border-gray-500 py-1 px-2 rounded-2xl">
                    <span>Live</span>
                    <FaLink />{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-2 mb-5">
                <h1 className="text-white font-semibold">{p.projectName}</h1>
                <p className="text-gray-400">{p.desc}</p>
              </div>
              <div className="flex gap-1 mt-auto mb-0">
                {p.tecksUsed.map((t, index) => (
                  <div
                    className="text-gray-400 px-2 py-1 rounded-2xl border border-gray-800 hover:text-gray-500  hover:border-gray-500 duration-200 transition-all ease-in-out "
                    key={index}
                  >
                    {t.text}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
