import { LandingPageLayout, EmailActivatedModal } from "@/components";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../types";

const EmailVerifiedPage: NextPageWithLayout = () => {
  return <EmailActivatedModal />;
};

EmailVerifiedPage.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default EmailVerifiedPage;
