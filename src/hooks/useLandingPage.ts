import { useAppSelector, useAppDispatch } from "@/hooks";
import {
  toggleLoginModal,
  toggleSignUpModal,
  toggleConfirmationSentModal,
  toggleForgotPasswordModal,
} from "@/redux/features/modal/modalSlice";

const useLandingPage = () => {
  const dispatch = useAppDispatch();
  const {
    loginModal,
    signUpModal,
    confirmationSentModal,
    activatedModal,
    forgotPasswordModal,
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

  const blurModalBackground =
    loginModal ||
    signUpModal ||
    confirmationSentModal ||
    forgotPasswordModal ||
    activatedModal;

  return {
    loginModal,
    signUpModal,
    signUpModalToggle,
    loginModalToggle,
    confirmationSentModal,
    VerificationSentToggle,
    forgotPasswordModalToggle,
    blurModalBackground,
    forgotPasswordModal,
  };
};

export default useLandingPage;
