import { useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import AboutMe from "../src/modules/AboutMe";
import ContactMe from "../src/modules/ContactMe";
import Footer from "../src/modules/Footer";
import HeroArea from "../src/modules/HeroArea";
import MyHobbies from "../src/modules/MyHobbies";
import Navbar from "../src/modules/Navbar";
import Section from "../src/components/Section";

const Home: NextPage = () => {
  const sectionsName = ["Home", "About Me", "My Hobbies", "Contact Me"];
  const sectionRefs = useRef<HTMLElement[]>([]);
  const sections = [HeroArea, AboutMe, MyHobbies, ContactMe];

  return (
    <>
      <Head>
        <title>Moxaic</title>
        <meta name="description" content="Portfolio of Aditya Srivastava" />
      </Head>
      <Navbar sections={sectionsName} refs={sectionRefs} />
      <main>
        {sectionsName.map((sectionName, idx) => {
          const Component = sections[idx];
          return (
            <Section
              key={sectionName}
              ref={(el: HTMLElement) => (sectionRefs.current[idx] = el)}
              title={sectionName}
            >
              <Component />
            </Section>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Home;
