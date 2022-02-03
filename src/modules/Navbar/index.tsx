import { MutableRefObject, useEffect, useRef } from "react";

import { useVisibleSection } from "@/hooks";
import Menu from "./components/Menu";
import Link from "./components/Link";
import styles from "./navbar.module.css";

type Props = {
  sectionsRef: MutableRefObject<HTMLElement[]>;
};

const Navbar = ({ sectionsRef }: Props) => {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const visibleSection = useVisibleSection(sectionsRef.current);

  useEffect(() => {
    if (navRef && navRef.current) {
      navRef.current.style.height = `${window.innerHeight}px`;
    }
  }, []);

  const scrollToSection = (id: string) => {
    const sectionToScroll = sectionsRef.current.findIndex(
      (elem) => elem.id === id
    );
    sectionsRef.current[sectionToScroll].scrollIntoView();
  };

  const onClickHandler = () => {
    menuRef.current?.classList.toggle(styles._open);
    navRef.current?.classList.toggle(styles._open);
  };

  return (
    <>
      <nav className={styles._nav} ref={navRef}>
        <ul className={styles._nav_links}>
          {sectionsRef.current.map(({ id: text }) => (
            <Link
              key={text}
              isActive={visibleSection === text}
              menuOnClickHandler={onClickHandler}
              {...{ scrollToSection, text }}
            />
          ))}
        </ul>
      </nav>
      <Menu ref={menuRef} {...{ onClickHandler }} />
    </>
  );
};

export default Navbar;
