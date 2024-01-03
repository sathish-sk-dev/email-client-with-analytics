import React, { FC } from "react";
import { MailDistributionProps } from "../../types/MailDistributionProps";
import { StackedBarChart } from "../../../../components/stacked-bar-chart/StackedBarChart";
import styles from "./MailDistribution.module.scss";

export const MailDistribution: FC<MailDistributionProps> = ({
  bars,
  dataKey,
  colors,
}) => {
  const renderTitle = () => {
    return <div className={styles.title}> {"Email Distribution"} </div>;
  };

  const renderBarChart = () => {
    return <StackedBarChart dataKey={dataKey} bars={bars} colors={colors} />;
  };

  return (
    <div className={styles.container}>
      {renderTitle()}
      {renderBarChart()}
    </div>
  );
};
