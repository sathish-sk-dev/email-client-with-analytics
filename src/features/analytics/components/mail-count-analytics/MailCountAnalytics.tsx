// @ts-nocheck
import styles from "./MailCountAnalytics.module.scss";
import { Button } from "@mui/material";
import AreaChart from "../../../../components/area-chart/AreaChart";
import React, { useCallback } from "react";
import useMailCountAnalytics from "./useMailCountAnalytics";

const MailCountAnalytics = () => {
  const {
    slot,
    onClickMonth,
    onClickWeek,
    chartData,
    colors,
    weekButtonVariant,
    monthButtonVariant,
  } = useMailCountAnalytics();

  const renderFilters = useCallback(
    () => (
      <div className={styles.buttonList}>
        <Button onClick={onClickWeek} variant={weekButtonVariant}>
          Week
        </Button>
        <Button onClick={onClickMonth} variant={monthButtonVariant}>
          Month
        </Button>
      </div>
    ),
    [monthButtonVariant, onClickMonth, onClickWeek, weekButtonVariant],
  );

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <div className={styles.chartTitle}>{"Overall Analytics"}</div>
        {renderFilters()}
      </div>
      <div className={styles.monthlyBarChart}>
        <AreaChart data={chartData} slot={slot} colors={colors} />
      </div>
    </div>
  );
};

export default MailCountAnalytics;
