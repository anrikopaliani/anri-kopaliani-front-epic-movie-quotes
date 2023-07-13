import { createSlice } from "@reduxjs/toolkit";
import { ModalStateTypes } from "./types";

const initialState: ModalStateTypes = {
  signUpModal: false,
  loginModal: false,
  confirmationSentModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSignUpModal: (state) => {
      state.signUpModal = !state.signUpModal;
      state.loginModal = false;
    },
    toggleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
      state.signUpModal = false;
    },
    toggleConfirmationSentModal: (state) => {
      state.confirmationSentModal = !state.confirmationSentModal;
      state.loginModal = false;
      state.signUpModal = false;
    },
  },
});

export const {
  toggleSignUpModal,
  toggleLoginModal,
  toggleConfirmationSentModal,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
