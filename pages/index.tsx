import { useEffect, useRef } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import { useScreenSize } from "@/contexts";
import { HomeScreen, LoadingScreen } from "src/screens";

const Home: NextPage = () => {
  const loader = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const mountedTime = new Date();
    if (loader && loader.current) {
      window.onload = () => {
        loader.current?.classList.add("hide");
        const loadedTime = new Date();
        console.log(loadedTime.getTime() - mountedTime.getTime());
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Aditya Srivastava | Portfolio</title>
        <meta name="description" content="Portfolio of Aditya Srivastava" />
      </Head>
      <LoadingScreen ref={loader} />
      {screenSize !== undefined && <HomeScreen />}
    </>
  );
};

export default Home;
