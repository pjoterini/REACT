import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
import { Error, Loader } from "../components";
import SongCard from "../components/SongCard";
import { useGetSuggestedQuery } from "../redux/services/youtubeCore";

const Discover = () => {
  const { data, isFetching, error } = useGetSuggestedQuery();
  console.log(data);

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row  flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          onChange={() => {}}
          value=""
        >
          {genres.map((genre) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.items.map((item, i) => {
          return (
            <SongCard
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
              key={item.id.videoId}
              video={item}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
