import styles from "./MenuItem.module.scss";
import { MenuItemProps } from "../../types/MenuItemProps";
import { FC } from "react";
import Ripple from "../../../ripple/Ripple";

const MenuItem: FC<MenuItemProps> = ({ item, onClick }) => {
  const { id, title } = item;

  return (
    <div key={id} className={styles.menuItem} onClick={() => onClick(item)}>
      {title}
      <Ripple />
    </div>
  );
};

export default MenuItem;
