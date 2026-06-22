import axios from "axios";
import React, { useEffect, useState } from "react";
import xml2js from "xml2js";

export const Spotify = () => {
  type trackType = {
    trackName: string;
    trackArtist: string;
    date: string;
    album: string;
    trackIamge : string;
  };
  
  const [lastTrack, setLastTrack] = useState<trackType>({
    trackName: "test",
    trackArtist: "test",
    date: "test",
    album: "test",
    trackImage : "someth",
  });

  const [data, setData] = useState<string>("");

  const handle_update = async () => {
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
  };

  useEffect(() => {
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
          trackIamge : last_track.image[3]._
        });
      }
    });
  }, [data]);

  
  return (
    <div className="w-full h-20 p-[5%]">
      <button onClick={handle_update} className="w-20 h-20 bg-yellow-200">
        get update
      </button>
    </div>
  );
};
