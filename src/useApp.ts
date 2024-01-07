import { useAppDispatch, useAppSelector } from "./redux-toolkit/hooks/hooks";
import { UseAppHooks } from "./types/UseAppHooks";
import { useEffect, useMemo, useCallback } from "react";
import { fetchUserDetails } from "./api";
import { setUser, toggleDrawer } from "./redux-toolkit/slices/appSlice";
import { ViewType } from "./enums/ViewType";
import { fetchMailList } from "./features/mail-list/api";
import { setMailList } from "./redux-toolkit/slices/mailListSlice";
import useMobileMediaQuery from "./components/responsive/hooks/useMobileMediaQuery";

export const useApp = (): UseAppHooks => {
  const { isLoading, isOpenComposeView, selectedViewType } = useAppSelector(
    (state) => state.appState,
  );

  const { selectedMailItem } = useAppSelector((state) => state.mailListState);

  const dispatch = useAppDispatch();

  const isMobile = useMobileMediaQuery();

  const fetchMailListCallback = useCallback(async () => {
    const list = await fetchMailList();
    dispatch(setMailList({ selectedViewType: ViewType.INBOX, mailList: list }));
  }, [dispatch]);

  useEffect(() => {
    if (isMobile) {
      dispatch(toggleDrawer(false));
    }
  }, [isMobile]);

  useEffect(() => {
    fetchMailListCallback();
  }, [fetchMailListCallback]);

  const fetchUserDetailsCallback = useCallback(async () => {
    const response = await fetchUserDetails();
    dispatch(setUser(response));
  }, [dispatch]);

  useEffect(() => {
    fetchUserDetailsCallback();
  }, [fetchUserDetailsCallback]);

  const canShowMailDetailsView = useMemo(
    () => selectedMailItem !== null,
    [selectedMailItem],
  );

  const canShowAnalytics = useMemo(
    () => selectedViewType === ViewType.ANALYTICS,
    [selectedViewType],
  );

  return {
    isLoading,
    isOpenComposeView,
    canShowMailDetailsView,
    canShowAnalytics,
    selectedViewType,
  };
};
