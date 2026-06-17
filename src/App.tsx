import { Info } from "./components/mainIntroduction/Info";
import Navigation from "./components/NavigationBar/Navigation";
import "@radix-ui/themes/styles.css";
// import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import { TechStack } from "./components/techStack/TeckStack";
import { ReactLenis } from "lenis/react";
import GithubActivity from "./components/githubActivity/GithubActivity";

import "./components/footer/footerBlur.css";

function App() {
  return (
    <div
      className="w-screen p-0 m-0 bg-main-color justify-start
    flex flex-col relative"
    >
      <ReactLenis root />

      <div className="w-full flex justify-center h-fit border-b border-gray-800">
        <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[95%] max-2xl:w-[80%]">
          <Navigation />
        </div>
      </div>

      <div className="w-full flex justify-center h-fit border-b border-gray-800 ">
        <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[95%] max-2xl:w-[80%]">
          <Info />
        </div>
      </div>

      <div className="w-full  flex justify-center  border-b border-gray-800 ">
        <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[95%] max-2xl:w-[80%]">
          <TechStack />
        </div>
      </div>

      <div className="w-full  flex justify-center  border-b border-gray-800">
        
        <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[95%] max-2xl:w-[80%]">
          <GithubActivity />
        </div>
      </div>
      <div className="w-full h-[50px] z-50 fixed bottom-0 backdrop-blur-[1px] custom-blur border-none outline-none"></div>
    </div>
  );
}

export default App;
