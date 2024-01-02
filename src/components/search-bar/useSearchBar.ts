import React, { ChangeEvent } from "react";
import { UseSearchBarProps } from "./types/UseSearchBarProps";
import { UseSearchBarHooks } from "./types/UseSearchBarHooks";

export const useSearchBar = ({
  inputRef,
  searchText,
  onChange,
  onSearch,
  onClear,
}: UseSearchBarProps): UseSearchBarHooks => {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  const onClearSearch = () => {
    onChange("");
    onClear();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const shouldShowCloseIcon = searchText.length > 0;

  return {
    shouldShowCloseIcon,
    onChangeInput,
    onClearSearch,
    onKeyDown,
  };
};
