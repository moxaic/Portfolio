import type { AppProps } from "next/app";

import { ScreenSizeProvider } from "@/contexts";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenSizeProvider>
      <Component {...pageProps} />
    </ScreenSizeProvider>
  );
}

export default MyApp;
