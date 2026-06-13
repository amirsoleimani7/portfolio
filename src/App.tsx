import { useEffect, useRef } from "react";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Navigation from "./components/NavigationBar/Navigation";

function App() {
  return (
    <SmoothScroll>
      <div className="w-full bg-red-300">
        <Navigation/>
      </div>
    </SmoothScroll>
  );
}

export default App;
