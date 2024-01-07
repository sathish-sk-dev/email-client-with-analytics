import { RefObject } from "react";

export type UseSearchBarProps = {
  onSearch: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement>;
  onClear: () => void;
};
