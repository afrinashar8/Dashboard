import React, { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import LineChart from "./LineChart.js";
import BarChart from "./BarChart.js";
import PieChart from "./PieChart.js";

const Dashboard = () => {
  const [evData, setEvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/path-to-your-csv.csv"); // Replace with correct path
      Papa.parse(result.data, {
        header: true,
        complete: (parsedData) => setEvData(parsedData.data),
      });
    };

    fetchData();
  }, []);

  // Example of calculating insights
  const totalEVs = evData.length;
  const evModels = evData.reduce((acc, ev) => {
    acc[ev.Model] = (acc[ev.Model] || 0) + 1;
    return acc;
  }, {});
  const evTypes = evData.reduce((acc, ev) => {
    acc[ev.Type] = (acc[ev.Type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <div className="metrics">
        <h3>Total Electric Vehicles: {totalEVs}</h3>
      </div>
      <div className="charts">
        <LineChart data={evData} />
        <BarChart data={evModels} />
        <PieChart data={evTypes} />
      </div>
    </div>
  );
};

export default Dashboard;
