import React, { useEffect, useRef, useState} from "react";
import {useScroll ,useSpring , useTransform , motion} from 'framer-motion'

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHieght] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  
  useEffect(() => {
  
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHieght(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, [contentRef]);

  // intercept normal scrolling
  const { scrollY } = useScroll();
  const smoothProgress = useSpring(scrollY , {
    mass :.01,
    stiffness : 100,
    damping : 10,
    restDelta : 0.001,
  })
  
  const y = useTransform(smoothProgress,(value) => {
    const maxOffset = Math.max(contentHeight - windowHeight, 0);
    return -Math.min(value, maxOffset);
  });
  

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div className="fixed top-0 left-0 overflow-hidden" ref={contentRef} style={{y : y}}>
            {
                children
            }
      </motion.div>
    </>
  );
};

export default SmoothScroll;