import { Icon } from "../icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import styles from "./SearchBar.module.scss";
import { FC } from "react";
import { SearchBarProps } from "./types/SearchBarProps";
import { useSearchBar } from "./useSearchBar";

export const SearchBar: FC<SearchBarProps> = ({
  searchText,
  onChange,
  placeholderText,
  inputRef,
  onSearch,
}) => {
  const { shouldShowCloseIcon, onChangeInput, onClear, onKeyDown } =
    useSearchBar({ inputRef, searchText, onChange, onSearch });

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
      onClick={onClear}
      containerClass={styles.icon}
    />
  );

  return (
    <div className={styles.container}>
      {renderSearchIcon()}
      {renderInputIcon()}
      {shouldShowCloseIcon && renderClearIcon()}
    </div>
  );
};
