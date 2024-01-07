import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { AreaChartProps } from "./types/AreaChartProps";
import useAreChart from "./useAreChart";

const AreaChart: FC<AreaChartProps> = ({ slot, data, colors }) => {
  const { areaChartOptions } = useAreChart({ slot, colors });

  return (
    <ReactApexChart
      options={areaChartOptions}
      series={data}
      type="area"
      height={370}
    />
  );
};

export default AreaChart;
