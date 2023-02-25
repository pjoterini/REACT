import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const SongCard = ({ data, video, isPlaying, activeSong, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ video, data, i }));
    dispatch(playPause(true));
  };

  console.log(video);

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === video.snippet.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            video={video}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="truncate">
          <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
        </p>
        <br />
        <p className=" text-gray-300 truncate">
          <Link to={`/channel/${video.snippet.channelTitle}`}>
            {video.snippet.channelTitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
