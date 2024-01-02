import { useAppDispatch, useAppSelector } from "./redux-toolkit/hooks/hooks";
import { UseAppHooks } from "./types/UseAppHooks";

export const useApp = (): UseAppHooks => {
  const { isLoading, isOpenComposeView } = useAppSelector(
    (state) => state.appState,
  );

  return {
    isLoading,
    isOpenComposeView,
  };
};
