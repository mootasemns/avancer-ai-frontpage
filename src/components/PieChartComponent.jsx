import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(ArcElement, Tooltip, Legend);

const defaultData = {
  labels: [
    "Authentic (0% - 5%)",
    "Low suspicion (0% - 5%)",
    "Deep fake (0% - 5%)",
    "Authentic (0% - 5%)",
    "Low suspicion (0% - 5%)",
    "Deep fake (0% - 5%)",
  ],
  datasets: [
    {
      label: "Content Analysis",
      data: [60, 15, 12, 15, 12, 14],
      backgroundColor: [
        "#6381C4",
        "#EC4899",
        "#A78BFA",
        "#9333EA",
        "#34D399",
        "#06B6D4",
      ],
      borderColor: "transparent",
      borderWidth: 0,
      spacing: 0,
    },
  ],
};

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      align: "center",
      labels: {
        usePointStyle: false,
        font: {
          size: 14,
          family: "Inter, sans-serif", //
        },
        boxWidth: 25,
      },
    },
  },
};

const PieChartComponent = ({
  score = "92%",
  data = defaultData,
  options = defaultOptions,
}) => {
  return (
    <div className="rounded-[16px] shadow-md p-4 bg-white border-1 border-gray-200 h-full">
      {" "}
      {/* Removed fixed width, kept h-full */} {/*  Added height here */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold uppercase text-[#828282] font-[roboto]">
          SCORE
        </h2>
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="text-gray-500 size-xl"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-[#0B1354]">{score}</h1>
      <hr className="text-[#ECECEC] border-1 mb-4" />
      <div className="w-full h-[220px]">
        {" "}
        {/* Use full width here */}
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartComponent;
