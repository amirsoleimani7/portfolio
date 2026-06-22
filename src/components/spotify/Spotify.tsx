import axios from "axios";
import  { useEffect, useState } from "react";
import xml2js from "xml2js";
import { FaLastfm } from "react-icons/fa";

export const Spotify = () => {
  type trackType = {
    trackName: string;
    trackArtist: string;
    date: string;
    album: string;
    trackImage: string;
    link : string
  };

  const [lastTrack, setLastTrack] = useState<trackType>({
    trackName: "test",
    trackArtist: "test",
    date: "test",
    album: "test",
    trackImage: "test",
    link : "test"
  });

  const [data, setData] = useState<string>("");

  useEffect(() => {
    async function getTrack() {
      await axios
        .get("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks", {
          params: {
            api_key: "1d06aaf516d9d0cfb6ed960c8d5584b2",
            limit: 1,
            user: "amirsoleimani",
          },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getTrack();

    const parser = new xml2js.Parser();
    parser.parseString(data, function (err, result) {
      if (result) {
        const last_track = result.lfm.recenttracks[0].track[0];
        console.log(last_track);
        setLastTrack({
          trackName: last_track.name[0],
          trackArtist: last_track.artist[0]._,
          date: last_track.date[0]._,
          album: last_track.album[0]._,
          trackImage: last_track.image[3]._,
          link : last_track.url[0],
        });
      }
    });
  }, [data]);

  console.log(lastTrack);

  return (
    <div className="w-full  p-[5%] flex flex-col">
      <div className=" w-full flex items-center justify-start mb-5">
        <h1 className="text-2xl font-bold text-gray-500 max-md:text-xl">
          Last song <span className="text-white">Played</span>
        </h1>
      </div>
      <div className="w-full h-[100px] flex justify-between">
        <div className="flex w-1/3 h-full gap-5 text-white">
          <div className="w-50 h-50 rounded-full bg-green-200 overflow-hidden">
            <img
              src={lastTrack.trackImage}
              alt="tracks profile pic"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <h1 className="font-bold">{lastTrack.trackArtist}</h1>
            <h1 className="font-semibold text-gray-500">
              {lastTrack.trackName}
            </h1>
          </div>
        </div>

        <div className="h-full flex items-center ">
          <a href={lastTrack.link} target="_blank" className=" rounded-full px-3 py-2 border-none outline outline-1 outline-gray-600 duration-200 transition-all ease-in-out hover:outline-white group">
            <button className=" gap-5 flex items-center justify-between ">
              <h1 className="duration-200 transition-all ease-in-out group-hover:text-white text-gray-400">Listen on Last.fm </h1>
              <div className="rounded-full duration-200 transition-all ease-in-out group-hover:bg-white bg-gray-400 text-red-600 p-1">
                <FaLastfm />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
