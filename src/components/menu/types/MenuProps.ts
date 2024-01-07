import { IMenuItem } from "../interfaces/IMenuItem";

export type MenuProps = {
  isOpen: boolean;
  menuItems: IMenuItem[];
  onSelect: (menuItem: IMenuItem) => void;
};
