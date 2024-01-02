import React, { FC, useCallback } from "react";
import { SideNavigationBar } from "../side-navigation-bar/SideNavigationBar";
import { CompositionProps } from "../../types/CompositionProps";
import styles from "./Layout.module.scss";
import { getNavBarItems } from "./utils/LayoutUtils";

export const Layout: FC<CompositionProps> = ({ children }) => {
  const navBarItems = useCallback(() => {
    return getNavBarItems();
  }, []);

  const renderSideNavigationBar = () => {
    const items = navBarItems();
    return <SideNavigationBar items={items} />;
  };

  return (
    <div className={styles.container}>
      {renderSideNavigationBar()}
      {children}
    </div>
  );
};
