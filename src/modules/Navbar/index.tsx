import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { useVisibleSection } from "@/hooks";
import Link from "./components/Link";
import Menu from "./components/Menu";
import styles from "./navbar.module.css";

type Props = {
  sectionsRef: MutableRefObject<HTMLElement[]>;
};

const Navbar = ({ sectionsRef }: Props) => {
  const [links, setLinks] = useState<string[]>();
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setLinks(sectionsRef.current.map(({ id }) => id));
  }, [sectionsRef]);

  const scrollToSection = useCallback(
    (id: string) => {
      const sectionToScroll = sectionsRef.current.findIndex(
        (elem) => elem.id === id
      );
      sectionsRef.current[sectionToScroll].scrollIntoView();
    },

    [sectionsRef]
  );

  const onClickHandler = () => {
    navRef.current?.classList.toggle(styles._open);
    menuRef.current?.classList.toggle(styles._open);
    menuRef.current?.classList.toggle(styles._hide);
  };

  useEffect(() => {
    const activeSection = sessionStorage.getItem("activeSection");
    if (activeSection) {
      scrollToSection(activeSection);
    }
  }, [scrollToSection]);

  useVisibleSection(sectionsRef.current);

  return (
    <>
      <nav className={styles._nav} ref={navRef}>
        <ul className={styles._nav_links}>
          {links?.map((link) => (
            <Link
              key={link}
              menuOnClickHandler={onClickHandler}
              text={link}
              {...{ scrollToSection }}
            />
          ))}
        </ul>
      </nav>
      <Menu ref={menuRef} {...{ onClickHandler }} />
    </>
  );
};

export default Navbar;
