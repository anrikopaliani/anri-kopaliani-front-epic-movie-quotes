import { FC } from "react";
import { Modal, TaskCompleteIcon } from "@/components";
import { EmailActivatedModalProps } from "./types";

const EmailActivatedModal: FC<EmailActivatedModalProps> = ({
  activatedModal,
}) => {
  return (
    <Modal isOpen={activatedModal} width="33.625rem" height="23.438rem">
      <div className="mb-9">
        <TaskCompleteIcon />
      </div>
      <div className="text-white">
        <p className="text-3xl text-center">Thank you!</p>
        <p className="mt-8">Your account has been activated.</p>
      </div>
      <a className="w-360 hover:cursor-pointer mt-8 bg-red flex justify-center items-center text-white h-9">
        Go to my news feed
      </a>
    </Modal>
  );
};

export default EmailActivatedModal;
