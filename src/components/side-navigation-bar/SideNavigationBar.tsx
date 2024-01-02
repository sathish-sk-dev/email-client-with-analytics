import React from "react";
import { SideNavigationBarProps } from "./types/SideNavigationBarProps";
import styles from "./SideNavigationBar.module.scss";
import { SideNavigationBarItem } from "./SideNavigationBarItem";

export const SideNavigationBar: React.FC<SideNavigationBarProps> = ({
  items,
  selectedViewType,
  onSelectItem,
}) => {
  const renderTopLogo = () => <div className={styles.topLogo}> M </div>;

  const renderNavBarItems = () =>
    items.map((item) => (
      <SideNavigationBarItem
        key={item.type}
        item={item}
        selectedViewType={selectedViewType}
        onSelectItem={onSelectItem}
      />
    ));

  return (
    <div className={styles.container}>
      {renderTopLogo()}
      <div className={styles.sectionsContainer}>{renderNavBarItems()}</div>
    </div>
  );
};
