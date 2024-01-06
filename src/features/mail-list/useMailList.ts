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
import { ChangeEvent, useEffect } from "react";
import { fetchMailList } from "./api";
import { searchList } from "../../utils/listUtils";
import {
  getMailListSearchKeys,
  getMailListTitleByViewType,
} from "./utils/mailListUtils";

export const useMailList = (): UseMailListHooks => {
  const {
    mailList,
    searchedMailList,
    mailListByViewType,
    unReadCount,
    searchText,
    isLoading,
  } = useAppSelector((state) => state.mailListState);
  const { selectedViewType } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchMailList().then((list) => {
      dispatch(setMailList({ selectedViewType, mailList: list }));
    });
  }, [dispatch, selectedViewType]);

  const onChangeSearch = (text: string) => {
    dispatch(setSearchText(text));
  };

  const onSearch = () => {
    const searchKeys = getMailListSearchKeys();
    const result = searchList(mailListByViewType, searchKeys, searchText);
    dispatch(setSearchedMailList(result));
    dispatch(setUnReadCount(result));
  };

  const onClearSearch = () => {
    dispatch(setSearchedMailList(mailListByViewType));
    dispatch(setUnReadCount(mailListByViewType));
  };

  const onChangeSelectAll = (event: ChangeEvent) => {
    // @ts-ignore
    const isChecked = event.target.checked;
    dispatch(toggleSelectAll(isChecked));
  };

  const title = getMailListTitleByViewType(selectedViewType);

  const canShowUnRead = unReadCount > 0;

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
