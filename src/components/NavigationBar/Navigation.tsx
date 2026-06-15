import navigationData, {
  headerButton,
} from "../../storage/data/navigationData";

import {userInformation} from "../../storage/data/Information"

const Navigation = () => {
  
  return (
    <div className="w-fit px-3 py-3 flex justify-center  rounded-full gap-5 border border-gray-800 my-2">
      <div className="flex justify-center items-center gap-2 text-white mr-3 cursor-pointer">
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img src={userInformation.profile} alt="user profile" />  
        </div>
        <span className="font-bold">{userInformation.firstName}</span>

      </div>
      
      <div className="flex justify-center text-white gap-2">
        {navigationData.map((btn: headerButton, index: number) => {
          return (
            <button
              key={index}
              className="flex items-center hover:text-sky-500 hover: transition-all duration-200 "
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
