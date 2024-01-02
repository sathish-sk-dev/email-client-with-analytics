import { createSlice } from "@reduxjs/toolkit";
import { initialMailListState } from "../initial-state/initialState";
import {
  filterMailListByStatus,
  getMailStatusByViewType,
  getUnReadCount,
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
      state.mailList = mailList;
      const mailStatus = getMailStatusByViewType(selectedViewType);
      const filteredMailList = filterMailListByStatus(mailList, mailStatus);
      state.mailListByViewType = filteredMailList;
      state.searchedMailList = filteredMailList;
      state.unReadCount = getUnReadCount(filteredMailList);
      state.searchText = "";
    },
    setSearchedMailList: (state, action) => {
      state.searchedMailList = action.payload;
      state.unReadCount = getUnReadCount(action.payload);
    },
    setSelectedMailItem: (state, action) => {
      state.selectedMailItem = action.payload;
    }
  },
});

export const {
  toggleLoadingMailList,
  setSearchText,
  setUnReadCount,
  setMailList,
  setSearchedMailList,
  setSelectedMailItem,
} = mailListSlice.actions;

export const mailListReducer = mailListSlice.reducer;
