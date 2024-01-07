import { RefObject } from "react";

export type SearchBarProps = {
  inputRef?: RefObject<HTMLInputElement>;
  placeholderText: string;
  onSearch: (value: string) => void;
  onClear: () => void;
  containerClass?: string;
};
