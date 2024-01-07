import { ChangeEvent } from "react";

export type UseSearchBarHooks = {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
};
