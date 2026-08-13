import "./customTrim.css";
import RotatingText from "./FlipWords";
import { Socials, SocialsType } from "../../storage/data/socials";
import { ConfigProvider, Space, Tooltip } from "antd";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col relative overflow-hidden p-[5%] mt-10">
      <div className="flex flex-col font-bold">
        <div className="flex text-6xl gap-2 max-md:text-5xl">
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
        <h1 className="text-6xl text-gray-500 max-md:text-5xl">
          incredible work together.
        </h1>
      </div>

      <div className="w-full flex gap-1 mt-5 max-sm:flex-col">
        <div className="w-full flex flex-col gap-1 max-sm:flex-row max-sm:justify-between max-sm:items-center">
          <h1 className="text-gray-500 font-semibold">Email</h1>
          <h1 className="font-semibold transition-all duration-200 ease-in-out hover:text-gray-500 cursor-pointer">
            a.soleimani@ec.iut.ac.ir
          </h1>
        </div>
        <div className="w-full flex flex-col gap-1 max-sm:flex-row max-sm:justify-between max-sm:items-center">
          <h1 className="text-gray-500 font-semibold">Phone</h1>
          <h1 className="font-semibold transition-all duration-200 ease-in-out hover:text-gray-500 cursor-pointer">
            +98 9171758529
          </h1>
        </div>
        <div className="w-full flex flex-col gap-1 max-sm:flex-row max-sm:justify-between max-sm:items-center">
          <h1 className="text-gray-500 font-semibold transition-all duration-200 ease-in-out hover:text-gray-500 cursor-pointer">
            Socials
          </h1>
          <div className="">
            <ConfigProvider
              tooltip={{
                unique: true,
              }}
            >
              <Space>
                {Socials.map((s: SocialsType, index: number) => {
                  return (
                    <Tooltip
                      title={s.name}
                      color={"black"}
                      trigger={"hover"}
                      styles={{
                        container: {
                          borderRadius: "20px",
                          padding: "5px 10px 5px 10px",
                          fontWeight: "600",
                        },
                      }}
                      mouseEnterDelay={0.01}
                    >
                      {" "}
                      <a href={s.link} target="_blank" rel="noreferrer">
                        <button
                          key={index}
                          className=" rounded-full px-3 py-2 bg-black border-none  text-white flex items-center justify-center  hover:-translate-y-1 transition-all  duration-200"
                        >
                          <s.logo />
                        </button>
                      </a>
                    </Tooltip>
                  );
                })}
              </Space>
            </ConfigProvider>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-800 mt-5"></div>
      
      <div className="flex items-center gap-1 justify-end w-full font-semibold text-gray-500 text-[12px] my-3">
        <FaRegCopyright />{" "}
        
        <h1> 2026 Designed and developed by Amir Hossein Soleiamni</h1>
      </div>

      <div className="w-full flex justify-center -mb-20 max-lg:-mb-10 max-md:-mb-5  pointer-events-none ">
        <h1 className="font-BlackOps text-[400px] custom-trim max-lg:text-[300px] max-md:text-[200px] max-sm:text-[150px]">
          AMIR
        </h1>
      </div>
    </div>
  );
};
