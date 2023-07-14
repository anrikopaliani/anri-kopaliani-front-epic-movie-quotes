import { LandingPage } from "@/components";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const LandingPageLayout = ({ children }: any) => {
  return (
    <Provider store={store}>
      <LandingPage />
      {children}
    </Provider>
  );
};

export default LandingPageLayout;
