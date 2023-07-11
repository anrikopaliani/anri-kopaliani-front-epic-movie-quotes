import { createSlice } from "@reduxjs/toolkit";
import { modalStateTypes } from "./types";

const initialState: modalStateTypes = {
  signUpModal: false,
  loginModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSignUpModal: (state) => {
      state.signUpModal = !state.signUpModal;
    },
    toggleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },
  },
});

export const { toggleSignUpModal, toggleLoginModal } = modalSlice.actions;
export default modalSlice.reducer;
