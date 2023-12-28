import React from "react";
import { SideNavigationBarProps } from "./types/SideNavigationBarProps";
import styles from "./SideNavigationBar.module.scss";
import { getNavBarItems } from "./utils/SideNavigationBarUtils";
import { SideNavigationBarItem } from "./SideNavigationBarItem";

export const SideNavigationBar: React.FC<SideNavigationBarProps> = ({
  items,
}) => {
  const renderTopLogo = () => {
    return <div className={styles.topLogo}> M </div>;
  };

  const renderNavBarItems = () => {
    const navBarItems = getNavBarItems();
    return navBarItems.map((item) => <SideNavigationBarItem item={item} />);
  };

  return (
    <div className={styles.container}>
      {renderTopLogo()}
      <div className={styles.sectionsContainer}>{renderNavBarItems()}</div>
    </div>
  );
};
