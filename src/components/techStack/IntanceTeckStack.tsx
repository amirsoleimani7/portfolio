import React from "react";
import {teckStackType} from "../../storage/data/techStack";

export const InstanceTeckStack : React.FC<teckStackType> = (props)=> {
        
    console.log(props);

    return (
        <div className="px-2 py-1 m-1 flex justify-center items-center outline outline-1 outline-gray-700 gap-2 rounded-full text-gray-400  transition-all duration-200 ease-in-out hover:text-white hover:outline-white cursor-pointer">
            <props.icon/>
            <p className="">{props.text}</p>
        </div>
  )
}
