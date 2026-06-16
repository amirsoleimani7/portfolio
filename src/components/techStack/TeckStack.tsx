import { teckStack } from "../../storage/data/techStack";
import { InstanceTeckStack } from "./IntanceTeckStack";
export const TechStack = () => {
  return(
    <div className="flex w-full items-center p-[5%] ">
        <div className=" w-[15%] flex items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-500">My Teck <span className="text-white">Stack</span></h1>
        </div>
        <div className="w-[85%]">
            <div className="flex flex-wrap gap-2">
                {
                    teckStack.map((x , index) => {
                        return (
                            <div key={index}>
                                <InstanceTeckStack {...x}/>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    </div>
  );
};

