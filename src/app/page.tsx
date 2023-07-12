"use client";
import { Modal, SignUpForm, LandingPage } from "@/components";
import { SignUpModal } from "@/components";
import { LoginModal } from "@/components/Modals/LoginModal";
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
