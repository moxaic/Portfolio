import { MutableRefObject, useState } from "react";
import Logo from "../../components/Logo";
import styles from "./navbar.module.css";

import Link from "./components/Link";

type Props = {
  sections: string[];
  refs: MutableRefObject<HTMLElement[]>;
};

const Navbar = ({ sections, refs }: Props) => {
  const [currSection, setCurrSection] = useState<string>();

  return (
    <nav className={styles.nav}>
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
