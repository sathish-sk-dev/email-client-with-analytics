import styles from "./DashboardItem.module.scss";
import React, { FC } from "react";
import { DashboardItemProps } from "../../types/DashboardItemProps";
import { Icon } from "../../../../components/icon/Icon";
import useDashboardItem from "./useDashboardItem";

export const DashboardItem: FC<DashboardItemProps> = ({ item }) => {
  const { title, count } = item;
  const { percentageChange, countChange, prefixInfo, chipColor, iconType } =
    useDashboardItem({
      item,
    });

  const renderChip = () => (
    <div className={styles.chip} style={{ backgroundColor: chipColor }}>
      <Icon iconType={iconType} containerClass={styles.icon} />
      <div className={styles.count}> {`${percentageChange}%`} </div>
    </div>
  );

  const renderInfo = () => (
    <div className={styles.dashboardItemInfo}>
      {prefixInfo}
      <span className={styles.color}> {countChange} </span> {"this year"}
    </div>
  );

  return (
    <div className={styles.dashboardItem}>
      <div className={styles.dashboardItemTitle}> {title} </div>
      <div className={styles.countContainer}>
        <div className={styles.dashboardItemCount}> {count} </div>
        {renderChip()}
      </div>
      {renderInfo()}
    </div>
  );
};
