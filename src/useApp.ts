import { useAppDispatch, useAppSelector } from "./redux-toolkit/hooks/hooks";
import { UseAppHooks } from "./types/UseAppHooks";
import { useEffect } from "react";
import { fetchUserDetails } from "./api";
import { setUser } from "./redux-toolkit/slices/appSlice";

export const useApp = (): UseAppHooks => {
  const { isLoading, isOpenComposeView, selectedViewType } = useAppSelector(
    (state) => state.appState,
  );

  const { selectedMailItem } = useAppSelector((state) => state.mailListState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchUserDetails().then((response) => {
      dispatch(setUser(response));
    });
  }, [dispatch]);

  const canShowModuleDetailsView = selectedMailItem !== null;

  return {
    isLoading,
    isOpenComposeView,
    canShowModuleDetailsView,
    selectedViewType,
  };
};
