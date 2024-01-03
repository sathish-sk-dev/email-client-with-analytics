import React, { FC } from "react";
import { StackedBarChartProps } from "./types/StackedBarChartProps";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const StackedBarChart: FC<StackedBarChartProps> = ({
  bars,
  dataKey,
  colors,
}) => {
  const renderBars = () => {
    return colors.map((item) => {
      return <Bar dataKey={item.key} stackId={item.key} fill={item.value} />;
    });
  };

  return (
    <BarChart
      width={800}
      height={350}
      data={bars}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {renderBars()}
    </BarChart>
  );
};
