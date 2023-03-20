import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../utils/cookies";
const data = getCookie("proj");

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    project: data,
  },
  reducers: {
    setProject: (state) => {
      const newData = getCookie("proj");
      state.project = newData;
    },
  },
});

export const { setProject } = projectSlice.actions;

export default projectSlice.reducer;
