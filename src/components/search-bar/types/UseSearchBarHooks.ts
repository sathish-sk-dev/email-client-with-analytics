import { ChangeEvent, KeyboardEvent } from "react";

export type UseSearchBarHooks = {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  shouldShowCloseIcon: boolean;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
};
