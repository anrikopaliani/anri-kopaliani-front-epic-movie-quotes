import React, { FC } from "react";
import { Modal } from "@/components";
import { SignUpForm } from "@/components";
import { SignUpModalProps } from "./types";

const SignUpModal: FC<SignUpModalProps> = ({
  signUpModal,
  signUpModalToggle,
}) => {
  return (
    <Modal
      isOpen={signUpModal}
      width="37.563rem"
      height="44rem"
      toggle={signUpModalToggle}
    >
      <div className="pb-4">
        <p className="text-3xl text-white">Create an account</p>
        <p className="text-subtitle text-center">Start your journey!</p>
      </div>
      <SignUpForm />
    </Modal>
  );
};

export default SignUpModal;
