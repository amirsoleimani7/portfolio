import axios from "axios";
import { useEffect, useState } from "react";
import xml2js from "xml2js";
import { FaLastfm } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Spotify = () => {
  type trackType = {
    trackName: string;
    trackArtist: string;
    date: string;
    album: string;
    trackImage: string;
    link: string;
  };

  const [lastTrack, setLastTrack] = useState<trackType>({
    trackName: "",
    trackArtist: "",
    date: "",
    album: "",
    trackImage: "",
    link: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isImageLoading, setisImageLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getTrack() {
      setIsLoading(true);
      // setisImageLoading(true);
      await axios
        .get("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks", {
          params: {
            api_key: "1d06aaf516d9d0cfb6ed960c8d5584b2",
            limit: 1,
            user: "amirsoleimani",
          },
        })
        .then((res) => {
          const parser = new xml2js.Parser();
          parser.parseString(res.data, function (err, result) {
            if (result) {
              const last_track = result.lfm.recenttracks[0].track[0];
              setLastTrack({
                trackName: last_track.name[0],
                trackArtist: last_track.artist[0]._,
                date: last_track.date[0]._,
                album: last_track.album[0]._,
                trackImage: last_track.image[3]._,
                link: last_track.url[0],
              });

              setIsLoading(false);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getTrack();

    return () => {};
  }, []);

  console.log(lastTrack);

  return (
    <div className="w-full  p-[5%] flex flex-col">
      <div className=" w-full flex items-center justify-start mb-5">
        <h1 className="text-2xl font-bold text-gray-500 max-md:text-xl">
          Last song <span className="text-white">Played</span>
        </h1>
      </div>
      <div className="w-full flex justify-between items-center max-sm:flex-col">
        <div className="flex  h-full gap-5 text-white items-center max-sm:self-start">
          <div className="w-20 h-20 rounded-full ">
            {isImageLoading && (
              <div className="w-full h-full">
                <Skeleton
                  duration={1.5}
                  circle
                  baseColor="#4b5563"
                  className="w-full h-full !block"
                />
              </div>
            )}
            <img
              style={{
                display: `${!isImageLoading ? "block" : "none"}`,
              }}
              src={lastTrack.trackImage}
              onLoad={() => {
                setisImageLoading(false);
              }}
              alt="tracks profile pic"
              className="w-full h-full rounded-full flex shrink-0"
            />
          </div>

          {isLoading ? (
            <div className="w-28 h-fit mt-[20px] max-md:self-end">
              <Skeleton
                duration={1.5}
                className="w-full !block bg-green-300"
                baseColor="#4b5563"
              />
              <Skeleton
                duration={1.5}
                className="w-full !block bg-green-300"
                baseColor="#4b5563"
              />
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-1 item-center ">
              <h1 className="font-bold">{lastTrack.trackArtist}</h1>
              <h1 className="font-semibold text-gray-500">
                {lastTrack.trackName}
              </h1>
            </div>
          )}
        </div>

        <div className="h-full flex items-center max-sm:self-end">
          {isLoading ? (
            <div className="w-32">
              <Skeleton
                className="w-full h-10  !block"
                baseColor="#4b5563"
                duration={1.5}
                style={{
                  borderRadius: "20px",
                }}
              />
            </div>
          ) : (
            <a
              href={lastTrack.link}
              target="_blank"
              rel="noreferrer"
              className=" rounded-full px-3 py-2 border-none outline outline-1   outline-gray-600 duration-200 transition-all ease-in-out hover:outline-white group"
            >
              <button className=" gap-5 flex items-center justify-between ">
                <h1 className="duration-200 transition-all ease-in-out group-hover:text-white text-gray-400">
                  Listen on Last.fm{" "}
                </h1>
                <div className="rounded-full duration-200 transition-all ease-in-out group-hover:bg-white bg-gray-400 text-red-600 p-1">
                  <FaLastfm />
                </div>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
