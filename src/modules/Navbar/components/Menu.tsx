import { forwardRef, ForwardedRef } from "react";

import HamMenu from "@/images/menu.svg";
import styles from "../navbar.module.css";

type Props = {
  onClickHandler: () => void;
};

const Menu = forwardRef(
  ({ onClickHandler }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button className={styles._menu} onClick={onClickHandler} ref={ref}>
        <HamMenu />
      </button>
    );
  }
);

Menu.displayName = "Menu";
export default Menu;
