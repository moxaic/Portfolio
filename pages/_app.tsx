import type { AppProps } from "next/app";

import { WindowWidthProvider } from "@/contexts";
import "../src/styles/globals.css";
import { Logo } from "src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WindowWidthProvider>
      <>
        <Logo />
        <Component {...pageProps} />
      </>
    </WindowWidthProvider>
  );
}

export default MyApp;
