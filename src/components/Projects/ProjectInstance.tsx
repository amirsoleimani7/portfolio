import React from "react";
import { ProjectInformationType } from "../../storage/data/ProjectsInformation";

type CustomType = ProjectInformationType & {
  is_last: boolean;
  index: number; // Add index
  onHover?: (index: number) => void; // Add callback prop
};

export const ProjectInstance: React.FC<CustomType> = (props) => {
  // Handle mouse enter
  const handleMouseEnter = () => {
    if (props.onHover) {
      props.onHover(props.index); // Send index to parent
    }
  };

  return (
    <a
      href={props.githubLink}
      target="_blank"
      rel="noreferrer"
      className="w-full"
      onMouseEnter={handleMouseEnter} // Add mouse enter
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

        <div className="w-[30%] flex flex-wrap duration-200 transition-all ease-in-out group">
          {props.tecksUsed.map((p, techIndex) => {
            return (
              <div
                key={techIndex}
                className={`px-2 py-1 m-1 flex group-hover:-translate-x-10 justify-center items-center outline outline-1 outline-gray-700 gap-2 rounded-full text-gray-400 transition-all ease-in-out hover:text-white hover:outline-white cursor-pointer`}
                style={{
                  transitionDuration: `${p.id * 150}ms`,
                }}
              >
                {p.icon ? <p.icon /> : ""}
                <p className="max-md:hidden">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
};
