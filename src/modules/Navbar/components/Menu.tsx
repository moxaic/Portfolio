import { forwardRef, ForwardedRef } from "react";

import styles from "../navbar.module.css";

type Props = {
  onClickHandler: () => void;
};

const Menu = forwardRef(
  ({ onClickHandler }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button
        className={`${styles._menu} ${styles._hide}`}
        onClick={onClickHandler}
        ref={ref}
      >
        <span className={styles._bar}></span>
        <span className={styles._bar}></span>
        <span className={styles._bar}></span>
      </button>
    );
  }
);

Menu.displayName = "Menu";
export default Menu;
