type userType = {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  age: number;
  developer: string[];
  profile: string;
};

export const userInformation: userType = {
  firstName: "Amir",
  lastName: "Soleimani",
  country: "Iran",
  city: "Bushehr",
  age: 22,
  developer: ["Frontend Developer"],
  profile: process.env.PUBLIC_URL + "/images/profile-pic.jpeg",
};

