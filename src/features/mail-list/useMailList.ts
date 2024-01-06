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
import { ChangeEvent, useCallback, useEffect } from "react";
import { fetchMailList } from "./api";
import { searchList } from "../../utils/listUtils";
import {
  getMailListSearchKeys,
  getMailListTitleByViewType,
} from "./utils/mailListUtils";

export const useMailList = (): UseMailListHooks => {
  const {
    searchedMailList,
    mailListByViewType,
    unReadCount,
    searchText,
    isLoading,
  } = useAppSelector((state) => state.mailListState);
  const { selectedViewType } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const fetchMailListCallback = useCallback(async () => {
    const list = await fetchMailList();
    dispatch(setMailList({ selectedViewType, mailList: list }));
  }, [dispatch, selectedViewType]);

  useEffect(() => {
    fetchMailListCallback();
  }, [fetchMailListCallback]);

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
    (event: ChangeEvent) => {
      // @ts-ignore
      const isChecked = event.target.checked;
      dispatch(toggleSelectAll(isChecked));
    },
    [dispatch],
  );

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
  };
};
