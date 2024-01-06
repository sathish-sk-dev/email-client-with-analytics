import { useCallback } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../../components/app-bar/AppBar";
import Drawer from "../../components/drawer/Drawer";
import styles from "./Layout.module.scss";
import { useLayout } from "./useLayout";

const Layout = () => {
  const {
    navBarItems,
    onSelectItem,
    selectedViewType,
    toggleDrawer,
    isOpenDrawer,
    onChangeSearch,
    onSearch,
    onClearSearch,
    searchText,
  } = useLayout();

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
      <AppBar
        isOpen={isOpenDrawer}
        toggleDrawer={toggleDrawer}
        onChangeSearch={onChangeSearch}
        onSearch={onSearch}
        onClearSearch={onClearSearch}
        searchText={searchText}
      />
      {renderDrawer()}
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
