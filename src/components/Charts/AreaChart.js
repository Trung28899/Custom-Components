import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaCharts = () => {
  const data = [
    { name: "February", users: 3500 },
    { name: "March", users: 3900 },
    { name: "April", users: 4255 },
    { name: "May", users: 4500 },
    { name: "June", users: 5500 },
    { name: "July", users: 7000 },
    { name: "August", users: 8000 },
  ];
  return (
    <div>
      <h1>ONTHECARD Users Monitor</h1>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default AreaCharts;
