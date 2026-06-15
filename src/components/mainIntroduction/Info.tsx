import { userInformation } from "../../storage/data/Information";

export const Info = () => {
  console.log(userInformation);

  return (
    <>
      <div className="flex bg-green-100 h-[500px] w-full p-[5%]">
        <div className="w-[60%] h-full bg-red-100 ">
          <h1 className="text-6xl font-bold">Hi I'm Amir</h1>
          <h1 className="text-6xl font-bold">Welcome To my portpolio</h1>
          <p>
            I'm a Frontend Enginner with 3+ years of experience, knowen for
            strong attention to details and pixel perfect exceution of the
            projects
          </p>
          <p>
            My main tech stack it React, Javascript and typescript, and modern
            front-end technologies for building web apps
          </p>
        </div>
        <div className="w-[40%] h-full bg-white">
          
        </div>
      </div>
    </>
  );
};
