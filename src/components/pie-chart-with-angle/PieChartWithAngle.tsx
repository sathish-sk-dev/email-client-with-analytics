import { Cell, Legend, Pie, PieChart } from "recharts";
import React, { FC } from "react";
import { PieChartActiveShape } from "./components/PieChartActiveShape";
import { PieChartWithAngleProps } from "./PieChartWithAngleProps";
import { usePieChartWithAngle } from "./usePieChartWithAngle";

export const PieChartWithAngle: FC<PieChartWithAngleProps> = ({
  pieChartData,
  colors,
  width,
}) => {
  const { activeIndex, onPieEnter } = usePieChartWithAngle();
  return (
    <PieChart width={width} height={350}>
      <Pie
        activeIndex={activeIndex}
        data={pieChartData}
        activeShape={PieChartActiveShape}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {pieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};
