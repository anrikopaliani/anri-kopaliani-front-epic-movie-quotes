import { createSlice } from "@reduxjs/toolkit";
import { modalStateTypes } from "./types";

const initialState: modalStateTypes = {
  SignUpModal: false,
  LoginModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showSignUpModal: (state) => {
      state.SignUpModal = true;
      state.LoginModal = false;
    },
    showLoginModal: (state) => {
      state.SignUpModal = false;
      state.LoginModal = true;
    },
  },
});

export const { showLoginModal, showSignUpModal } = modalSlice.actions;
export default modalSlice.reducer;
