import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  toggleSignUpModal,
  toggleLoginModal,
} from "@/redux/features/modal/modalSlice";

const useNavbar = () => {
  const dispatch = useAppDispatch();
  const { signUpModal, loginModal, activatedModal, confirmationSentModal } =
    useAppSelector((state) => state.modal);

  const handleLoginModal = () => {
    dispatch(toggleLoginModal());
  };

  const handleSignUpModal = () => {
    dispatch(toggleSignUpModal());
  };
  const blurModalBackground =
    loginModal || signUpModal || confirmationSentModal || activatedModal;

  return {
    handleLoginModal,
    handleSignUpModal,
    signUpModal,
    loginModal,
    blurModalBackground,
  };
};

export default useNavbar;
