import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../utils/cookies";
const user = getCookie("Auth");

export const userSlice = createSlice({
  name: "User",
  initialState: {
    userId: user?.id,
  },
  reducers: {
    setUser: (state) => {
      const newUser = getCookie("Auth");
      state.userId = newUser?.id;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
