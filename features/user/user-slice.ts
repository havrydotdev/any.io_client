import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../interfaces/user.interface";
import axios from "axios";

export interface UserState {
  value?: User;
  isLoading: boolean;
  error?: string;
}

const initialState: UserState = {
  value: undefined,
  isLoading: false,
  error: undefined,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/profile`
  );
  const data = await res.data;
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
