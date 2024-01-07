import React, { FC, useMemo, useRef } from "react";
import { MailDistributionProps } from "../../types/MailDistributionProps";
import { StackedBarChart } from "../../../../components/stacked-bar-chart/StackedBarChart";
import styles from "./MailDistribution.module.scss";
import useContainerWidth from "../../../../custom-hooks/use-container-width/useContainerWidth";

export const MailDistribution: FC<MailDistributionProps> = ({
  bars,
  dataKey,
  colors,
}) => {
  const containerRef = useRef(null);

  const width = useContainerWidth({ ref: containerRef });

  const renderHeader = () => {
    return (
      <div className={styles.chartHeader}>
        <div className={styles.chartTitle}>{"Email Distribution"}</div>
      </div>
    );
  };

  const renderBarChart = () => {
    return (
      <div className={styles.barChart}>
        <StackedBarChart
          dataKey={dataKey}
          bars={bars}
          colors={colors}
          width={width}
        />
      </div>
    );
  };

  return (
    <div ref={containerRef} className={styles.chartContainer}>
      {renderHeader()}
      {renderBarChart()}
    </div>
  );
};
