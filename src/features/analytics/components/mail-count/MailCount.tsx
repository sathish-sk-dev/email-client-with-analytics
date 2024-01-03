import styles from "./MailCount.module.scss";
import React, { FC } from "react";
import { MailCountProps } from "../../types/MailCountProps";
import { PieChartWithAngle } from "../../../../components/pie-chart-with-angle/PieChartWithAngle";

export const MailCount: FC<MailCountProps> = ({ colors, pieChartData }) => {
  const renderTitle = () => {
    return <div className={styles.title}> {"Email Count"} </div>;
  };

  const renderPieChart = () => {
    return <PieChartWithAngle pieChartData={pieChartData} colors={colors} />;
  };

  return (
    <div className={styles.container}>
      {renderTitle()}
      {renderPieChart()}
    </div>
  );
};
