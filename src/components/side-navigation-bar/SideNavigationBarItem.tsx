import { FC } from "react";
import { SideNavigationBarItemProps } from "./types/SideNavigationBarItemProps";
import { Icon } from "../icon/Icon";
import cx from "classnames";
import styles from "./SideNavigationBar.module.scss";

export const SideNavigationBarItem: FC<SideNavigationBarItemProps> = ({
  item,
  selectedViewType,
  onSelectItem,
}) => {
  const {
    outlineIcon,
    solidIcon,
    title,
    containerClass,
    selectedContainerClass,
    type,
  } = item;

  const isSelected = selectedViewType === type;

  const iconType = isSelected ? solidIcon : outlineIcon;
  const selectedClassName = isSelected
    ? cx(styles.selectedContainer, selectedContainerClass)
    : "";
  const containerClassName = cx(styles.icon, containerClass, selectedClassName);

  const onClick = () => {
    onSelectItem(item);
  };

  return (
    <Icon
      data-testid={`side-navigation-bar-${type}`}
      iconType={iconType}
      containerClass={containerClassName}
      onClick={onClick}
    />
  );
};
