import { ForgotPasswordModal, LoginModal, SignUpModal } from "@/components";
import { ConfirmationSentModal } from "@/components/LandingPage/ConfirmationSentModal";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLandingPage } from "@/hooks";
import { NextPageWithLayout } from "./types";
import { ReactElement } from "react";
import { LandingPageLayout } from "@/components";

const queryClient = new QueryClient();
const LandingPage: NextPageWithLayout = () => {
  const {
    signUpModal,
    signUpModalToggle,
    loginModal,
    loginModalToggle,
    VerificationSentToggle,
    confirmationSentModal,
    forgotPasswordModal,
    forgotPasswordModalToggle,
  } = useLandingPage();
  return (
    <QueryClientProvider client={queryClient}>
      <SignUpModal
        signUpModal={signUpModal}
        signUpModalToggle={signUpModalToggle}
      />
      <LoginModal loginModal={loginModal} loginModalToggle={loginModalToggle} />
      <ConfirmationSentModal
        confirmationSentModal={confirmationSentModal}
        VerificationSentToggle={VerificationSentToggle}
      />
      <ForgotPasswordModal
        forgotPasswordModal={forgotPasswordModal}
        toggleForgotPasswordModal={forgotPasswordModalToggle}
      />
    </QueryClientProvider>
  );
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default LandingPage;
