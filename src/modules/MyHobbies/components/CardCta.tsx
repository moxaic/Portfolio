import { useEffect, useRef } from "react";

import styles from "../myHobbies.module.css";

type Props = {
  cta: string;
  textCta: string;
};

const CardCta = ({ cta, textCta }: Props) => {
  const btn = useRef<HTMLAnchorElement>(null);
  const textBtn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (btn && btn.current && textBtn && textBtn.current) {
      const btnCurr = btn.current;
      const textBtnCurr = textBtn.current;
      const { height, width } = btnCurr.getClientRects()[0];
      const xCenter = width / 2;
      const yCenter = height / 2;

      const mouseMoveHandler = ({ offsetX, offsetY }: MouseEvent) => {
        const translateX = (offsetX - xCenter) / 4.5;
        const translateY = (offsetY - yCenter) / 3.5;
        textBtnCurr.style.transform = `translate(${translateX}px, ${translateY}px)`;
      };

      const mouseLeaveHandler = (_: MouseEvent) => {
        textBtnCurr.style.transform = "translate(0, 0)";
      };

      btnCurr.addEventListener("mousemove", mouseMoveHandler);
      btnCurr.addEventListener("mouseleave", mouseLeaveHandler);
      return () => {
        btnCurr.removeEventListener("mousemove", mouseMoveHandler);
        btnCurr.removeEventListener("mouseleave", mouseLeaveHandler);
      };
    }
  }, []);

  return (
    <a className={styles.cardCta} href={cta} ref={btn}>
      <div className={styles.ctaText} ref={textBtn}>
        {textCta}
      </div>
    </a>
  );
};

export default CardCta;
