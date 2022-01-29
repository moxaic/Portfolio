import { MouseEvent, RefObject, useRef } from "react";

import Menu from "@/images/menu.svg";
import styles from "../navbar.module.css";

type Props = {
  navRef: RefObject<HTMLElement>;
};

const HamMenu = ({ navRef }: Props) => {
  const menu = useRef<HTMLDivElement>(null);

  const onClickHandler = (_: MouseEvent<HTMLDivElement>) => {
    if (navRef && navRef.current) {
      if (menu.current?.classList.contains(styles._open)) {
        navRef.current.style.transform = "translateY(-110%)";
      } else {
        navRef.current.style.transform = "translateY(0)";
      }
    }
    menu.current?.classList.toggle(styles._open);
  };

  return (
    <div className={styles._ham_menu} onClick={onClickHandler} ref={menu}>
      <Menu />
    </div>
  );
};

export default HamMenu;
