// DetectionDetails.jsx
import React from "react";

const detectionDetailsData = [
  {
    label: "Facial Artifacts",
    eyeBlinking: ["#cddcf8", "#c3ecf4", "#cfffee", "#F5D4FF"],
  },
  { label: "Audio Analysis", eyeBlinking: ["#cddcf8", "#cfffee"] },
  {
    label: "Temporal & spatial consistency",
    eyeBlinking: ["#cddcf8", "#c3ecf4", "#f5d4ff"],
  },
  { label: "Physical Interaction", eyeBlinking: ["#cddcf8", "#f5d4ff"] },
  {
    label: "Facial Artifacts",
    eyeBlinking: ["#cddcf8", "#c3ecf4", "#cfffee", "#f5d4ff"],
  },
  { label: "Audio Analysis", eyeBlinking: ["#fee2e2", "#cfffee"] },
  {
    label: "Temporal & spatial consistency",
    eyeBlinking: ["#fee2e2", "#c3ecf4", "#f5d4ff"],
  },
  { label: "Physical Interaction", eyeBlinking: ["#fee2e2", "#f5d4ff"] },
];

const DetectionDetails = () => {
  const getTextColoByBackground = (backgroundColor) => {
    switch (backgroundColor) {
      case "#cddcf8":
        return "#282828";
      case "#c3ecf4":
        return "#14769c";
      case "#cfffee":
        return "#046345";
      case "#f5d4ff":
        return "#a155b9";
      case "#fee2e2":
        return "#9f4e4e";
      default:
        return "#282828";
    }
  };

  return (
    <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 mt-10">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold font-[poppins] text-gray-800">
            Detection Details
          </h2>
          <a href="#" className="text-[#3B82F6] text-sm font-medium">
            Export Results {">"}
          </a>
        </div>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipis.
        </p>
      </div>

      {detectionDetailsData.map((detail, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-full py-3 px-4 mb-4 flex flex-col md:flex-row items-start md:items-center"
        >
          <span className="font-bold text-xl font-[quicksand] w-full md:w-1/3 mb-2 md:mb-0">
            {detail.label}
          </span>
          <div className="mt-4 w-full md:w-2/3 flex flex-wrap justify-start">
            {detail.eyeBlinking.map((color, i) => {
              const textColor = getTextColoByBackground(color);
              return (
                <span
                  key={i}
                  className="font-medium py-2 px-2 rounded-full mr-2 mb-2" // Added mb-2 for spacing on smaller screens
                  style={{
                    backgroundColor: color,
                    color: textColor,
                    paddingLeft: "20px",
                    paddingRight: "15px",
                    display: "inline-block", // Ensure spans wrap correctly
                  }}
                >
                  Eye Blinking <span className="text-black">0</span>
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetectionDetails;
