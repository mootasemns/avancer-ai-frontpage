import React from "react";
import PieChartComponent from "./PieChartComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faChartLine } from "@fortawesome/free-solid-svg-icons";
import videoplayer2 from "../assets/video-player2.png";
import VideoPlaceholder from "./VideoPlaceholder";
import OriginalVideo from "./OriginalVideo";
import DetectionDetails from "./DetectionDetails";
import ScannedContent from "./ScannedContent";

const DashboardContent = () => {
  const videoUrl = videoplayer2;
  const videoDescription =
    "Avancer Apply Processes, Methods, Skills, Knowledge And Experience To Achieve Specific Project Objectives. According To The Project Acceptance Criteria Within Agreed Parameters. Project Management Has Final Deliverables That Are Constrained To A Finite Timescale And Budget.";

  return (
    <div className="ml-2 md:ml-4 lg:ml-10 xl:ml-20 2xl:ml-40 p-4">
      <div>
        <div className="w-full flex justify-between items-center mb-4 mt-5 flex-wrap">
          <h1 className="font-[Poppins] text-sm md:text-base lg:text-xl text-gray-500 mb-2 md:mb-0">
            <span className="font-bold text-black">Hey Mohamed</span> - here's
            your content verification for today
          </h1>
          <div className="flex items-center space-x-2 md:space-x-4 mr-2 md:mr-10 xl:mr-30">
            <button className="bg-[#678ad9] hover:bg-blue-700 text-white font-medium py-2 px-4 md:py-3 md:px-6 lg:py-5 lg:px-9 rounded-full flex items-center font-[Poppins] text-xs md:text-sm cursor-pointer whitespace-nowrap">
              <FontAwesomeIcon icon={faKeyboard} className="mr-2 md:mr-5" />
              Insert Keyword
            </button>
            <button className="bg-[#893976] hover:bg-purple-700 text-white font-medium py-2 px-5 md:py-3 md:px-8 lg:py-5 lg:px-16 rounded-full flex items-center font-[Poppins] text-xs cursor-pointer md:text-sm whitespace-nowrap">
              <FontAwesomeIcon icon={faChartLine} className="mr-2 md:mr-5" />
              Analyze
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-2/3">
            <div>
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10 lg:gap-20">
                <div className="lg:w-full md:w-1/2 h-[200px] md:h-[250px] lg:h-[350px]">
                  <VideoPlaceholder />
                </div>
                <div className="w-full md:w-1/2">
                  <PieChartComponent />
                </div>
              </div>
            </div>
            <div className="bg-white p-3 md:p-4 lg:p-6 mt-4 rounded-[10px] md:rounded-[12px] lg:rounded-[16px] border-1 border-gray-200">
              <div className="p-1">
                <h2 className="text-md md:text-lg font-bold font-[Poppins] mb-2 md:mb-3 lg:mb-4">
                  Video Description
                </h2>
                <p className="text-sm md:text-base text-gray-500 font-[Poppins]">
                  {videoDescription}
                </p>
              </div>
            </div>
            <DetectionDetails />
          </div>
          <div className="lg:flex flex-col gap-4 ">
            <OriginalVideo videoUrl={videoUrl} />
            <ScannedContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
