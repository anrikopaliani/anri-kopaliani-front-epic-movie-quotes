"use client";
import { Modal, SignUpForm, LandingPage } from "@/components";
import { SignUpModal } from "@/components";
import { useLandingPage } from "@/hooks";

export default function Home() {
  const { signUpModal, signUpModalToggle, loginModal } = useLandingPage();
  return (
    <>
      <LandingPage />
      <SignUpModal
        signUpModal={signUpModal}
        signUpModalToggle={signUpModalToggle}
      />
    </>
  );
}
