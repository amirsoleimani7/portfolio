import axios from "axios";
import React, { useEffect, useState } from "react";
import xml2js from "xml2js";

export const Spotify = () => {
  type trackType = {
    trackName: string;
    trackArtist: string;
    date: string;
    album: string;
    trackIamge: string;
  };

  const [lastTrack, setLastTrack] = useState<trackType>({
    trackName: "test",
    trackArtist: "test",
    date: "test",
    album: "test",
    trackImage: "someth",
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
          trackIamge: last_track.image[3]._,
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
      <div className="w-full h-[100px] bg-red-100">
          <div className="flex w-1/3 h-full bg-yellow-200">
          <div className="w-50 h-50 rounded-full bg-green-200 overflow-hidden">
            <img src={lastTrack.trackIamge} alt="tracks profile pic" className="w-full h-full" />
          </div>
            <div className="flex flex-col">
              <h1 className="">{lastTrack.trackName}</h1>
              <h1 className="">{lastTrack.album}</h1>
              <h1 className="">{lastTrack.trackArtist}</h1>
            </div>
          </div>
      </div>
    </div>
  );
};
