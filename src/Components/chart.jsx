import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Chart = () => {
  const data = [
    { name: "Bath", value: 200 },
    { name: "Washroom", value: 300 },
    { name: "Urgent", value: 50 },
    { name: "Change-cloths", value: 150 },
  ];
  return (
    <>
      <div className="practice">
        <h3>CHART</h3>
        {/* <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            accentHeight={40}
            fill="#623ec7"
          />
          <Tooltip /> */}
        {/* </PieChart> */}
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{ top: 5, left: 20, bottom: 5, right: 30 }}
          barSize={50}
          maxBarSize={350}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeLinecap="10" />
          <Bar dataKey="value" fill="#623ec7" background={{ fill: "white" }} />
        </BarChart>
      </div>
    </>
  );
};
