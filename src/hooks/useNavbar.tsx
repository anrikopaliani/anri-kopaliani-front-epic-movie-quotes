import { useAppDispatch } from "@/hooks";
import {
  toggleSignUpModal,
  toggleLoginModal,
} from "@/redux/features/modal/modalSlice";

const useNavbar = () => {
  const dispatch = useAppDispatch();

  const handleLoginModal = () => {
    dispatch(toggleLoginModal());
  };

  const handleSignUpModal = () => {
    dispatch(toggleSignUpModal());
  };

  return { handleLoginModal, handleSignUpModal };
};

export default useNavbar;
