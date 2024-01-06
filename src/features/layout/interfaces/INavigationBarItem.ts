import { FC, SVGProps } from "react";
import { ViewType } from "../../../enums/ViewType";

export interface INavigationBarItem {
  outlineIcon: FC<SVGProps<SVGSVGElement>>;
  solidIcon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  iconContainerClass: string,
  selectedIconContainerClass: string,
  type: ViewType;
}
