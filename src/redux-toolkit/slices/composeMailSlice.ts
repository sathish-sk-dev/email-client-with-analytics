import { createSlice } from "@reduxjs/toolkit";
import { initialComposeMailState } from "../initial-state/initialState";

export const composeMailSlice = createSlice({
  name: "composeMailState",
  initialState: initialComposeMailState,
  reducers: {
    toggleLoadingComposeMail: (state, action) => {
      state.isLoading = action.payload;
    },
    setReceipients: (state, action) => {
      state.receipients = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setSelectedReceipients: (state, action) => {
      state.selectedReceipients = action.payload;
    },
    resetComposeMail: () => initialComposeMailState,
  },
});

export const {
  toggleLoadingComposeMail,
  setReceipients,
  setSubject,
  setBody,
  setSelectedReceipients,
  resetComposeMail,
} = composeMailSlice.actions;

export const composeMailReducer = composeMailSlice.reducer;
