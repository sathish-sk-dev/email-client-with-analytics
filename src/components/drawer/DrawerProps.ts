import { ViewType } from "../../enums/ViewType";
import { INavigationBarItem } from "../../features/layout/interfaces/INavigationBarItem";

export type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
  selectedViewType: ViewType;
  onSelectItem: (item: INavigationBarItem) => void;
  navBarItems: INavigationBarItem[];
};
