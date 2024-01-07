import { useState } from "react";

// third-party
import ReactApexChart from "react-apexcharts";

// chart options
const barChartOptions = {
  chart: {
    type: "bar",
    height: 365,
    toolbar: {
      show: false,
    },
    colors: ["red"]
  },
  plotOptions: {
    bar: {
      columnWidth: "45%",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
};

const MonthlyBarChart = () => {
  const [series] = useState([
    {
      name: "Total Mails",
      data: [80, 95, 70, 42, 65, 55, 78],
    },
  ]);

  const [options] = useState(barChartOptions);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={370}
      />
    </div>
  );
};

export default MonthlyBarChart;
