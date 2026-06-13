import { useEffect, useRef } from "react";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Navigation from "./components/NavigationBar/Navigation";

function App() {
  return (
    <SmoothScroll>
      <div className="">
        <Navigation/>
      </div>
    </SmoothScroll>
  );
}

export default App;
