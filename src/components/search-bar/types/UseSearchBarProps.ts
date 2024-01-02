import { RefObject } from "react";

export type UseSearchBarProps = {
  onChange: (searchText: string) => void;
  searchText: string;
  onSearch: () => void;
  inputRef?: RefObject<HTMLInputElement>;
  onClear: () => void;
};
