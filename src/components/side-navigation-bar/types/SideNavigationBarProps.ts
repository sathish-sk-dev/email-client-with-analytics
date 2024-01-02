import { INavigationBarItem } from "../../layout/interfaces/INavigationBarItem";
import { NavigationBarItemProps } from "../../../types/NavigationBarItemProps";

export type SideNavigationBarProps = {
  items: INavigationBarItem[];
} & NavigationBarItemProps;
