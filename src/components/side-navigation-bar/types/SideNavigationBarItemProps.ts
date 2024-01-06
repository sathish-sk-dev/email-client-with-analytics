import { INavigationBarItem } from "../../../features/layout/interfaces/INavigationBarItem";
import { NavigationBarItemProps } from "../../../types/NavigationBarItemProps";

export type SideNavigationBarItemProps = {
  item: INavigationBarItem;
} & NavigationBarItemProps;
