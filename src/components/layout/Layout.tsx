import React from "react";
import { SideNavigationBar } from "../side-navigation-bar/SideNavigationBar";
import { CompositionProps } from "../../types/CompositionProps";
import styles from "./Layout.module.scss";

export const Layout: React.FC<CompositionProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <SideNavigationBar items={[]} />
      {children}
    </div>
  );
};
