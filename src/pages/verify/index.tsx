import { LandingPage, LandingPageLayout } from "@/components";
import EmailActivatedModal from "@/components/LandingPage/Modals/ActivatedModal/EmailActivatedModal";
import { useVerifyEmail } from "@/hooks";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../types";

const EmailVerifiedPage: NextPageWithLayout = () => {
  const { activatedModal } = useVerifyEmail();
  return (
    <>
      <EmailActivatedModal activatedModal={activatedModal} />
    </>
  );
};

EmailVerifiedPage.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default EmailVerifiedPage;
