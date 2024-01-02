import { FC, SVGProps } from "react";
import { ViewType } from "../../../enums/ViewType";

export interface INavigationBarItem {
  outlineIcon: FC<SVGProps<SVGSVGElement>>;
  solidIcon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  containerClass: string;
  selectedContainerClass: string;
  type: ViewType;
}
