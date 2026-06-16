import { userInformation } from "../../storage/data/Information";
import {
  Socials,
  SocialsType,
  otherInformation,
  OtherType,
} from "../../storage/data/socials";
import { ConfigProvider, Space, Tooltip } from "antd";
import BlurText from "./BlurText";
import { useEffect, useState } from "react";
import axios from "axios";
import TypewriterView from "./TypeWriter";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

async function getCurrentTime() {
  const res = await axios.get(
    "https://timeapi.io/api/timezone/zone?timeZone=Asia/Tehran",
  );
  return res.data;
}

export const Info = () => {
  type timeType = {
    isError: boolean;
    errorText: string;
    Hour: number;
    Minute: number;
    Seconds: number;
  };

  const [currentTime, setCurrentTime] = useState<timeType>({
    isError: false,
    errorText: "",
    Hour: 0,
    Minute: 0,
    Seconds: 0,
  });

  const [isTimeLoading, setTimeLoading] = useState<boolean>(false);

  // just once onMount
  useEffect(() => {
    async function fetchTime() {
      try {
        setTimeLoading(true);
        const data = await getCurrentTime();
        const currentLocalTime: string = data["currentLocalTime"];

        const iranTime = currentLocalTime
          .split("T")[1]
          .split(".")[0]
          .split(":");

        setCurrentTime({
          isError: false,
          errorText: "",
          Hour: parseInt(iranTime[0]),
          Minute: parseInt(iranTime[1]),
          Seconds: parseInt(iranTime[2]),
        });

        // we gotta make it moving
      } catch (error) {
        console.error("Error fetching time:", error);
        setCurrentTime({
          isError: true,
          errorText: "Failed Load Iran's Time",
          Hour: 0,
          Minute: 0,
          Seconds: 0,
        });
      } finally {
        setTimeLoading(false);
      }
    }
    fetchTime();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSec = currentTime.Seconds + 1;
      
      const data: timeType = {
        isError: false,
        errorText: "",
        Hour: currentTime.Hour,
        Minute: currentTime.Minute,
        Seconds: nextSec,
      };

      if (nextSec === 60) {
        data.Minute += 1;
        data.Seconds = 0;
      }

      if (data.Minute === 60) {
        data.Hour += 1;
        data.Minute = 0;
      }

      setCurrentTime(data);
    }, 1000);

    // handling memmory leak
    return () => clearInterval(interval);
  }, [currentTime]);
  
  return (
    <>
      <div className="flex w-full p-[5%]">
        <div className="w-[60%] h-full text-white rounded-xl flex flex-col">
          <div className="w-[80%] mb-5">
            <h1 className="text-6xl font-bold mb-2">
              <BlurText
                text="Hey I'm Amir"
                delay={50}
                animateBy="words"
                direction="top"
                className="text-gray-500"
              />
            </h1>
            <BlurText
              text="Welcome To my portpolio Site!"
              delay={50}
              animateBy="words"
              direction="bottom"
              className="text-6xl font-bold"
            />

            {/* <h1 className="text-6xl font-bold">Welcome To my portpolio Site</h1> */}
            <div className="flex flex-col mt-5 gap-4 text-md ">
              <p className="text-gray-400 leading-6">
                I'm a{" "}
                <span className="font-semibold text-white">
                  Frontend Enginner
                </span>{" "}
                with{" "}
                <span className="font-semibold text-white">
                  2+ years of experience
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

        <div className="w-[40%] h-full flex flex-col">
          <div className="relative h-[70%]">
            <img
              src={userInformation.profile}
              alt="user's profile "
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex absolute right-2 bottom-2  gap-2">
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
                        color={"white"}
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
                          className="w-10 h-10  rounded-full backdrop-blur-xl bg-[rgba(0,0,0,0.3)] border-none  text-white flex items-center justify-center  hover:-translate-y-1 transition-all  duration-200"
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

          <div className="flex flex-col h-[15%]">
            <h1 className="text-white text-xl font-bold  pt-2">
              AmirHossein Soleimani
            </h1>
            <p className="text-gray-300">Frontend Engineer</p>
          </div>
          <div className="h-[15%] w-full rounded-xl grid grid-cols-2 text-white gap-1 mt-auto">
            {otherInformation.map((o: OtherType, index: number) => {
              return (
                <div
                  className="flex gap-2 items-center text-gray-400 cursor-pointer transition-all duration-200 hover:text-white group"
                  key={index}
                >
                  <div className="w-6 h-6 shrink-0 outline-gray-700 outline-1 outline rounded-md flex justify-center items-center transition-all duration-200 ease-in-out">
                    <o.logo />
                  </div>

                  {o.value === undefined ? (
                    <div className="text-sm">
                      {isTimeLoading ? (
                        <TypewriterView />
                      ) : currentTime.isError ? (
                        <div>{currentTime.errorText}</div>
                      ) : (
                        <div>
                          <NumberFlowGroup>
                            <NumberFlow
                              prefix=""
                              value={currentTime.Hour}
                              digits={{ 1: { max: 5 } }}
                              format={{ minimumIntegerDigits: 2 }}
                            />
                            <NumberFlow
                              prefix=":"
                              value={currentTime.Minute}
                              digits={{ 1: { max: 5 } }}
                              format={{ minimumIntegerDigits: 2 }}
                            />
                            <NumberFlow
                              prefix=":"
                              value={currentTime.Seconds}
                              digits={{ 1: { max: 5 } }}
                              format={{ minimumIntegerDigits: 2 }}
                            />
                          </NumberFlowGroup>
                        </div>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                  <span className="text-sm">
                    {o.value?.split("").map((char, index) => (
                      <span
                        key={index}
                        className="char"
                        style={{
                          display: "inline-block",
                          transition: "all 0.2s",
                          animationDelay: `${index * 0.03}s`,
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
