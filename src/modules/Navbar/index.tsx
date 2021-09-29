import { MutableRefObject, useEffect, useRef, useState } from "react";
import Logo from "../../components/Logo";
import styles from "./navbar.module.css";

import Link from "./components/Link";

type Props = {
  sections: string[];
  refs: MutableRefObject<HTMLElement[]>;
};

const Navbar = ({ sections, refs }: Props) => {
  const [currSection, setCurrSection] = useState<string>();
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (nav && nav.current) {
      const navCurr = nav.current;
      const mouseWheelHandler = (e: any) => {
        console.log(e);
        e.preventDefault();
      };
      navCurr.addEventListener("mousewheel", mouseWheelHandler);
      return () => {
        navCurr.removeEventListener("mousewheel", mouseWheelHandler);
      };
    }
  }, []);

  return (
    <nav className={styles.nav} ref={nav}>
      <Logo />
      <ul className={styles.navLinks}>
        {sections.map((section, idx) => (
          <Link key={section} text={section} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
