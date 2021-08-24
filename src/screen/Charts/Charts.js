import React from "react";
import PieChart from "../../components/Charts/PieChart";
import BarChart from "../../components/Charts/BarChart";
import AreaChart from "../../components/Charts/AreaChart";

const Charts = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <PieChart />
      </div>
      <div>
        <BarChart />
      </div>
      <div>
        <AreaChart />
      </div>
    </div>
  );
};

export default Charts;
