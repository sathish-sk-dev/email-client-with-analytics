import { useCallback, useEffect } from "react";
import { getNavBarItems } from "./utils/LayoutUtils";
import { UseLayoutHooks } from "./types/UseLayoutHooks";
import { INavigationBarItem } from "./interfaces/INavigationBarItem";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux-toolkit/hooks/hooks";
import { setSelectedViewType } from "../../redux-toolkit/slices/appSlice";
import { IMailListState } from "../../redux-toolkit/interfaces/IMailListState";
import { setMailList } from "../../redux-toolkit/slices/mailListSlice";

export const useLayout = (): UseLayoutHooks => {
  const { selectedViewType } = useAppSelector((state) => state.appState);
  const { mailList }: IMailListState = useAppSelector(
    (state) => state.mailListState,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMailList({ selectedViewType, mailList }));
  }, [selectedViewType]);

  const fetchNavigationBarItems = useCallback(() => {
    return getNavBarItems();
  }, []);

  const onSelectItem = (item: INavigationBarItem) => {
    dispatch(setSelectedViewType(item.type));
  };

  const navBarItems: INavigationBarItem[] = fetchNavigationBarItems();

  return {
    navBarItems: navBarItems,
    selectedViewType,
    onSelectItem,
  };
};
