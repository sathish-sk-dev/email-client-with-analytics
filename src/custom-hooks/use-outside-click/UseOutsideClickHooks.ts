import { Dispatch, RefObject, SetStateAction } from "react";

export type UseOutsideClickHooks = {
  ref: RefObject<HTMLElement>;
  isClickOutside: boolean;
  setIsClickOutside: Dispatch<SetStateAction<boolean>>;
};
