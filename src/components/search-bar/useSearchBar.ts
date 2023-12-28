import React, { ChangeEvent } from "react";
import { UseSearchBarProps } from "./types/UseSearchBarProps";
import { UseSearchBarHooks } from "./types/UseSearchBarHooks";

export const useSearchBar = ({
  inputRef,
  searchText,
  onChange,
  onSearch,
}: UseSearchBarProps): UseSearchBarHooks => {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  const onClear = () => {
    onChange("");
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
    onClear,
    onKeyDown,
  };
};
