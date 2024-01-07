import { FC, useCallback } from "react";
import AppBar from "../../components/app-bar/AppBar";
import Drawer from "../../components/drawer/Drawer";
import styles from "./Layout.module.scss";
import { useLayout } from "./useLayout";
import FloatingActionButton from "../../components/floating-action-button/FloatingActionButton";
import { IconType } from "../../assets/svg/types/IconType";
import { LayoutProps } from "./types/LayoutProps";
import cx from "classnames";

const Layout: FC<LayoutProps> = ({ children, canShowMailDetailsView }) => {
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
    onClickCompose,
    canShowMobileCompose,
  } = useLayout({ canShowMailDetailsView });

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

  const renderMobileComposeIcon = useCallback(() => {
    if (canShowMobileCompose) {
      return (
        <FloatingActionButton
          iconType={IconType.PEN}
          onClick={onClickCompose}
        />
      );
    }
  }, [canShowMobileCompose, onClickCompose]);

  const renderOutletContainer = useCallback(() => {
    const mailDetailsContainer = canShowMailDetailsView
      ? styles.mailDetails
      : "";
    return (
      <div className={cx(styles.outletContainer, mailDetailsContainer)}>
        {children}
      </div>
    );
  }, [canShowMailDetailsView, children]);

  const renderAppBar = useCallback(() => {
    if (!canShowMailDetailsView) {
      return (
        <AppBar
          isOpen={isOpenDrawer}
          toggleDrawer={toggleDrawer}
          onChangeSearch={onChangeSearch}
          onSearch={onSearch}
          onClearSearch={onClearSearch}
          searchText={searchText}
          onClickCompose={onClickCompose}
        />
      );
    }
  }, [
    canShowMailDetailsView,
    isOpenDrawer,
    onChangeSearch,
    onClearSearch,
    onClickCompose,
    onSearch,
    searchText,
    toggleDrawer,
  ]);

  return (
    <div className={styles.container}>
      {renderAppBar()}
      {renderDrawer()}
      {renderOutletContainer()}
      {renderMobileComposeIcon()}
    </div>
  );
};

export default Layout;
