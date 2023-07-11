import { useAppSelector, useAppDispatch } from "@/hooks";
import {
  toggleLoginModal,
  toggleSignUpModal,
} from "@/redux/features/modal/modalSlice";

const useLandingPage = () => {
  const dispatch = useAppDispatch();
  const { loginModal, signUpModal } = useAppSelector((state) => state.modal);

  const signUpModalToggle = () => {
    dispatch(toggleSignUpModal());
  };

  const loginModalToggle = () => {
    dispatch(toggleLoginModal());
  };

  return { loginModal, signUpModal, signUpModalToggle, loginModalToggle };
};

export default useLandingPage;
