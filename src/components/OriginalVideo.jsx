import React from "react";

const OriginalVideo = ({ videoUrl }) => {
  return (
    <div className="bg-white p-6 rounded-[10px] shadow-md border-1 border-gray-200">
      <div>
        <h2 className="text-lg font-semibold">Original video</h2>
        <p className="text-sm text-gray-500 mb-2">
          Lorem ipsum dolor sit ametis.
        </p>

        <div className="rounded-[10px] border-1 border-gray-300 overflow-hidden mb-4">
          <img
            src={videoUrl}
            alt="Video Thumbnail"
            className="max-w-full h-auto"
          />
        </div>
        <a href="#" className="text-[#151518] text-sm font-semibold">
          VISIT LINK {">"}
        </a>
      </div>
    </div>
  );
};

export default OriginalVideo;
