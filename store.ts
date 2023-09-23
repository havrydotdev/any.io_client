import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// selectors
export const selectUser = (state: RootState) => state.user.value;
export const selectLoading = (state: RootState) => state.user.isLoading;
export const selectError = (state: RootState) => state.user.error;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
