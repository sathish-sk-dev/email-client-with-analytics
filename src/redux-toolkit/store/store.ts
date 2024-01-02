import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../slices/appSlice";
import { thunk } from "redux-thunk";
import { mailListReducer } from "../slices/mailListSlice";
import { composeMailReducer } from "../slices/composeMailSlice";

export const store = configureStore({
  reducer: {
    appState: appReducer,
    mailListState: mailListReducer,
    composeMailState: composeMailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk as any),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
