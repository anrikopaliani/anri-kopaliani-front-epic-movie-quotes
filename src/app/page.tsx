"use client";
import { LandingPage, LoginModal, SignUpModal } from "@/components";

import { useLandingPage } from "@/hooks";

export default function Home() {
  const { signUpModal, signUpModalToggle, loginModal, loginModalToggle } =
    useLandingPage();
  return (
    <>
      <LandingPage />
      <SignUpModal
        signUpModal={signUpModal}
        signUpModalToggle={signUpModalToggle}
      />
      <LoginModal loginModal={loginModal} loginModalToggle={loginModalToggle} />
    </>
  );
}
