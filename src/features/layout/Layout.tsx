import { FC, useCallback } from "react";
import AppBar from "../../components/app-bar/AppBar";
import Drawer from "../../components/drawer/Drawer";
import styles from "./Layout.module.scss";
import { useLayout } from "./useLayout";
import { CompositionProps } from "../../types/CompositionProps";
import useMobileMediaQuery from "../../components/responsive/hooks/useMobileMediaQuery";
import FloatingActionButton from "../../components/floating-action-button/FloatingActionButton";
import { IconType } from "../../assets/svg/types/IconType";

const Layout: FC<CompositionProps> = ({ children }) => {
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
  } = useLayout();
  const isMobile = useMobileMediaQuery();

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
    if (isMobile) {
      return (
        <FloatingActionButton
          iconType={IconType.PEN}
          onClick={onClickCompose}
        />
      );
    }
  }, [isMobile, onClickCompose]);

  return (
    <div className={styles.container}>
      <AppBar
        isOpen={isOpenDrawer}
        toggleDrawer={toggleDrawer}
        onChangeSearch={onChangeSearch}
        onSearch={onSearch}
        onClearSearch={onClearSearch}
        searchText={searchText}
        onClickCompose={onClickCompose}
      />
      {renderDrawer()}
      <div className={styles.outletContainer}>{children}</div>
      {renderMobileComposeIcon()}
    </div>
  );
};

export default Layout;
