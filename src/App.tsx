// import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import { Info } from "./components/mainIntroduction/Info";
import Navigation from "./components/NavigationBar/Navigation";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
// import { Info } from "./components/mainIntroduction/Info";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <SmoothScroll>
      <div
        className="w-screen p-0 m-0 bg-main-color justify-start
        flex flex-col"
      >
        <div className="w-full flex justify-center h-fit border-b border-gray-800">
          <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[90%] max-2xl:w-[80%]">
            <Navigation />
          </div>
        </div>
        <div className="w-full flex justify-center h-fit border-b border-gray-800 ">
          <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[90%] max-2xl:w-[80%]">
            <Info />
          </div>
        </div>

        <div className="w-full flex justify-center h-[600px] border-b border-gray-800 ">
          <div className="w-[60%] flex justify-center border-r border-l border-gray-800 transition-all duration-200 ease-in-out max-lg:w-[90%] max-2xl:w-[80%]"></div>
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
