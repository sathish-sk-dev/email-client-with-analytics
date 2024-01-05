import React, { useCallback } from "react";
import { SideNavigationBarProps } from "./types/SideNavigationBarProps";
import styles from "./SideNavigationBar.module.scss";
import { SideNavigationBarItem } from "./components/side-navigation-bar-item/SideNavigationBarItem";
import { Icon } from "../icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";

export const SideNavigationBar: React.FC<SideNavigationBarProps> = ({
  items,
  selectedViewType,
  onSelectItem,
}) => {
  const renderTopLogo = () => (
    <div className={styles.topLogo}>
      <Icon iconType={IconType.LOGO} containerClass={styles.topLogoIcon} />
      <div className={styles.title}> {"Raven"} </div>
    </div>
  );

  const renderNavBarItems = useCallback(
    () =>
      items.map((item) => (
        <SideNavigationBarItem
          key={item.type}
          item={item}
          selectedViewType={selectedViewType}
          onSelectItem={onSelectItem}
        />
      )),
    [items, onSelectItem, selectedViewType],
  );

  return (
    <div className={styles.container}>
      {renderTopLogo()}
      <div className={styles.sectionsContainer}>{renderNavBarItems()}</div>
    </div>
  );
};
