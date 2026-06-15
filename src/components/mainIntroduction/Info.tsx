import { userInformation } from "../../storage/data/Information";
import { Socials, SocialsType } from "../../storage/data/socials";
import { Tooltip } from "antd";

export const Info = () => {
  return (
    <>
      <div className="flex w-full p-[5%]">
        <div className="w-[60%] h-full text-white rounded-xl flex flex-col">
          <div className="w-[80%] mb-5">
            <h1 className="text-6xl font-bold mb-2">
              <span className="text-gray-500">Hey I'm Amir</span>
            </h1>
            <h1 className="text-6xl font-bold">Welcome To my portpolio Site</h1>
            <div className="flex flex-col mt-5 gap-4 text-md ">
              <p className="text-gray-400 leading-6">
                I'm a{" "}
                <span className="font-semibold text-white">
                  Frontend Enginner
                </span>{" "}
                with{" "}
                <span className="font-semibold text-white">
                  3+ years of experience
                </span>
                , knowen for strong attention to details and pixel perfect
                exceution of the projects
              </p>
              <p className="text-gray-400 leading-6">
                My main tech stack it{" "}
                <span className="text-white font-semibold">
                  React, Javascript and typescript
                </span>
                , and modern front-end technologies for building web apps
              </p>
            </div>
          </div>
          <div className="mt-auto mb-0">
            <button className="w-[200px] h-[50px]  rounded-full border-none outline-1 outline outline-gray-800 transition-all hover:outline-gray-500 duration-200">
              <span>Download CV</span>
            </button>
          </div>
        </div>

        <div className="w-[40%] h-full ">
          <div className="relative h-[75%]">
            <img
              src={userInformation.profile}
              alt="user's profile "
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex absolute right-2 bottom-2  gap-2">
              {Socials.map((s: SocialsType, index: number) => {
                return (
                  <Tooltip
                    title={s.name}
                    color={"white"}
                    trigger={"hover"}
                    overlayInnerStyle={{
                      borderRadius: "20px",
                      padding: "5px 10px 1px 10px",
                      fontWeight: "500",
                    }}
                    mouseEnterDelay={0.01}
                  >
                    {" "}
                    <button
                      key={index}
                      className="w-10 h-10  rounded-full backdrop-blur-xl bg-[rgba(0,0,0,0.3)] border-none  text-white flex items-center justify-center  hover:-translate-y-1 transition-all  duration-200"
                    >
                      <s.logo />
                    </button>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
