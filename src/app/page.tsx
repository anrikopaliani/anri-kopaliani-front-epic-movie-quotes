"use client";
import { LandingPage, LoginModal, SignUpModal } from "@/components";
import { ConfirmationSentModal } from "@/components/Modals";

import { useLandingPage } from "@/hooks";

export default function Home() {
  const {
    signUpModal,
    signUpModalToggle,
    loginModal,
    loginModalToggle,
    VerificationSentToggle,
    confirmationSentModal,
  } = useLandingPage();
  return (
    <>
      <LandingPage />
      <SignUpModal
        signUpModal={signUpModal}
        signUpModalToggle={signUpModalToggle}
      />
      <LoginModal loginModal={loginModal} loginModalToggle={loginModalToggle} />
      <ConfirmationSentModal
        confirmationSentModal={confirmationSentModal}
        VerificationSentToggle={VerificationSentToggle}
      />
    </>
  );
}
