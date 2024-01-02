import { ChangeEvent, KeyboardEvent } from "react";

export type UseSearchBarHooks = {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
  shouldShowCloseIcon: boolean;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
};
