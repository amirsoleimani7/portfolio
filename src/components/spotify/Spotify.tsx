import axios from "axios";
import XMLParser from 'react-xml-parser';

export const Spotify = () => {
  // we need to fetch the data from spotfiy

  //Application name	amir
  //API key	1d06aaf516d9d0cfb6ed960c8d5584b2
  //Shared secret	778490b53e2aad44e0a59db28f0279ee
  //Registered to	amirsoleimani

  const handle_update = async () => {
    const res = await axios.get(
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks",{
        params: {
          api_key: "1d06aaf516d9d0cfb6ed960c8d5584b2",
          limit: 1,
          user: "amirsoleimani",
        },
      },
    );
    
    console.log(res.data);
  };

  return (
    <div className="w-full h-20 p-[5%]">
      <button onClick={handle_update} className="w-20 h-20 bg-yellow-200">
        get update
      </button>
    </div>
  );
};
