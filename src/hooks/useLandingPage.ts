import { useAppSelector, useAppDispatch } from "@/hooks";
import {
  toggleLoginModal,
  toggleSignUpModal,
  toggleConfirmationSentModal,
  toggleForgotPasswordModal,
  toggleResetPasswordEmailSent,
} from "@/redux/features/modal/modalSlice";

const useLandingPage = () => {
  const dispatch = useAppDispatch();
  const {
    loginModal,
    signUpModal,
    confirmationSentModal,
    activatedModal,
    forgotPasswordModal,
    resetPasswordSentModal,
  } = useAppSelector((state) => state.modal);

  const signUpModalToggle = () => {
    dispatch(toggleSignUpModal());
  };

  const loginModalToggle = () => {
    dispatch(toggleLoginModal());
  };

  const VerificationSentToggle = () => {
    dispatch(toggleConfirmationSentModal());
  };

  const forgotPasswordModalToggle = () => {
    dispatch(toggleForgotPasswordModal());
  };

  const toggleResetPasswordSendModal = () => {
    dispatch(toggleResetPasswordEmailSent());
  };

  const blurModalBackground =
    loginModal ||
    signUpModal ||
    confirmationSentModal ||
    forgotPasswordModal ||
    activatedModal ||
    resetPasswordSentModal;

  return {
    loginModal,
    signUpModal,
    signUpModalToggle,
    loginModalToggle,
    confirmationSentModal,
    VerificationSentToggle,
    forgotPasswordModalToggle,
    toggleResetPasswordSendModal,
    blurModalBackground,
    forgotPasswordModal,
    resetPasswordSentModal,
  };
};

export default useLandingPage;
