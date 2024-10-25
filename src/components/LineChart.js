import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dynamic Data",
        data: data,
        fill: false,
        backgroundColor: "rgba(153,102,255,0.6)",
        borderColor: "rgba(153,102,255,1)",
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
