import { useMemo } from "react";

const useTotalMailsOverview = () => {
  const barChartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
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

  const barChartData = useMemo(
    () => [
      {
        name: "Total Mails",
        data: [80, 95, 70, 42, 65, 55, 78],
      },
    ],
    [],
  );

  return {
    barChartOptions,
    barChartData,
  };
};

export default useTotalMailsOverview;
