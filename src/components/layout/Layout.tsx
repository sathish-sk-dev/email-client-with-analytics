import React, { FC } from "react";
import { SideNavigationBar } from "../side-navigation-bar/SideNavigationBar";
import { CompositionProps } from "../../types/CompositionProps";
import styles from "./Layout.module.scss";
import { useLayout } from "./useLayout";

export const Layout: FC<CompositionProps> = ({ children }) => {
  const { navBarItems, selectedViewType, onSelectItem } = useLayout();

  const renderSideNavigationBar = () => {
    return (
      <SideNavigationBar
        items={navBarItems}
        selectedViewType={selectedViewType}
        onSelectItem={onSelectItem}
      />
    );
  };

  return (
    <div className={styles.container}>
      {renderSideNavigationBar()}
      {children}
    </div>
  );
};
