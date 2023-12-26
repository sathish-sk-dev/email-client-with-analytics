import { ReactNode } from "react";

export interface ISideNavigationBarItem {
  icon: ReactNode;
  title: string;
  onClick: () => void;
}
