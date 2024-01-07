import { INavigationBarItem } from "../interfaces/INavigationBarItem";
import { NavigationBarItemProps } from "../../../types/NavigationBarItemProps";

export type UseLayoutHooks = {
  navBarItems: INavigationBarItem[];
  toggleDrawer: () => void;
  isOpenDrawer: boolean;
  onSearch: (value: string) => void;
  onClearSearch: () => void;
  onClickCompose: () => void;
  canShowMobileCompose: boolean;
} & NavigationBarItemProps;
