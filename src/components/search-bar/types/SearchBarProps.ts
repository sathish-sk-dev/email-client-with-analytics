import { RefObject } from "react";

export type SearchBarProps = {
  onChange: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement>;
  searchText: string;
  placeholderText: string;
  onSearch: () => void;
  onClear: () => void;
};
