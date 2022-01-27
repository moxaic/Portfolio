import { useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Logo, Section } from "../src/components";
import {
  AboutMe,
  ContactMe,
  Footer,
  HeroArea,
  MyHobbies,
  Navbar,
} from "../src/modules";
import getSectionId from "../src/utils/getSectionId";

const Home: NextPage = () => {
  const sectionsName = ["Home", "About Me", "My Hobbies", "Contact Me"];
  const sectionRefs = useRef<HTMLElement[]>([]);
  const Sections = [HeroArea, AboutMe, MyHobbies, ContactMe];

  return (
    <>
      <Head>
        <title>Aditya Srivastava | Friendly neigghbourhood freelancer</title>
        <meta name="description" content="Portfolio of Aditya Srivastava" />
      </Head>
      <Logo />
      <Navbar {...{ sectionsName, sectionRefs }} />
      <main>
        {sectionsName.map((sectionName, i) => {
          const id = getSectionId(sectionName);
          const Module = Sections[i];
          return (
            <Section
              id={id}
              key={id}
              ref={(el: HTMLElement) => (sectionRefs.current[i] = el)}
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
