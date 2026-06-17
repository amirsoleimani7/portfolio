import { ProjectInformationType } from "../../storage/data/ProjectsInformation";

type CustomType =
  | ProjectInformationType
  & {
      is_last: boolean;
    };

export const ProjectInstance: React.FC<CustomType> = (props) => {
  const { is_last, ...projectProps } = props;
  console.log(is_last);
  
  return (
    <div className={`w-full h-[100px] items-center flex justify-between text-white`}>
      <div className="w-[30%]">
        <h1 className="text-xl letter-spacing font-bold tracking-wide">{props.projectName}</h1>
        <h1 className="text-sm text-gray-500">{props.ProjectYear}</h1>
      </div>
      
      <div className="w-[30%]  flex flex-wrap">
        {props.tecksUsed.map((p, index) => {
          return (
            <div
              key={index}
              className="px-2 py-1 m-1 flex justify-center items-center outline outline-1 outline-gray-700 gap-2 rounded-full text-gray-400  transition-all duration-200 ease-in-out hover:text-white hover:outline-white cursor-pointer"
            >
              <p.icon />
              <p className="">{p.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
