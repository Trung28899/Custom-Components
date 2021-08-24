import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const BarChart = () => {
  const data = [
    { name: "Facebook", value: 10000, fill: "#57c0e8" },
    { name: "Instagram", value: 15000, fill: "#FF6565" },
    { name: "Twitter", value: 8500, fill: "#FFDA83" },
    { name: "ONTHECARD", value: 7500, fill: "purple" },
  ];

  return (
    <div>
      <h1>Social Network Users</h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />

        <Legend
          layout="vetical"
          verticalAlign="middle"
          align="right"
          height={160}
          width={50}
        />
      </PieChart>
    </div>
  );
};

export default BarChart;
