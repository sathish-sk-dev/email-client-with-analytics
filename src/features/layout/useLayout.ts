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
  toggleComposeView,
  toggleDrawer,
} from "../../redux-toolkit/slices/appSlice";
import { IMailListState } from "../../redux-toolkit/interfaces/IMailListState";
import {
  setMailList,
  setSearchedMailList,
  setSearchText,
  setSelectedMailItem,
  setUnReadCount,
} from "../../redux-toolkit/slices/mailListSlice";
import { getMailListSearchKeys } from "../mail-list/utils/mailListUtils";
import { searchList } from "../../utils/listUtils";
import useMobileMediaQuery from "../../components/responsive/hooks/useMobileMediaQuery";
import { ViewType } from "../../enums/ViewType";
import { UseLayoutProps } from "./types/UseLayoutProps";

export const useLayout = ({
  canShowMailDetailsView,
}: UseLayoutProps): UseLayoutHooks => {
  const { selectedViewType, isOpenDrawer } = useAppSelector(
    (state) => state.appState,
  );
  const { mailList, mailListByViewType, searchText }: IMailListState =
    useAppSelector((state) => state.mailListState);
  const isMobile = useMobileMediaQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMailList({ selectedViewType, mailList }));
  }, [dispatch, mailList, selectedViewType]);

  const fetchNavigationBarItems = useCallback(() => {
    return getNavBarItems();
  }, []);

  const onToggleDrawer = useCallback(() => {
    dispatch(toggleDrawer(!isOpenDrawer));
  }, [dispatch, isOpenDrawer]);

  const onSelectItem = useCallback(
    (item: INavigationBarItem) => {
      isMobile && onToggleDrawer();
      dispatch(setSelectedViewType(item.type));
      dispatch(setSelectedMailItem(null));
    },
    [dispatch, isMobile, onToggleDrawer],
  );

  const onChangeSearch = useCallback(
    (text: string) => {
      dispatch(setSearchText(text));
    },
    [dispatch],
  );

  const onSearch = useCallback(() => {
    const searchKeys = getMailListSearchKeys();
    const result = searchList(mailListByViewType, searchKeys, searchText);
    dispatch(setSearchedMailList(result));
    dispatch(setUnReadCount(result));
  }, [dispatch, mailListByViewType, searchText]);

  const onClearSearch = useCallback(() => {
    dispatch(setSearchedMailList(mailListByViewType));
    dispatch(setUnReadCount(mailListByViewType));
  }, [dispatch, mailListByViewType]);

  const onClickCompose = useCallback(() => {
    dispatch(toggleComposeView(true));
  }, [dispatch]);

  const canShowMobileCompose = useCallback(() => {
    return (
      isMobile &&
      selectedViewType !== ViewType.ANALYTICS &&
      !canShowMailDetailsView
    );
  }, [canShowMailDetailsView, isMobile, selectedViewType]);

  return {
    navBarItems: fetchNavigationBarItems(),
    selectedViewType,
    onSelectItem,
    toggleDrawer: onToggleDrawer,
    isOpenDrawer,
    onChangeSearch,
    onSearch,
    onClearSearch,
    searchText,
    onClickCompose,
    canShowMobileCompose: canShowMobileCompose(),
  };
};
