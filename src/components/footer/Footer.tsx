import "./customTrim.css";
import RotatingText from "./FlipWords";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col relative overflow-hidden p-[5%] mt-10">
      <div className="flex flex-col font-bold">
        <div className="flex text-6xl gap-2">
          <h1>Let's</h1>
          <RotatingText
            texts={["Build", "Design", "Create"]}
            mainClassName=""
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            splitBy="characters"
            auto
            loop
          />
        </div>
        <h1 className="text-6xl text-gray-500">incredible work together.</h1>
      </div>
      <div className="w-full grid grid-cols-3 gap-1">
        <div className="w-full bg-red-100">
            
        </div>
        <div className="w-full bg-red-100">

        </div>
        <div className="w-full bg-red-100">
            
        </div>
      </div>
      <div className="border-b border-gray-800 mt-5"></div>
      <div className="w-full flex justify-center  translate-y-[30%] ">
        <h1 className="font-BlackOps text-[400px] custom-trim">AMIR</h1>
      </div>
    </div>
  );
};
