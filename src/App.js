import React, { useState } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import "./App.css";
const App = () => {
  const [labels, setLabels] = useState(["Jan", "Feb", "Mar", "Apr", "May"]);
  const [data, setData] = useState([10, 20, 30, 40, 50]);
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleAddData = (e) => {
    e.preventDefault();
    if (newLabel && newValue) {
      setLabels((prevLabels) => [...prevLabels, newLabel]);
      setData((prevData) => [...prevData, parseInt(newValue)]);
      setNewLabel("");
      setNewValue("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Chart Dashboard</h1>

      <form onSubmit={handleAddData} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Label"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button type="submit">Add Data</button>
      </form>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2>Line chart</h2>{" "}
        <div className="shadow">
          <LineChart labels={labels} data={data} />
        </div>
        <h2>Bar chart</h2>{" "}
        <div className="shadow">
          {" "}
          <BarChart labels={labels} data={data} />
        </div>
        <h2>Pie chart</h2>{" "}
        <div className="shadow">
          {" "}
          <PieChart labels={labels} data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
