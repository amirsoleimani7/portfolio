import React from "react";
import {teckStackType} from "../../storage/data/techStack";

export const InstanceTeckStack : React.FC<teckStackType> = (props)=> {
        
    console.log(props);

    return (
        <div className="px-2 py-1  flex justify-center items-center outline outline-1 gap-2 rounded-full text-white">
            <props.icon/>
            <p className="">{props.text}</p>
        </div>
  )
}
