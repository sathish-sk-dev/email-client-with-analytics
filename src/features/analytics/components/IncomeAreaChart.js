import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { getThemeColor } from "../../../utils/themeUtils";

const areaChartOptions = {
  chart: {
    height: 450,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },
};

const IncomeAreaChart = ({ slot }) => {
  const [options, setOptions] = useState(areaChartOptions);

  const sendColor = getThemeColor("--send-color");
  const inboxColor = getThemeColor("--inbox-color");

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [sendColor, inboxColor],
      xaxis: {
        categories:
          slot === "month"
            ? [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]
            : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisBorder: {
          show: true,
        },
        tickAmount: slot === "month" ? 11 : 7,
      },
      tooltip: {
        theme: "light",
      },
    }));
  }, [slot]);

  const [series, setSeries] = useState([
    {
      name: "Send",
      data: [0, 86, 28, 115, 48, 210, 136],
    },
    {
      name: "Inbox",
      data: [0, 43, 14, 56, 24, 105, 68],
    },
  ]);

  useEffect(() => {
    setSeries([
      {
        name: "Send",
        data:
          slot === "month"
            ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
            : [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Inbox",
        data:
          slot === "month"
            ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
            : [11, 32, 45, 32, 34, 52, 41],
      },
    ]);
  }, [slot]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={370}
    />
  );
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string,
};

export default IncomeAreaChart;
