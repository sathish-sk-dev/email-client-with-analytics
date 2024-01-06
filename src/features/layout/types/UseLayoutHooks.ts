import { INavigationBarItem } from "../interfaces/INavigationBarItem";
import { NavigationBarItemProps } from "../../../types/NavigationBarItemProps";

export type UseLayoutHooks = {
  navBarItems: INavigationBarItem[];
  toggleDrawer: () => void;
  isOpenDrawer: boolean;
  searchText: string;
  onChangeSearch: (text: string) => void;
  onSearch: () => void;
  onClearSearch: () => void;
  onClickCompose: () => void;
} & NavigationBarItemProps;
