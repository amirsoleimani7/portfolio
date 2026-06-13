import { useEffect, useRef } from "react";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Navigation from "./components/NavigationBar/Navigation";

function App() {
  return (
    <SmoothScroll>
      <div className="w-screen h-screen p-0 m-0 bg-main-color">
        <div className="w-full flex justify-center p-2">
          <Navigation />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
