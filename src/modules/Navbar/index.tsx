import { MutableRefObject, useEffect, useRef, useState } from "react";

import getSectionId from "../../utils/getSectionId";
import { Link } from "./components";
import styles from "./navbar.module.css";

type Props = {
  sections: string[];
  navRefs: MutableRefObject<HTMLElement[]>;
};

const Navbar = ({ sections, navRefs }: Props) => {
  const [currSection, setCurrSection] = useState<string>(
    getSectionId(sections[0])
  );
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (nav && nav.current) {
      const navCurr = nav.current;
      const mouseWheelHandler = (e: Event) => {
        e.preventDefault();
      };
      navCurr.addEventListener("mousewheel", mouseWheelHandler);
      return () => {
        navCurr.removeEventListener("mousewheel", mouseWheelHandler);
      };
    }
  }, [sections]);

  return (
    <nav className={styles.nav} ref={nav}>
      <ul className={styles.navLinks}>
        {sections.map((section, idx) => {
          const text = getSectionId(section);
          return (
            <Link
              key={text}
              {...{ currSection, idx, navRefs, setCurrSection, text }}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
