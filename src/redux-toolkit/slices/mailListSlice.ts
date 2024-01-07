import { createSlice } from "@reduxjs/toolkit";
import { initialMailListState } from "../initial-state/initialState";
import {
  filterMailListByStatus,
  getMailStatusByViewType,
  getUnReadCount,
  toggleCheckedItem,
} from "../../features/mail-list/utils/mailListUtils";

export const mailListSlice = createSlice({
  name: "mailListState",
  initialState: initialMailListState,
  reducers: {
    toggleLoadingMailList: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUnReadCount: (state, action) => {
      state.unReadCount = getUnReadCount(action.payload);
    },
    setMailList: (state, action) => {
      const { selectedViewType, mailList } = action.payload;
      const mailStatus = getMailStatusByViewType(selectedViewType);
      const filteredMailList = filterMailListByStatus(mailList, mailStatus);
      return {
        ...state,
        mailListByViewType: filteredMailList,
        searchedMailList: filteredMailList,
        unReadCount: getUnReadCount(filteredMailList),
        mailList,
        isSelectAll: false,
      };
    },
    setSearchedMailList: (state, action) => {
      state.searchedMailList = action.payload;
      state.unReadCount = getUnReadCount(action.payload);
    },
    setSelectedMailItem: (state, action) => {
      state.selectedMailItem = action.payload;
    },
    toggleSelectAll: (state, action) => {
      state.isSelectAll = action.payload;
    },
    addMail: (state, action) => {
      const mailItem = action.payload;
      const mailList = [...state.mailList];
      mailList.unshift(mailItem);
      state.mailList = mailList;
    },
    toggleSelectedMailItem: (state, action) => {
      const { mailItem, isChecked } = action.payload;
      const mailList = [...state.mailList];
      state.mailList = toggleCheckedItem(mailList, mailItem, isChecked);
    },
  },
});

export const {
  toggleLoadingMailList,
  setSearchText,
  setUnReadCount,
  setMailList,
  setSearchedMailList,
  setSelectedMailItem,
  toggleSelectAll,
  addMail,
  toggleSelectedMailItem,
} = mailListSlice.actions;

export const mailListReducer = mailListSlice.reducer;
