import "./customTrim.css";
import RotatingText from "./FlipWords";
import { Socials, SocialsType } from "../../storage/data/socials";
import { ConfigProvider, Space, Tooltip } from "antd";

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
      <div className="w-full flex gap-1 mt-5">
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-gray-500 font-semibold">Email</h1>
          <h1 className="font-bold">amirsoleimani@ec.iut.ac.ir</h1>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-gray-500 font-semibold">Phone</h1>
          <h1 className="font-semibold">+98 9171758529</h1>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1>Socials</h1>
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
                          fontWeight: "500",
                          
                        },
                      }}
                      mouseEnterDelay={0.01}
                    >
                      {" "}
                      <button
                        key={index}
                        className=" rounded-full px-4 py-2 bg-[rgba(0,0,0,0.7)] border-none  text-white flex items-center justify-center  hover:-translate-y-1 transition-all  duration-200"
                      >
                        <s.logo />
                      </button>
                    </Tooltip>
                  );
                })}
              </Space>
            </ConfigProvider>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-800 mt-5"></div>
      
      <div className="w-full flex justify-center  translate-y-[30%] pointer-events-none ">
        <h1 className="font-BlackOps text-[400px] custom-trim b">AMIR</h1>
      </div>
    </div>
  );
};
