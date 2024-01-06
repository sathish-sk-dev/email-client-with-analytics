import { ViewType } from "../enums/ViewType";
import { INavigationBarItem } from "../features/layout/interfaces/INavigationBarItem";

export type NavigationBarItemProps = {
  selectedViewType: ViewType;
  onSelectItem: (item: INavigationBarItem) => void;
};
