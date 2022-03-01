import "src/styles/index.css";
import { memo } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default memo(App);
