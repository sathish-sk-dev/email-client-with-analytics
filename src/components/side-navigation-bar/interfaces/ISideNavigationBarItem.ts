import { FC, SVGProps } from "react";

export interface ISideNavigationBarItem {
  outlineIcon: FC<SVGProps<SVGSVGElement>>;
  solidIcon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  containerClass: string;
  selectedContainerClass: string;
}
