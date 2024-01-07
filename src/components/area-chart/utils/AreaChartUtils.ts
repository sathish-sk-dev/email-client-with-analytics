const defaultAreaChartOptions = {
  chart: {
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
  tooltip: {
    theme: "light",
  },
};

const monthShortNames = [
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
];

const weekDaysShortNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export { defaultAreaChartOptions, monthShortNames, weekDaysShortNames };
