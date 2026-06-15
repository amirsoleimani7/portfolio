import React, { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [children]); // Add children as dependency to recalculate when content changes

  // Get scroll progress (0 to 1) instead of absolute scrollY
  const { scrollYProgress } = useScroll();
  
  // Smooth the progress value
  const smoothProgress = useSpring(scrollYProgress, {
    mass: .05,
    stiffness: 200,
    damping: 15,
    restDelta: 0.001,
  });
  
  // Transform progress to pixel offset
  const y = useTransform(smoothProgress, (progress) => {
    const maxOffset = Math.max(contentHeight - windowHeight, 0);
    return -progress * maxOffset;
  });

  return (
    <>
      {/* Spacer div to maintain scroll height */}
      <div style={{ height: contentHeight }} />
      
      {/* Fixed content that moves with scroll */}
      <motion.div 
        className="fixed top-0 left-0 w-full " 
        ref={contentRef} 
        style={{ y }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;