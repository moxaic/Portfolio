import { useEffect, useRef } from "react";

import { Logo, Section } from "@/components";
import {
  AboutMe,
  ContactMe,
  Footer,
  HeroArea,
  MyHobbies,
  Navbar,
} from "@/modules";
import getSectionId from "@/utils/getSectionId";

const Sections = [
  { title: "Home", Module: HeroArea },
  { title: "About Me", Module: AboutMe },
  { title: "My Hobbies", Module: MyHobbies },
  { title: "Contact Me", Module: ContactMe },
];

const HomeScreen = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mainCur = mainRef && mainRef.current;
    if (mainCur) {
      let distanceFromBottom: number;

      const onScrollHandler = (_: Event) => {
        distanceFromBottom = Math.abs(
          mainCur.scrollHeight -
            Math.abs(mainCur.scrollTop) -
            mainCur.clientHeight
        );
      };

      const onWheelHandler = ({ deltaY }: WheelEvent) => {
        if (deltaY > 0 && distanceFromBottom < 10) {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }
      };

      mainCur.addEventListener("wheel", onWheelHandler);
      mainCur.addEventListener("scroll", onScrollHandler);
      return () => {
        mainCur.removeEventListener("scroll", onScrollHandler);
        mainCur.removeEventListener("wheel", onWheelHandler);
      };
    }
  }, []);

  return (
    <>
      <Logo />
      <Navbar {...{ sectionsRef }} />
      <main ref={mainRef}>
        {Sections.map(({ title, Module }, i) => {
          const id = getSectionId(title);
          return (
            <Section
              key={id}
              ref={(elem: HTMLElement) => (sectionsRef.current[i] = elem)}
              {...{ id, title }}
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

export default HomeScreen;