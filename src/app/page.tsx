"use client";
import { LandingPage, LoginModal, SignUpModal } from "@/components";
import { ConfirmationSentModal } from "@/components/Modals";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLandingPage } from "@/hooks";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
