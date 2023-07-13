import { useAppSelector, useAppDispatch } from "@/hooks";
import {
  toggleLoginModal,
  toggleSignUpModal,
  toggleConfirmationSentModal,
} from "@/redux/features/modal/modalSlice";

const useLandingPage = () => {
  const dispatch = useAppDispatch();
  const { loginModal, signUpModal, confirmationSentModal } = useAppSelector(
    (state) => state.modal
  );

  const signUpModalToggle = () => {
    dispatch(toggleSignUpModal());
  };

  const loginModalToggle = () => {
    dispatch(toggleLoginModal());
  };

  const VerificationSentToggle = () => {
    dispatch(toggleConfirmationSentModal());
  };

  const blurModalBackground =
    loginModal || signUpModal || confirmationSentModal;

  return {
    loginModal,
    signUpModal,
    signUpModalToggle,
    loginModalToggle,
    confirmationSentModal,
    VerificationSentToggle,
    blurModalBackground,
  };
};

export default useLandingPage;
