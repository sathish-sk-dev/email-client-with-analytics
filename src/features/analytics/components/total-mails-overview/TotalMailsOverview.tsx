// @ts-nocheck
import ReactApexChart from "react-apexcharts";
import styles from "./TotalMailsOverview.module.scss";
import useTotalMailsOverview from "./useTotalMailsOverview";

const TotalMailsOverview = () => {
  const { barChartOptions, barChartData } = useTotalMailsOverview();
  const renderChart = () => (
    <div id="chart">
      <ReactApexChart
        options={barChartOptions}
        series={barChartData}
        type="bar"
        height={370}
      />
    </div>
  );

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <div className={styles.chartTitle}> {"Total Mails Overview"}</div>
      </div>
      <div className={styles.monthlyBarChart}>{renderChart()}</div>
    </div>
  );
};

export default TotalMailsOverview;
