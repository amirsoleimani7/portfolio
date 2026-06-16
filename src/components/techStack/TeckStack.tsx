import { teckStack } from "../../storage/data/techStack";
import { InstanceTeckStack } from "./IntanceTeckStack";
import Marquee from "react-fast-marquee";
import "./SideShadow.css"


export const TechStack = () => {
  return (
    <div className="flex w-full items-center p-[5%] ">
      <div className=" w-[20%] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">
          My Teck <span className="text-white">Stack</span>
        </h1>
      </div>
      <div className="w-[80%]">
        <div className="flex flex-col z-10 sometest relative overflow-hidden"
        >
            <Marquee pauseOnHover={true} speed={40} direction="left">
              {teckStack.map((x, index) => {
                return index <= teckStack.length / 2 ? (
                  <InstanceTeckStack {...x} key={index} />
                ) : (
                  <div></div>
                );
              })}
            </Marquee>
            <Marquee pauseOnHover={true} speed={40} direction="right">
              {teckStack.map((x, index) => {
                return index >= teckStack.length / 2 ? (
                  <InstanceTeckStack {...x} key={index} />
                ) : (
                  <div></div>
                );
              })}
            </Marquee>
        </div>
      </div>
    </div>
  );
};
