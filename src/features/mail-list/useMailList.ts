import { UseMailListHooks } from "./types/UseMailListHooks";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux-toolkit/hooks/hooks";
import {
  setMailList,
  setSearchedMailList,
  setSearchText,
  setUnReadCount,
  toggleSelectAll,
} from "../../redux-toolkit/slices/mailListSlice";
import { ChangeEvent, useCallback, useMemo } from "react";
import { searchList } from "../../utils/listUtils";
import {
  deleteSelectedMailList,
  getMailListSearchKeys,
  getMailListTitleByViewType,
  toggleSelectAllMailItems,
} from "./utils/mailListUtils";
import useMobileMediaQuery from "../../components/responsive/hooks/useMobileMediaQuery";

export const useMailList = (): UseMailListHooks => {
  const {
    searchedMailList,
    mailListByViewType,
    unReadCount,
    searchText,
    isLoading,
    isSelectAll,
    mailList,
  } = useAppSelector((state) => state.mailListState);
  const { selectedViewType } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();
  const isMobile = useMobileMediaQuery();

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

  const onChangeSelectAll = useCallback(
    (event: ChangeEvent, isChecked: boolean) => {
      const newMailList = toggleSelectAllMailItems(
        mailList,
        isChecked,
        false,
        selectedViewType,
      );
      dispatch(setMailList({ selectedViewType, mailList: newMailList }));
      dispatch(toggleSelectAll(isChecked));
    },
    [dispatch, mailList, selectedViewType],
  );

  const onClickDelete = useCallback(() => {
    const newMailList = deleteSelectedMailList(mailList);
    dispatch(setMailList({ selectedViewType, mailList: newMailList }));
  }, [dispatch, mailList, selectedViewType]);

  const canShowDelete = useMemo(() => {
    if (!isMobile) {
      return mailList.some((item) => item.isChecked);
    }
    return false;
  }, [isMobile, mailList]);

  const getTitleAndUnRead = useCallback(() => {
    const title = getMailListTitleByViewType(selectedViewType);
    const canShowUnRead = unReadCount > 0;
    return { title, canShowUnRead };
  }, [selectedViewType, unReadCount]);

  const { title, canShowUnRead } = getTitleAndUnRead();

  return {
    title,
    searchText,
    searchedMailList,
    unReadCount,
    isLoading,
    canShowUnRead,
    onChangeSearch,
    onSearch,
    onChangeSelectAll,
    onClearSearch,
    isSelectAll,
    onClickDelete,
    canShowDelete,
  };
};
