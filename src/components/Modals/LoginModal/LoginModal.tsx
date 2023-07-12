import { LoginForm, Modal } from "@/components";
import { FC } from "react";
import { LoginModalProps } from "./types";
const LoginModal: FC<LoginModalProps> = ({ loginModal, loginModalToggle }) => {
  return (
    <Modal
      isOpen={loginModal}
      toggle={loginModalToggle}
      width="37.563rem"
      height="35.125rem"
    >
      <div>
        <div className="pb-4">
          <p className="text-3xl text-white">Log in to your account</p>
          <p className="text-subtitle text-center pt-3">
            Welcome back! Please enter your details.
          </p>
        </div>
      </div>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
