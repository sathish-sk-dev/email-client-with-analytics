import styles from "./AppBar.module.scss";
import { FC, useCallback } from "react";
import { AppBarProps } from "./AppBarProps";
import { Icon } from "../icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import cx from "classnames";
import { SearchBar } from "../search-bar/SearchBar";
import useMobileMediaQuery from "../responsive/hooks/useMobileMediaQuery";
import Button from "../button/Button";

const AppBar: FC<AppBarProps> = ({
  isOpen,
  toggleDrawer,
  onChangeSearch,
  onSearch,
  onClearSearch,
  searchText,
  onClickCompose,
}) => {
  const isMobile = useMobileMediaQuery();

  const renderIcon = useCallback(() => {
    return (
      <Icon
        iconType={IconType.BREADCRUMB}
        onClick={toggleDrawer}
        containerClass={styles.icon}
      />
    );
  }, [toggleDrawer]);

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
        <Button
          title={"New Mail"}
          onClick={onClickCompose}
          containerClass={styles.composeButton}
          canShowIcon={true}
          iconType={IconType.PEN}
        />
      );
    }
  }, [isMobile, onClickCompose]);

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
