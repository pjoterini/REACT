import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, video, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === video.snippet.title ? (
    <FaPauseCircle size={35} onClick={handlePause()} />
  ) : (
    <FaPlayCircle
      size={35}
      onClick={() => {
        handlePlay();
        console.log("CHECK");
      }}
    />
  );

export default PlayPause;
