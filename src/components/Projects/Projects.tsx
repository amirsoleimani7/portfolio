import { projects } from "../../storage/data/ProjectsInformation";
import { ProjectInstance } from "./ProjectInstance";

export const Projects = () => {
  console.log(projects);

  return (
    <div className="w-full p-[5%] flex flex-col gap-5">
      <div className=" w-full flex items-center justify-start mb-5">
        <h1 className="text-2xl font-bold text-gray-500 max-md:text-xl">
          My <span className="text-white">Projects</span>
        </h1>
      </div>
      {projects.map((p, index) => {
        return <ProjectInstance {...p} key={index} />;
      })}
    </div>
  );
};
