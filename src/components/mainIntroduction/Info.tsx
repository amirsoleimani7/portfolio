import { userInformation } from "../../storage/data/Information";
import { Socials, SocialsType } from "../../storage/data/socials";

export const Info = () => {
  console.log(userInformation);

  return (
    <>
      <div className="flex w-full p-[5%]">
        <div className="w-[60%] h-full text-white ">
          <div className="w-[80%]">
            <h1 className="text-6xl font-bold mb-2">
              <span className="text-gray-500">Hey I'm Amir</span>
            </h1>
            <h1 className="text-6xl font-bold">Welcome To my portpolio Site</h1>
            <div className="flex flex-col mt-5 gap-5 text-md">
              <p className="text-gray-400">
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
              <p className="text-gray-400">
                My main tech stack it{" "}
                <span className="text-white font-semibold">
                  React, Javascript and typescript
                </span>
                , and modern front-end technologies for building web apps
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-[40%] h-full ">
          <div className="relative">
            <img
              src={userInformation.profile}
              alt="user's profile picture"
              className="w-full object-cover rounded-xl"
            />
            <div className="flex absolute right-2 bottom-2  gap-2">
              {Socials.map((s: SocialsType, index: number) => {
                return (
                  <button
                    key={index}
                    className="w-10 h-10  rounded-full backdrop-blur-xl bg-[rgba(0,0,0,0.2)] border-none  text-white flex items-center justify-center "
                  >
                    <s.logo />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
