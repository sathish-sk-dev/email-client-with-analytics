import { Icon } from "../icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import styles from "./SearchBar.module.scss";
import { FC } from "react";
import { SearchBarProps } from "./types/SearchBarProps";
import { useSearchBar } from "./useSearchBar";
import cx from "classnames";

export const SearchBar: FC<SearchBarProps> = ({
  searchText,
  onChange,
  placeholderText,
  inputRef,
  onSearch,
  onClear,
  containerClass = "",
}) => {
  const { shouldShowCloseIcon, onChangeInput, onClearSearch, onKeyDown } =
    useSearchBar({ inputRef, searchText, onChange, onSearch, onClear });

  const renderSearchIcon = () => (
    <Icon
      iconType={IconType.SEARCH}
      onClick={onSearch}
      containerClass={styles.icon}
    />
  );

  const renderInputIcon = () => (
    <input
      ref={inputRef}
      type="text"
      onChange={onChangeInput}
      placeholder={placeholderText}
      value={searchText}
      onKeyDown={onKeyDown}
      className={styles.input}
    />
  );

  const renderClearIcon = () => (
    <Icon
      iconType={IconType.CLOSE}
      onClick={onClearSearch}
      containerClass={cx(styles.icon, styles.closeIcon)}
    />
  );

  return (
    <div className={cx(styles.container, containerClass)}>
      {renderSearchIcon()}
      {renderInputIcon()}
      {shouldShowCloseIcon && renderClearIcon()}
    </div>
  );
};
