import { Icon } from "../icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import styles from "./SearchBar.module.scss";
import { FC } from "react";
import { SearchBarProps } from "./types/SearchBarProps";
import { useSearchBar } from "./useSearchBar";
import cx from "classnames";

export const SearchBar: FC<SearchBarProps> = ({
  placeholderText,
  inputRef,
  onSearch,
  onClear,
  containerClass = "",
}) => {
  const { onChangeInput, onClearSearch } = useSearchBar({
    inputRef,
    onSearch,
    onClear,
  });

  const renderSearchIcon = () => (
    <Icon iconType={IconType.SEARCH} containerClass={styles.icon} />
  );

  const renderInputIcon = () => (
    <input
      ref={inputRef}
      type="text"
      onChange={onChangeInput}
      placeholder={placeholderText}
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
    </div>
  );
};
