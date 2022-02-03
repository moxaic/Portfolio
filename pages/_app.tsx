import type { AppProps } from "next/app";

import { WindowWidthProvider } from "@/contexts";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WindowWidthProvider>
      <Component {...pageProps} />
    </WindowWidthProvider>
  );
}

export default MyApp;
