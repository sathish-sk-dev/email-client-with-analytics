import React, { FC, useCallback } from "react";
import { Drawer } from "@mui/material";
import { DrawerProps } from "./DrawerProps";
import { SideNavigationBar } from "../side-navigation-bar/SideNavigationBar";
import DrawerHeader from "./components/drawer-header/DrawerHeader";
import DrawerStyled from "./components/material-style/DrawerStyled";
import useMobileMediaQuery from "../responsive/hooks/useMobileMediaQuery";

const MainDrawer: FC<DrawerProps> = ({
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

  return (
    <div
      // @ts-ignore
      style={{ flexShrink: { md: 0 }, zIndex: 1300 }}
    >
      {isMobile ? (
        <Drawer
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
        </Drawer>
      ) : (
        <DrawerStyled variant="permanent" open={isOpen}>
          {renderContent()}
        </DrawerStyled>
      )}
    </div>
  );
};

export default MainDrawer;
