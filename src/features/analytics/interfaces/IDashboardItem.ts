import { FC, SVGProps } from "react";

export interface IDashboardItem {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  count: number;
  prevCount: number;
}
