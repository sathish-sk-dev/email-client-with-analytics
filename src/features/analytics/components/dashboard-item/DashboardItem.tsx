import styles from "./DashboardItem.module.scss";
import { FC } from "react";
import { DashboardItemProps } from "../../types/DashboardItemProps";
import { Icon } from "../../../../components/icon/Icon";

export const DashboardItem: FC<DashboardItemProps> = ({ item }) => {
  const { icon, title, count } = item;

  const renderTitle = () => <div className={styles.title}> {title} </div>;

  const renderIcon = () => (
    <Icon iconType={icon} containerClass={styles.icon} />
  );

  const renderCount = () => <div className={styles.count}> {count} </div>;

  return (
    <div className={styles.container}>
      {renderIcon()}
      <div className={styles.content}>
        {renderTitle()}
        {renderCount()}
      </div>
    </div>
  );
};
