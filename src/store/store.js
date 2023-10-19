import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import postSlice from "../slices/postSlice";

const store = configureStore({
  reducer: {
    userState: userSlice,
    postState: postSlice,
  },
});

export default store;
