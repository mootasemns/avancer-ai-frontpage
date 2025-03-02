import React from "react";
import videoplayer from "../assets/video-player.png";

const VideoPlaceholder = () => {
  return (
    <div className="w-full h-full">
      <img
        src={videoplayer}
        alt="Video Placeholder"
        className="w-full h-full"
      />
    </div>
  );
};

export default VideoPlaceholder;
