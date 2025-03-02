// ScannedContent.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faVolumeUp,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const scannedContentData = [
  {
    type: "Facebook video",
    description: "via insert link",
    date: "12/12/2024",
    time: "8:49",
  },
  {
    type: "audio",
    description: "uploaded audio",
    date: "12/12/2024",
    time: "12:06",
  },
  {
    type: "image",
    description: "uploaded image",
    date: "12/12/2024",
    time: "23:00",
  },
  {
    type: "video",
    description: "uploaded video",
    date: "12/12/2024",
    time: "23:00",
  },
];

const ScannedContent = () => {
  const iconMap = {
    "Facebook video": faLink,
    audio: faVolumeUp,
    image: faImage,
    video: faVideo,
  };

  return (
    <div className="bg-white p-6 shadow-md mt-4 border-1 border-gray-200 rounded-[10px]">
      <div>
        <h2 className="text-lg font-bold font-[Poppins]">
          Previously Scanned Content
        </h2>
        <p className="text-sm text-gray-500 mb-2 font-[Poppins]">
          Lorem ipsum dolor sit ametis.
        </p>
        {scannedContentData.map((item, index) => {
          const icon = iconMap[item.type] || faLink;

          return (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center mb-2">
                <div className="bg-gray-200 p-2 rounded-md mr-4 ">
                  <FontAwesomeIcon
                    icon={icon}
                    size="lg"
                    className="text-[#668ad9]"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{item.type}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">{item.date}</p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            </div>
          );
        })}
        <a href="#" className="text-[#151518]  text-sm font-semibold">
          SEE ALL HISTORY {">"}
        </a>
      </div>
    </div>
  );
};

export default ScannedContent;
