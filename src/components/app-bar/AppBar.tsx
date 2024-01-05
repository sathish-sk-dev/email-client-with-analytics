import styles from "./AppBar.module.scss";
import { FC, useCallback } from "react";
import { AppBarProps } from "./AppBarProps";
import { Icon } from "../icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import cx from "classnames";
import { SearchBar } from "../search-bar/SearchBar";

const AppBar: FC<AppBarProps> = ({ isOpen, toggleDrawer }) => {
  const getIconType = useCallback(() => {
    return isOpen ? IconType.ARROW_LEFT : IconType.BREADCRUMB;
  }, [isOpen]);

  const renderIcon = useCallback(() => {
    const iconType = getIconType();
    return (
      <Icon
        iconType={iconType}
        onClick={toggleDrawer}
        containerClass={styles.icon}
      />
    );
  }, [getIconType, toggleDrawer]);

  const renderSearchbar = useCallback(() => {
    return (
      <SearchBar
        onChange={() => {}}
        searchText={""}
        placeholderText={"Search in Mail"}
        onSearch={() => {}}
        onClear={() => {}}
      />
    );
  }, []);

  const renderComposeButton = useCallback(() => {
    return (
      <button className={styles.composeButton} onClick={() => {}}>
        {"NEW MAIL"}
      </button>
    );
  }, []);

  const openContainerClass = isOpen ? styles.openContainer : "";

  return (
    <div className={cx(styles.container, openContainerClass)}>
      {renderIcon()}
      {renderSearchbar()}
      {renderComposeButton()}
    </div>
  );
};

export default AppBar;
