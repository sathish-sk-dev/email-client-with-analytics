import { INavigationBarItem } from "../interfaces/INavigationBarItem";
import { NavigationBarItemProps } from "../../../types/NavigationBarItemProps";

export type UseLayoutHooks = {
  navBarItems: INavigationBarItem[];
  toggleDrawer: () => void;
  isOpenDrawer: boolean;
} & NavigationBarItemProps;
