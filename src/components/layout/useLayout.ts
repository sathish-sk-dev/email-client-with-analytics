import { useCallback } from "react";
import { getNavBarItems } from "./utils/LayoutUtils";
import { UseLayoutHooks } from "./types/UseLayoutHooks";
import { INavigationBarItem } from "./interfaces/INavigationBarItem";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux-toolkit/hooks/hooks";
import { setSelectedViewType } from "../../redux-toolkit/slices/appSlice";

export const useLayout = (): UseLayoutHooks => {
  const { selectedViewType } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

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
