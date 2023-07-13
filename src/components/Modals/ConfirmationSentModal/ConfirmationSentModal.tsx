import React, { FC } from "react";
import { Modal } from "@/components/Modal";
import { ConfirmationSentModalProps } from "./types";
import { SendCheck } from "@/components";
import Link from "next/link";

const ConfirmationSentModal: FC<ConfirmationSentModalProps> = ({
  confirmationSentModal,
  VerificationSentToggle,
}) => {
  return (
    <Modal
      height="25.875rem"
      width="33.625rem"
      isOpen={confirmationSentModal}
      toggle={VerificationSentToggle}
    >
      <div className="mb-3">
        <SendCheck />
      </div>
      <div className="text-white w-360 text-center">
        <p className="text-3xl">Thank you!</p>
        <p className="mt-8">
          Please check your email and follow the instructions to activate your
          account.
        </p>
      </div>
      <a
        href="https://mail.google.com"
        className="text-center hover:cursor-pointer rounded-sm mt-10 text-white w-360 py-3 bg-red"
      >
        Go to my mail
      </a>
    </Modal>
  );
};

export default ConfirmationSentModal;