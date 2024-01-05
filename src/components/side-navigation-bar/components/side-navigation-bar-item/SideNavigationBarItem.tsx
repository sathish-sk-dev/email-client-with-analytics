import { FC, useMemo } from "react";
import { SideNavigationBarItemProps } from "../../types/SideNavigationBarItemProps";
import { Icon } from "../../../icon/Icon";
import cx from "classnames";
import styles from "./SideNavigationBarItem.module.scss";

export const SideNavigationBarItem: FC<SideNavigationBarItemProps> = ({
  item,
  selectedViewType,
  onSelectItem,
}) => {
  const {
    outlineIcon,
    solidIcon,
    title,
    iconContainerClass,
    selectedIconContainerClass,
    type,
  } = item;

  const isSelected = useMemo(() => {
    return selectedViewType === type;
  }, [selectedViewType, type]);

  const iconType = isSelected ? solidIcon : outlineIcon;

  const onClick = () => {
    onSelectItem(item);
  };

  const selectedIconClassName = isSelected
    ? cx(styles.selectedIcon, selectedIconContainerClass)
    : "";

  const iconContainerClassName = cx(
    styles.icon,
    iconContainerClass,
    selectedIconClassName,
  );

  const selectedContainerClass = isSelected ? styles.selectedContainer : "";

  return (
    <div
      className={cx(styles.container, selectedContainerClass)}
      onClick={onClick}
    >
      <Icon
        data-testid={`side-navigation-bar-${type}`}
        iconType={iconType}
        containerClass={iconContainerClassName}
      />
      <div className={styles.title}> {title} </div>
    </div>
  );
};
