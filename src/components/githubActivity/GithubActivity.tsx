import { GitHubCalendar } from "react-github-calendar";
import "./githubCalenderCustom.css"

const GithubActivity = () => {
  return (
    <div className="text-white flex items-center  w-full p-[5%] justify-center ">      
      <GitHubCalendar
        username="amirsoleimani7"
        className="github-calendar-custom"
        colorScheme="dark" 
      ></GitHubCalendar>
    </div>
  );
};


export default GithubActivity;
