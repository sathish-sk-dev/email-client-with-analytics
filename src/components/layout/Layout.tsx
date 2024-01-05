import { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../app-bar/AppBar";
import Drawer from "../drawer/Drawer";
import styles from "./Layout.module.scss";
import { useLayout } from "./useLayout";
import useMobileMediaQuery from "../responsive/hooks/useMobileMediaQuery";

const Layout = () => {
  const {
    navBarItems,
    onSelectItem,
    selectedViewType,
    toggleDrawer,
    isOpenDrawer,
  } = useLayout();
  const isMobile = useMobileMediaQuery();

  useEffect(() => {
    if (isMobile && isOpenDrawer) {
      toggleDrawer();
    }
  }, [isMobile, isOpenDrawer, toggleDrawer]);

  const renderDrawer = useCallback(() => {
    return (
      <Drawer
        navBarItems={navBarItems}
        onSelectItem={onSelectItem}
        selectedViewType={selectedViewType}
        isOpen={isOpenDrawer}
        toggleDrawer={toggleDrawer}
      />
    );
  }, [isOpenDrawer, navBarItems, onSelectItem, selectedViewType, toggleDrawer]);

  return (
    <div className={styles.container}>
      <AppBar isOpen={isOpenDrawer} toggleDrawer={toggleDrawer} />
      {renderDrawer()}
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
