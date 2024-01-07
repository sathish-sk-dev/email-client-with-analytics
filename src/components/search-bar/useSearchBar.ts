import { ChangeEvent, useCallback, useMemo } from "react";
import { UseSearchBarProps } from "./types/UseSearchBarProps";
import { UseSearchBarHooks } from "./types/UseSearchBarHooks";
import { debounce } from "lodash";

export const useSearchBar = ({
  inputRef,
  onSearch,
  onClear,
}: UseSearchBarProps): UseSearchBarHooks => {
  const onChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      onSearch(value);
    },
    [onSearch],
  );

  const onChangeDebounce = useMemo(() => {
    return debounce(onChangeInput, 300);
  }, [onChangeInput]);

  const onClearSearch = () => {
    onClear();
  };

  return {
    onChangeInput: onChangeDebounce,
    onClearSearch,
  };
};
