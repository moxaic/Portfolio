import { MutableRefObject, useEffect, useRef, useState } from "react";

import getSectionId from "@/utils/getSectionId";
import HamMenu from "./components/HamMenu";
import Link from "./components/Link";
import styles from "./navbar.module.css";

type Props = {
  sectionsName: string[];
  sectionRefs: MutableRefObject<HTMLElement[]>;
};

const Navbar = ({ sectionsName, sectionRefs }: Props) => {
  const [activeSection, setActiveSection] = useState(
    getSectionId(sectionsName[0])
  );
  const currentSection = useRef({
    id: getSectionId(sectionsName[0]),
    intersectionRatio: 1,
  });
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (nav && nav.current) {
      const navCurr = nav.current;
      const mouseWheelHandler = (e: Event) => {
        e.preventDefault();
      };

      navCurr.addEventListener("mousewheel", mouseWheelHandler);
      return () => navCurr.removeEventListener("mousewheel", mouseWheelHandler);
    }
  }, [sectionsName, sectionRefs]);

  useEffect(() => {
    const getActiveSection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === currentSection.current.id) {
            currentSection.current.intersectionRatio = entry.intersectionRatio;
          } else if (
            entry.intersectionRatio > currentSection.current.intersectionRatio
          ) {
            currentSection.current.id = entry.target.id;
            currentSection.current.intersectionRatio = entry.intersectionRatio;
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.2],
    };

    const sectionRefsCur = sectionRefs.current;
    const observer = new IntersectionObserver(getActiveSection, options);
    sectionRefsCur.forEach((section) => observer.observe(section));

    return () =>
      sectionRefsCur.forEach((section) => observer.unobserve(section));
  }, [sectionRefs]);

  const scrollToSection = (id: string) => {
    const sectionToScroll = sectionRefs.current.findIndex(
      (elem) => elem.id === id
    );
    sectionRefs.current[sectionToScroll].scrollIntoView();
  };

  return (
    <>
      <nav className={styles._nav} ref={nav}>
        <ul className={styles._nav_links}>
          {sectionsName.map((section, i) => {
            const text = getSectionId(section);
            return (
              <Link
                key={text}
                isActive={activeSection === text}
                {...{ scrollToSection, text }}
              />
            );
          })}
        </ul>
      </nav>
      <HamMenu navRef={nav} />
    </>
  );
};

export default Navbar;
