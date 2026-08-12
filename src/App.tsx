import { Info } from "./components/mainIntroduction/Info";
// import Navigation from "./components/NavigationBar/Navigation";
// import "@radix-ui/themes/styles.css";
// import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import { TechStack } from "./components/techStack/TeckStack";
import { ReactLenis } from "lenis/react";
import GithubActivity from "./components/githubActivity/GithubActivity";

import { Footer } from "./components/footer/Footer";
import GradualBlur from "./components/footer/GradualBlur";
import { Projects } from "./components/Projects/Projects";
import { Spotify } from "./components/spotify/Spotify";

function App() {
  return (
    <div
      className="w-screen p-0 m-0 bg-main-color justify-start
      flex flex-col relative"
    >
      <ReactLenis root />

      {/*
        <div className="w-full flex justify-center h-fit border-b border-gray-800">
          <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[95%] max-2xl:w-[80%]">
            <Navigation />
          </div>
        </div> */}

      <div className="w-full flex justify-center h-fit border-b border-gray-800 ">
        <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[97%] max-2xl:w-[80%]">
          <Info />
        </div>
      </div>
      <div className="w-full  flex justify-center  border-b border-gray-800 ">
        <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[97%] max-2xl:w-[80%]">
          <TechStack />
        </div>
      </div>
      <div className="w-full  flex justify-center  border-b border-gray-800">
        <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[97%] max-2xl:w-[80%]">
          <GithubActivity />
        </div>
      </div>
      <div className="w-full  flex justify-center  border-b border-gray-800 ">
        <div className=" w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[97%] max-2xl:w-[80%]">
          <Projects />
        </div>
      </div>
      <div className="w-full  flex justify-center  border-b border-gray-800">
        <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[97%] max-2xl:w-[80%]">
          <Spotify />
        </div>
      </div>
      <div className="w-full  flex justify-center   border-b border-gray-800  bg-green-300">
        <div className="w-[60%] flex justify-center  border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[97%] max-2xl:w-[80%]">
          <Footer />
        </div>
      </div>
      <div className="w-full h-[50px] z-50 fixed bottom-0 border-none outline-none  ">
        <GradualBlur
          target="parent"
          position="bottom"
          // height="5rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </div>
    </div>
  );
}

export default App;
