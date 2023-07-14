import { createSlice } from "@reduxjs/toolkit";
import { ModalStateTypes } from "./types";

const initialState: ModalStateTypes = {
  signUpModal: false,
  loginModal: false,
  activatedModal: false,
  confirmationSentModal: false,
  forgotPasswordModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSignUpModal: (state) => {
      state.signUpModal = !state.signUpModal;
      state.loginModal = false;
      state.activatedModal = false;
      state.confirmationSentModal = false;
      state.forgotPasswordModal = false;
    },
    toggleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
      state.signUpModal = false;
      state.activatedModal = false;
      state.confirmationSentModal = false;
      state.forgotPasswordModal = false;
    },
    toggleConfirmationSentModal: (state) => {
      state.confirmationSentModal = !state.confirmationSentModal;
      state.loginModal = false;
      state.signUpModal = false;
      state.activatedModal = false;
      state.forgotPasswordModal = false;
    },
    toggleActivatedModal: (state) => {
      state.activatedModal = !state.activatedModal;
      state.loginModal = false;
      state.signUpModal = false;
      state.confirmationSentModal = false;
      state.forgotPasswordModal = false;
    },

    toggleForgotPasswordModal: (state) => {
      state.forgotPasswordModal = !state.forgotPasswordModal;
      state.activatedModal = false;
      state.loginModal = false;
      state.signUpModal = false;
      state.confirmationSentModal = false;
    },
  },
});

export const {
  toggleSignUpModal,
  toggleLoginModal,
  toggleConfirmationSentModal,
  toggleActivatedModal,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
