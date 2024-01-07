import { Dispatch, LegacyRef, SetStateAction } from "react";

export type UseOutsideClickHooks = {
  ref: LegacyRef<HTMLElement>;
  isClickOutside: boolean;
  setIsClickOutside: Dispatch<SetStateAction<boolean>>;
};
