import navigationData, {
  headerButton,
} from "../../storage/data/navigationData";
import { userInformation } from "../../storage/data/Information";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [direction, setDirection] = useState<"up" | "down">("down");
  let last_known = 0;

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > last_known) {
        setDirection("down");
        last_known = window.scrollY;
      } else {
        setDirection("up");
        last_known = window.scrollY;
      }
    });
  });
  console.log(direction);

  return (
    <div
      className="w-[400px]  fixed  px-3 py-3 flex justify-between   rounded-full gap-5 border border-gray-800 my-2 backdrop-blur-xl z-20"
      style={{
        display: `${direction === "up" ? "none" : "flex"}`,
      }}
    >
      <div className="flex justify-center items-center gap-2 text-white mr-3 cursor-pointer">
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img src={userInformation.profile} alt="user profile" />
        </div>
        <span className="font-bold">{userInformation.firstName}</span>
      </div>

      <div className="flex justify-center text-gray-400 gap-2">
        {navigationData.map((btn: headerButton, index: number) => {
          return (
            <button
              key={index}
              className="flex items-center hover:text-white hover: transition-all duration-200 "
            >
              <p>{btn.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
