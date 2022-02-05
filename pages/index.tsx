import { useEffect, useRef } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import { useWindowWidth } from "@/contexts";
import { HomeScreen, LoadingScreen } from "@/screens";
import { debounce } from "@/utils/debounce";

const Home: NextPage = () => {
  const width = useWindowWidth();
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loaderCur = loader && loader.current;
    const hideLoader = () => {
      loaderCur?.classList.remove("resizing");
      loaderCur?.classList.add("hide");
    };
    const showLoader = () => {
      if (loaderCur) {
        loaderCur.style.height = window.innerHeight + "px";
        loaderCur.style.width = window.innerWidth + "px";
      }
      loaderCur?.classList.remove("hide");
      loaderCur?.classList.add("resizing");
    };
    const resizeHandler = debounce(hideLoader, 1000, showLoader);
    window.onload = hideLoader;
    window.onresize = resizeHandler;
  }, []);

  return (
    <>
      <Head>
        <title>Aditya Srivastava | Portfolio</title>
        <meta name="description" content="Portfolio of Aditya Srivastava" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        <link rel="preload" href="/images/frost.jpg" as="image" />
        <link rel="preload" href="/images/neon_c.jpg" as="image" />
      </Head>
      <LoadingScreen ref={loader} />
      {width !== undefined && <HomeScreen />}
    </>
  );
};

export default Home;
