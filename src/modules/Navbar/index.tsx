import { MutableRefObject, useEffect, useRef } from "react";

import { useScreenSize } from "@/contexts";
import { useVisibleSection } from "@/hooks";
import { BREAKPOINT } from "@/utils/constants";
import HamMenu from "./components/HamMenu";
import Link from "./components/Link";
import styles from "./navbar.module.css";

type Props = {
  sectionsRef: MutableRefObject<HTMLElement[]>;
};

const Navbar = ({ sectionsRef }: Props) => {
  const nav = useRef<HTMLElement>(null);
  const visibleSection = useVisibleSection(sectionsRef.current);
  const screenSize = useScreenSize();

  useEffect(() => {
    const navCur = nav && nav.current;
    if (navCur) {
      const onWheelHandler = (e: Event) => {
        e.preventDefault();
      };

      navCur.style.height = `${window.innerHeight}px`;
      navCur.addEventListener("wheel", onWheelHandler);
      return () => navCur.removeEventListener("wheel", onWheelHandler);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const sectionToScroll = sectionsRef.current.findIndex(
      (elem) => elem.id === id
    );
    sectionsRef.current[sectionToScroll].scrollIntoView();
  };

  return (
    <>
      <nav className={styles._nav} ref={nav}>
        <ul className={styles._nav_links}>
          {sectionsRef.current.map(({ id: text }) => {
            return (
              <Link
                key={text}
                isActive={visibleSection === text}
                {...{ scrollToSection, text }}
              />
            );
          })}
        </ul>
      </nav>
      {screenSize! < BREAKPOINT.LAPTOP_SMALL && <HamMenu navRef={nav} />}
    </>
  );
};

export default Navbar;
