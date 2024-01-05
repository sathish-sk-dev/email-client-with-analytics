import { useCallback, useEffect } from "react";
import { getNavBarItems } from "./utils/LayoutUtils";
import { UseLayoutHooks } from "./types/UseLayoutHooks";
import { INavigationBarItem } from "./interfaces/INavigationBarItem";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux-toolkit/hooks/hooks";
import {
  setSelectedViewType,
  toggleDrawer,
} from "../../redux-toolkit/slices/appSlice";
import { IMailListState } from "../../redux-toolkit/interfaces/IMailListState";
import { setMailList } from "../../redux-toolkit/slices/mailListSlice";

export const useLayout = (): UseLayoutHooks => {
  const { selectedViewType, isOpenDrawer } = useAppSelector(
    (state) => state.appState,
  );
  const { mailList }: IMailListState = useAppSelector(
    (state) => state.mailListState,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMailList({ selectedViewType, mailList }));
  }, [dispatch, mailList, selectedViewType]);

  const fetchNavigationBarItems = useCallback(() => {
    return getNavBarItems();
  }, []);

  const onSelectItem = (item: INavigationBarItem) => {
    dispatch(setSelectedViewType(item.type));
  };

  const onToggleDrawer = () => {
    dispatch(toggleDrawer(!isOpenDrawer));
  };

  return {
    navBarItems: fetchNavigationBarItems(),
    selectedViewType,
    onSelectItem,
    toggleDrawer: onToggleDrawer,
    isOpenDrawer,
  };
};
