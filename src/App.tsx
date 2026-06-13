import { useEffect, useRef } from "react";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <div className="App bg-red-100 w-[200px] h-[2000px] font-bold">test</div>
    </SmoothScroll>
  );
}

export default App;
