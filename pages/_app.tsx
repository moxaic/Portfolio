import type { AppProps } from "next/app";

import { WindowWidthProvider } from "@/contexts";
import { LoadingScreen } from "@/screens";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WindowWidthProvider>
      <>
        {/* <LoadingScreen /> */}
        <Component {...pageProps} />
      </>
    </WindowWidthProvider>
  );
}

export default MyApp;
