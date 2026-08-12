import { projects } from "../../storage/data/ProjectsInformation";
import { useState } from "react";
import { ProjectInstance } from "./ProjectInstance";
import { FloatingPreview } from "./FloatingPreview";
import { BsArrowReturnRight } from "react-icons/bs";

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
              <div className="overflow-hidden">
                <img
                  src={p.imageLink}
                  alt=""
                  className=" object-cover ease-in-out transition-all duration-300  group-hover:scale-110 cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-1 mt-2 mb-5">
                <h1 className="text-white font-semibold">{p.projectName}</h1>
                <p className="text-gray-400">{p.desc}</p>
              </div>
              <div className="flex gap-1 mt-auto mb-0">
                {p.tecksUsed.map((t, index) => (
                  <div
                    className="text-gray-400 px-2 py-1 rounded-2xl border border-gray-800 hover:text-white  hover:border-white duration-200 transition-all ease-in-out "
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
