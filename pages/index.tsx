import { useEffect, useRef } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import { useSetWindowWidth, useWindowWidth } from "@/contexts";
import { HomeScreen, LoadingScreen } from "@/screens";
import { debounce } from "@/utils/debounce";

const Home: NextPage = () => {
  const width = useWindowWidth();
  const setWidth = useSetWindowWidth();
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hideLoader = () => loader.current?.classList.add("hide");
    window.onload = hideLoader;
    window.addEventListener("beforeunload", () =>
      ["activeSection", "name", "email", "msg"].forEach((key) =>
        sessionStorage.removeItem(key)
      )
    );
    setTimeout(hideLoader, 5000);
  }, []);

  useEffect(() => {
    const hideLoader = () => {
      setWidth(undefined);
      setWidth(window.innerWidth);
      loaderCur?.classList.remove("resizing");
      loaderCur?.classList.add("hide");
    };

    const showLoader = () => {
      loaderCur?.classList.remove("hide");
      loaderCur?.classList.add("resizing");
    };

    const loaderCur = loader && loader.current;
    const onResizeHandler = debounce(hideLoader, 500, showLoader);
    const checkWidthChange = () => {
      if (width !== window.innerWidth) {
        onResizeHandler();
      }
    };

    window.addEventListener("resize", checkWidthChange);
    return () => window.removeEventListener("resize", checkWidthChange);
  }, [width, setWidth]);

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
