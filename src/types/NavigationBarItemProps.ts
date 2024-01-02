import { ViewType } from "../enums/ViewType";
import { INavigationBarItem } from "../components/layout/interfaces/INavigationBarItem";

export type NavigationBarItemProps = {
  selectedViewType: ViewType;
  onSelectItem: (item: INavigationBarItem) => void;
};
