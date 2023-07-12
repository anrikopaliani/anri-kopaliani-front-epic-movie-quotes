import { createSlice } from "@reduxjs/toolkit";
import { ModalStateTypes } from "./types";

const initialState: ModalStateTypes = {
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
