import { IMenuItem } from "../interfaces/IMenuItem";

export type MenuItemProps = {
  item: IMenuItem;
  onClick: (item: IMenuItem) => void;
};
