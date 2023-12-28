import { FC } from "react";
import { SideNavigationBarItemProps } from "./types/SideNavigationBarItemProps";
import { Icon } from "../icon/Icon";
import cx from "classnames";
import styles from "./SideNavigationBar.module.scss";

export const SideNavigationBarItem: FC<SideNavigationBarItemProps> = ({
  item,
}) => {
  const {
    outlineIcon,
    solidIcon,
    title,
    containerClass,
    selectedContainerClass,
  } = item;

  const isSelected = false;

  const iconType = isSelected ? solidIcon : outlineIcon;
  const selectedClassName = isSelected ? selectedContainerClass : "";

  return (
    <Icon
      iconType={iconType}
      containerClass={cx(styles.icon, containerClass, selectedClassName)}
    />
  );
};
