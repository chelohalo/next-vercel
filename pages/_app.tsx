import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Components: NextPageWithLayout
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = (Component as any).getLayout || ((page: ReactElement) => page);
  return getLayout(<Component {...pageProps} />);
}

