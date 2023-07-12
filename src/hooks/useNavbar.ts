import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  toggleSignUpModal,
  toggleLoginModal,
} from "@/redux/features/modal/modalSlice";

const useNavbar = () => {
  const dispatch = useAppDispatch();
  const { signUpModal, loginModal } = useAppSelector((state) => state.modal);

  const handleLoginModal = () => {
    dispatch(toggleLoginModal());
  };

  const handleSignUpModal = () => {
    dispatch(toggleSignUpModal());
  };

  return { handleLoginModal, handleSignUpModal, signUpModal, loginModal };
};

export default useNavbar;
