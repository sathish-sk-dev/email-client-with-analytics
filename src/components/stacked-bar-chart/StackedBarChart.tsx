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
import "./StackedBarChart.scss"

export const StackedBarChart: FC<StackedBarChartProps> = ({
  bars,
  dataKey,
  colors,
  width,
}) => {
  const renderBars = () => {
    return (
      <>
        {colors.map((item) => (
          <Bar
            dataKey={item.key}
            stackId={"mail"}
            fill={item.value}
            width={50}
          />
        ))}
      </>
    );
  };

  return (
    <BarChart
      width={width}
      height={350}
      data={bars}
      margin={{
        top: 20,
        right: 30,
        left: 0,
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
