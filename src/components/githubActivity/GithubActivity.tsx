import { GitHubCalendar } from "react-github-calendar";
import "./githubCalenderCustom.css";

const GithubActivity = () => {
  return (
    <div className="text-white flex flex-col items-center  w-full p-[5%] justify-center ">
      <div className=" w-full flex items-center justify-start mb-5">
        <h1 className="text-2xl font-bold text-gray-500 max-md:text-xl">
          My Coding <span className="text-white">Activity</span>
        </h1>
      </div>
      <GitHubCalendar
        username="amirsoleimani7"
        className="github-calendar-custom"
        colorScheme="dark"
      ></GitHubCalendar>
    </div>
  );
};

export default GithubActivity;
