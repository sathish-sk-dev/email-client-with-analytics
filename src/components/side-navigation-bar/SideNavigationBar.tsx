import React from "react";
import { SideNavigationBarProps } from "./types/SideNavigationBarProps";
import styles from "./SideNavigationBar.module.scss";
import { SideNavigationBarItem } from "./SideNavigationBarItem";

export const SideNavigationBar: React.FC<SideNavigationBarProps> = ({
  items,
}) => {
  const renderTopLogo = () => <div className={styles.topLogo}> M </div>;

  const renderNavBarItems = () =>
    items.map((item) => <SideNavigationBarItem item={item} />);

  return (
    <div className={styles.container}>
      {renderTopLogo()}
      <div className={styles.sectionsContainer}>{renderNavBarItems()}</div>
    </div>
  );
};
