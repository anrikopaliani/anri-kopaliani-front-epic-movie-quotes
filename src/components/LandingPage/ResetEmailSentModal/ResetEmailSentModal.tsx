import { Modal } from "@/components/Modal";
import { FC } from "react";
import { ResetEmailSentModalProps } from "./types";
import { SendCheckIcon } from "@/components";

const ResetEmailSentModal: FC<ResetEmailSentModalProps> = ({
  resetPasswordSentModal,
  toggleResetPasswordSendModal,
}) => {
  return (
    <Modal
      isOpen={resetPasswordSentModal}
      toggle={toggleResetPasswordSendModal}
      width="33.625rem"
      height="28rem"
    >
      <div className="mb-3">
        <SendCheckIcon />
      </div>
      <div className="w-360 text-white text-center mt-2">
        <p>Check your email</p>
        <p className="mt-8">
          We have sent a password recover instructions to your email
        </p>
        <a
          href="https://mail.google.com"
          className=" flex items-center justify-center hover:cursor-pointer rounded-sm mt-10 text-white w-360 h-9 bg-red"
        >
          Go to my mail
        </a>
        <p
          onClick={toggleResetPasswordSendModal}
          className="mt-10 text-subtitle hover:cursor-pointer"
        >
          Skip, I’ll confirm later
        </p>
      </div>
    </Modal>
  );
};

export default ResetEmailSentModal;
