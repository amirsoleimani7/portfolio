import { projects } from "../../storage/data/ProjectsInformation";
import { useRef, useState } from "react";
import { ProjectInstance } from "./ProjectInstance";
import { FloatingPreview } from "./FloatingPreview";

export const Projects = () => {
  type postionType = {
    x?: number;
    y?: number;
  };

  const [mousePosition, setMousePosition] = useState<postionType>({});
  const [show, setShow] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<number[]>([0, 0]);
  const lastHoveredIndex = useRef<number>(0);

  // Handler to receive index from child
  const handleProjectHover = (index: number) => {
    // Only update if it's a different index than the last one
    if (index !== lastHoveredIndex.current) {
      const new_list: number[] = [lastHoveredIndex.current, index];
      setCurrentItem(new_list);
      lastHoveredIndex.current = index;
    }
  };

  const updatePosition = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY - 210,
    });
  };

  const handleEnter = () => {
    window.addEventListener("mousemove", updatePosition);
    setShow(true);
    // Set initial hovered index
    lastHoveredIndex.current = 0;
    setCurrentItem([0, 0]);
  };

  const handleLeave = () => {
    window.removeEventListener("mousemove", updatePosition);
    setShow(false);
    // Reset when leaving
    lastHoveredIndex.current = 0;
  };

  return (
    <div
      className="w-full p-[5%] flex flex-col gap-5"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="w-full flex items-center justify-start mb-5">
        <h1 className="text-2xl font-bold text-gray-500 max-md:text-xl">
          My <span className="text-white">Projects</span>
        </h1>
      </div>

      {projects.map((p, index) => {
        return p === projects[projects.length - 1] ? (
          <ProjectInstance
            {...p}
            key={index}
            index={index}
            is_last={p === projects[projects.length - 1]}
            onHover={handleProjectHover}
          />
        ) : (
          <div className="flex flex-col gap-5 w-full" key={index}>
            <ProjectInstance
              {...p}
              index={index}
              is_last={p === projects[projects.length - 1]}
              onHover={handleProjectHover}
            />
            <div className="w-full border-b border-b-gray-800"></div>
          </div>
        );
      })}

      {show ? (
        <FloatingPreview
          x={mousePosition?.x}
          y={mousePosition?.y}
          currentIndex={currentItem}
          allImages={projects.map((p) => p.imageLink)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};