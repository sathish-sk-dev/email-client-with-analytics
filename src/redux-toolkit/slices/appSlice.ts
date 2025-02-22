import { createSlice } from "@reduxjs/toolkit";
import { initialAppState } from "../initial-state/initialState";

export const appSlice = createSlice({
  name: "appState",
  initialState: initialAppState,
  reducers: {
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSelectedViewType: (state, action) => {
      state.selectedViewType = action.payload;
    },
    toggleComposeView: (state, action) => {
      state.isOpenComposeView = action.payload;
    },
    toggleDrawer: (state, action) => {
      state.isOpenDrawer = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  toggleLoading,
  toggleTheme,
  setUser,
  setSelectedViewType,
  toggleComposeView,
  toggleDrawer,
  setSearchText,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
