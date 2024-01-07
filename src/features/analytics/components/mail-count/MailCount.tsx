import styles from "./MailCount.module.scss";
import React, { FC, useRef } from "react";
import { MailCountProps } from "../../types/MailCountProps";
import { PieChartWithAngle } from "../../../../components/pie-chart-with-angle/PieChartWithAngle";
import useContainerWidth from "../../../../custom-hooks/use-container-width/useContainerWidth";

export const MailCount: FC<MailCountProps> = ({ colors, pieChartData }) => {
  const containerRef = useRef(null);

  const width = useContainerWidth({ ref: containerRef });

  const renderHeader = () => {
    return (
      <div className={styles.chartHeader}>
        <div className={styles.chartTitle}>{"Email Count"}</div>
      </div>
    );
  };

  const renderPieChart = () => {
    return (
      <div className={styles.pieChart}>
        <PieChartWithAngle
          pieChartData={pieChartData}
          colors={colors}
          width={width}
        />
      </div>
    );
  };

  return (
    <div ref={containerRef} className={styles.chartContainer}>
      {renderHeader()}
      {renderPieChart()}
    </div>
  );
};
