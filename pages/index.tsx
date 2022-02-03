import { useEffect, useRef } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import { useScreenSize } from "@/contexts";
import { HomeScreen, LoadingScreen } from "src/screens";

const Home: NextPage = () => {
  const loader = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (loader && loader.current) {
      window.onload = () => {
        loader.current?.classList.add("hide");
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Aditya Srivastava | Portfolio</title>
        <meta name="description" content="Portfolio of Aditya Srivastava" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      </Head>
      <LoadingScreen ref={loader} />
      {screenSize !== undefined && <HomeScreen />}
    </>
  );
};

export default Home;
