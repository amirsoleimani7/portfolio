import { useEffect, useRef } from "react";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Navigation from "./components/NavigationBar/Navigation";

function App() {
  return (
    <SmoothScroll>
      <div className="w-screen h-screen p-0 m-0 bg-main-color">
        <div className="w-full flex justify-center">
          <Navigation />
        </div>
        <div className="border-b outline-none border-gray-800 mt-3 w-[95%] mx-auto"></div>
        
      </div>
    </SmoothScroll>
  );
}

export default App;
