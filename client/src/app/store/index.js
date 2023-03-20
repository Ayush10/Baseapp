import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import projectReducer from "../slice/projectSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
  },
});
