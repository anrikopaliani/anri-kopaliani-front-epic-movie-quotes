import { FC } from "react";
import { Modal } from "@/components";
import { ForgotPasswordModalProps } from "./types";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({
  forgotPasswordModal,
  toggleForgotPasswordModal,
}) => {
  return (
    <Modal
      isOpen={forgotPasswordModal}
      toggle={toggleForgotPasswordModal}
      width="37.563rem"
      height="25.125rem"
    >
      <div className="text-center w-360">
        <p className="text-3xl text-white mb-3">Forgot password?</p>
        <p className="text-subtitle">
          Enter the email and we’ll send an email with instructions to reset
          your password
        </p>
      </div>
      <ForgotPasswordForm />
    </Modal>
  );
};

export default ForgotPasswordModal;
