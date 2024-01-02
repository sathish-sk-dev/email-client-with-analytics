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
} from "../../redux-toolkit/slices/mailListSlice";
import { useEffect } from "react";
import { fetchMailList } from "./api";
import { toggleComposeView } from "../../redux-toolkit/slices/appSlice";
import { searchList } from "../../utils/listUtils";
import {
  getMailListSearchKeys,
  getMailListTitleByViewType,
} from "./utils/MailListUtils";

export const useMailList = (): UseMailListHooks => {
  const { mailList, searchedMailList, unReadCount, searchText, isLoading } =
    useAppSelector((state) => state.mailListState);
  const { selectedViewType } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  console.log("==========", mailList);

  useEffect(() => {
    fetchMailList().then((list) => {
      dispatch(setMailList(list));
      dispatch(setSearchedMailList(list));
      dispatch(setUnReadCount(list));
    });
  }, [dispatch]);

  const onChangeSearch = (text: string) => {
    dispatch(setSearchText(text));
  };

  const onSearch = () => {
    const searchKeys = getMailListSearchKeys();
    const result = searchList(mailList, searchKeys, searchText);
    dispatch(setSearchedMailList(result));
    dispatch(setUnReadCount(result));
  };

  const onClearSearch = () => {
    dispatch(setSearchedMailList(mailList));
    dispatch(setUnReadCount(mailList));
  };

  const onAdd = () => {
    dispatch(toggleComposeView(true));
  };

  const title = getMailListTitleByViewType(selectedViewType);

  return {
    title,
    searchText,
    searchedMailList,
    unReadCount,
    isLoading,
    onChangeSearch,
    onSearch,
    onAdd,
    onClearSearch,
  };
};
