import {
  projects,
  ProjectInformationType,
} from "../../storage/data/ProjectsInformation";

import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import LoadingInstance from "./LoadingInstance";

export const Projects = () => {
  // type postionType = {
  //   x?: number;
  //   y?: number;
  // };

  // const [mousePosition, setMousePosition] = useState<postionType>({});
  // const [show, setShow] = useState<boolean>(false);
  // const [currentItem, setCurrentItem] = useState<number>(0);

  // const handleProjectHover = (index: number) => {
  //   setCurrentItem(index);
  // };

  // const updatePosition = (event: MouseEvent) => {
  //   setMousePosition({
  //     x: event.clientX,
  //     y: event.clientY - 210,
  //   });
  // };

  // const handleEnter = () => {
  //   window.addEventListener("mousemove", updatePosition);
  //   setShow(true);
  // };

  // const handleLeave = () => {
  //   window.removeEventListener("mousemove", updatePosition);
  //   setShow(false);
  // };

  return (
    <div
      className="w-full p-[5%]  flex flex-col gap-5 "
      // onMouseEnter={handleEnter}
      // onMouseLeave={handleLeave}
    >
      <div className="w-full flex items-center justify-start mb-5 ">
        <h1 className="text-2xl font-bold text-gray-500 max-md:text-xl">
          My <span className="text-white">Projects</span>
        </h1>
      </div>
      <div className="grid  w-full h-200 grid-cols-2  gap-1 max-lg:grid-cols-1">
        {projects.map((p: ProjectInformationType, index: number) => {
          return (
            <div
              className="flex flex-col p-5 
             border border-gray-800 *:select-none group cursor-pointer duration-200 ease-in-out transition-all hover:border-gray-600 "
            >
              <div className="overflow-hidden relative ">
                <LoadingInstance {...p} />
                <div className=" flex gap-2 p-2 justify-end w-full h-15 z-10 duration-100 ease-linear opacity-0 group-hover:opacity-100 transition-all -translate-y-full backdrop-blur-xl bg-black/5">
                  {p.inDev && (
                    <div className="flex mr-auto items-center gap-2 border border-white/30 hover:border-white py-1 px-2 rounded-2xl text-gray-300 hover:text-white backdrop-blur-sm bg-black/20 duration-200 ease-in-out transition-all">
                      <div className="animate-ping duration-1000 opacity-75  w-2 h-2 rounded-full bg-green-300"></div>
                      <span className="underline-offset-2  ">
                        in Development
                      </span>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <a href={p.githubLink} target="_blank" rel="noreferrer">
                      <div className="flex items-center gap-2 border border-white/30 hover:border-white py-1 px-2 rounded-2xl text-gray-300 hover:text-white backdrop-blur-sm bg-black/20 duration-200 ease-in-out transition-all">
                        <span>code</span>
                        <FaCode />
                      </div>
                    </a>
                    {p.liveLink ? (
                      <a href={p.liveLink} target="_blank" rel="noreferrer">
                        <div className="flex items-center gap-2 border border-white/30 hover:border-white py-1 px-2 rounded-2xl text-gray-300 hover:text-white backdrop-blur-sm bg-black/20 duration-200 ease-in-out transition-all">
                          <span>Live</span>
                          <FaLink />
                        </div>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-2 mb-5">
                <h1 className="text-gray-400 duration-200 transition-all ease-in-out group-hover:text-gray-200 font-semibold">
                  {p.projectName}
                </h1>
                <p className="text-gray-400 duration-200 transition-all ease-in-out group-hover:text-gray-300">
                  {p.desc}
                </p>
              </div>
              <div className="flex gap-1 mt-auto mb-0 flex-wrap">
                {p.tecksUsed.map((t, index) => (
                  <div
                    className="text-sm text-gray-400 px-2 py-1 rounded-2xl border border-gray-800 hover:text-gray-300  hover:border-gray-500 duration-75 transition-all ease-in-out active:scale-95"
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
