import {
  ForgotPasswordModal,
  LoginModal,
  ResetEmailSentModal,
  SignUpModal,
} from "@/components";
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
    resetPasswordSentModal,
    toggleResetPasswordSendModal,
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
      <ResetEmailSentModal
        resetPasswordSentModal={resetPasswordSentModal}
        toggleResetPasswordSendModal={toggleResetPasswordSendModal}
      />
    </QueryClientProvider>
  );
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default LandingPage;
