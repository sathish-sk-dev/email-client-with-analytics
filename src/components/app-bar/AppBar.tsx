import styles from "./AppBar.module.scss";
import { FC, useCallback } from "react";
import { AppBarProps } from "./AppBarProps";
import { Icon } from "../icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import cx from "classnames";
import { SearchBar } from "../search-bar/SearchBar";
import useMobileMediaQuery from "../responsive/hooks/useMobileMediaQuery";

const AppBar: FC<AppBarProps> = ({
  isOpen,
  toggleDrawer,
  onChangeSearch,
  onSearch,
  onClearSearch,
  searchText,
}) => {
  const isMobile = useMobileMediaQuery();

  const getIconType = useCallback(() => {
    return isOpen && !isMobile ? IconType.ARROW_LEFT : IconType.BREADCRUMB;
  }, [isOpen, isMobile]);

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

  const renderSearchbar = useCallback(
    () => (
      <SearchBar
        onChange={onChangeSearch}
        searchText={searchText}
        placeholderText={"Search mail"}
        onSearch={onSearch}
        onClear={onClearSearch}
        containerClass={styles.searchBar}
      />
    ),
    [onChangeSearch, onClearSearch, onSearch, searchText],
  );

  const renderComposeButton = useCallback(() => {
    if (!isMobile) {
      return (
        <button className={styles.composeButton} onClick={() => {}}>
          {"NEW MAIL"}
        </button>
      );
    }
  }, [isMobile]);

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
