import { LandingPage } from "@/components";
import EmailActivatedModal from "@/components/Modals/ActivatedModal/EmailActivatedModal";
import { useVerifyEmail } from "@/hooks";

const EmailVerifiedPage = () => {
  const { activatedModal } = useVerifyEmail();
  return (
    <>
      <LandingPage />
      <EmailActivatedModal activatedModal={activatedModal} />
    </>
  );
};

export default EmailVerifiedPage;
