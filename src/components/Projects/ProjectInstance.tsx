import { ProjectInformationType } from "../../storage/data/ProjectsInformation";

export const ProjectInstance: React.FC<ProjectInformationType> = (props) => {
  return (
    <div className="w-full h-[100px] bg-red-100 flex justify-between">
      <div className="w-[30%] bg-yellow-200">
        <h1>{props.projectName}</h1>
        <h1>{props.ProjectYear}</h1>
      </div>
      <div className="w-[30%] bg-blue-500 flex flex-wrap">
        {props.tecksUsed.map((p, index) => {
          return (
            <div key={index} className="px-2 py-1 m-1 flex justify-center items-center outline outline-1 outline-gray-700 gap-2 rounded-full text-gray-400  transition-all duration-200 ease-in-out hover:text-white hover:outline-white cursor-pointer">
              <p.icon />
              <p className="">{p.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
