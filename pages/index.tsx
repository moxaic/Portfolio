import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Section } from "../src/components";
import {
  AboutMe,
  ContactMe,
  Footer,
  HeroArea,
  MyHobbies,
  Navbar,
} from "../src/modules";

const Home: NextPage = () => {
  const sectionsName = ["Home", "About Me", "My Hobbies", "Contact Me"];
  const sectionRefs = useRef<HTMLElement[]>([]);
  const Sections = [HeroArea, AboutMe, MyHobbies, ContactMe];

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Aditya Srivastava | Evil, chaotic & naughty</title>
        <meta name="description" content="Portfolio of Aditya Srivastava" />
      </Head>
      <Navbar sections={sectionsName} navRefs={sectionRefs} />
      <main>
        {sectionsName.map((sectionName, idx) => {
          const Module = Sections[idx];
          return (
            <Section
              key={sectionName}
              ref={(el: HTMLElement) => (sectionRefs.current[idx] = el)}
              title={sectionName}
            >
              <Module />
            </Section>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Home;
