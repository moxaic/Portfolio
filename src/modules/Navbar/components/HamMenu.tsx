import { MouseEvent, RefObject, useRef } from "react";

import Menu from "@/images/menu.svg";
import styles from "../navbar.module.css";

type Props = {
  navRef: RefObject<HTMLElement>;
};

const HamMenu = ({ navRef }: Props) => {
  const menu = useRef<HTMLDivElement>(null);

  const onClickHandler = (_: MouseEvent<HTMLDivElement>) => {
    menu.current?.classList.toggle(styles._open);
    navRef.current?.classList.toggle(styles._open);
  };

  return (
    <div className={styles._ham_menu} onClick={onClickHandler} ref={menu}>
      <Menu />
    </div>
  );
};

export default HamMenu;
