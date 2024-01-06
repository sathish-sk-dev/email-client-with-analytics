import React, { FC, useCallback } from "react";
import { Drawer as MaterialDrawer } from "@mui/material";
import { DrawerProps } from "./DrawerProps";
import { SideNavigationBar } from "../side-navigation-bar/SideNavigationBar";
import DrawerHeader from "./components/drawer-header/DrawerHeader";
import useMobileMediaQuery from "../responsive/hooks/useMobileMediaQuery";
import DrawerStyled from "./components/material-style/DrawerStyled";
import styles from "./Drawer.module.scss";

const Drawer: FC<DrawerProps> = ({
  isOpen,
  toggleDrawer,
  navBarItems,
  selectedViewType,
  onSelectItem,
}) => {
  const isMobile = useMobileMediaQuery();

  const drawerContent = useCallback(
    () => (
      <SideNavigationBar
        items={navBarItems}
        onSelectItem={onSelectItem}
        selectedViewType={selectedViewType}
      />
    ),
    [navBarItems, onSelectItem, selectedViewType],
  );

  const drawerHeader = useCallback(
    () => <DrawerHeader isOpen={isOpen} />,
    [isOpen],
  );

  const renderContent = useCallback(
    () => (
      <>
        {drawerHeader()}
        {drawerContent()}
      </>
    ),
    [drawerContent, drawerHeader],
  );

  const renderMobileDrawer = useCallback(() => {
    return (
      <MaterialDrawer
        variant="temporary"
        open={isOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
            borderRight: `1px solid var(--ternary-border-color)`,
            backgroundImage: "none",
            boxShadow: "inherit",
          },
        }}
      >
        {isOpen && renderContent()}
      </MaterialDrawer>
    );
  }, [isOpen, renderContent, toggleDrawer]);

  const renderWebDrawer = useCallback(
    () => (
      <DrawerStyled variant="permanent" open={isOpen}>
        {renderContent()}
      </DrawerStyled>
    ),
    [isOpen, renderContent],
  );

  return (
    <div className={styles.container}>
      {isMobile ? renderMobileDrawer() : renderWebDrawer()}
    </div>
  );
};

export default Drawer;
