import { createSlice } from "@reduxjs/toolkit";
import { initialMailListState } from "../initial-state/initialState";
import { getUnReadCount } from "../../features/mail-list/utils/MailListUtils";

export const mailListSlice = createSlice({
  name: "appState",
  initialState: initialMailListState,
  reducers: {
    toggleLoadingMailList: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUnReadCount: (state, action) => {
      const count = getUnReadCount(action.payload);
      state.unReadCount = count;
    },
    setMailList: (state, action) => {
      state.mailList = action.payload;
    },
    setSearchedMailList: (state, action) => {
      state.searchedMailList = action.payload;
    },
  },
});

export const {
  toggleLoadingMailList,
  setSearchText,
  setUnReadCount,
  setMailList,
  setSearchedMailList,
} = mailListSlice.actions;

export const mailListReducer = mailListSlice.reducer;
