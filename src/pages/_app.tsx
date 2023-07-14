import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "./types";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
