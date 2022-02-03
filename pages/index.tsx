import { useEffect, useRef } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import { useWindowWidth } from "@/contexts";
import { HomeScreen, LoadingScreen } from "@/screens";

const Home: NextPage = () => {
  const width = useWindowWidth();
  const loader = useRef<HTMLDivElement>(null);

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
        <link rel="preload" href="/images/frost.jpg" as="image" />
        <link rel="preload" href="/images/neon_c.jpg" as="image" />
      </Head>
      <LoadingScreen ref={loader} />
      {width !== undefined && <HomeScreen />}
    </>
  );
};

export default Home;
