import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarCharts = () => {
  const data = [
    { name: "Facebook", before: 1000, after: 10000 },
    { name: "Instagram", before: 2111, after: 13000 },
    { name: "Twitter", before: 700, after: 5000 },
    { name: "ONTHECARD", before: 5000, after: 7000 },
  ];

  return (
    <div>
      <h1>Social Network Users</h1>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="before" stackId="a" fill="#8884d8" />
        <Bar dataKey="after" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarCharts;
