import { useEffect, useRef } from "react";

import fingerPng from "../../assets/images/finger.png";
import negationValue from "../../utils/negationValue";
import { Image } from "../../components";
import { useMediaQuery } from "../../hooks";
import { BREAKPOINT } from "../../utils/constants";
import GlassIcon from "./components/GlassIcon";
import { socialMediaLinks } from "./data";
import styles from "./footer.module.css";

const breakpoints = [BREAKPOINT.TAB_LARGE];

const Footer = () => {
  const fingerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [isTab] = useMediaQuery(breakpoints);
  const isNotTab = negationValue(isTab);

  useEffect(() => {
    const fingerCurr = fingerRef && fingerRef.current;
    const footerCurr = footerRef && footerRef.current;
    const windowHeight = window.innerHeight;

    if (fingerCurr && footerCurr) {
      const magicNum = 18;
      const magicNumOver90 = 30;

      const mouseMoveHandler = ({ clientX, clientY }: MouseEvent) => {
        let rotate: string;
        let translate: number;
        const rotationDeg =
          Math.atan(clientX / (windowHeight - clientY)) * (180 / Math.PI);
        translate = (160 / 180) * (rotationDeg + magicNum);
        if (rotationDeg + magicNum < 90) {
          rotate = `${rotationDeg + magicNum}deg`;
          fingerCurr.style.transform = `rotate(${rotate}) translate(${-translate}px)`;
        } else {
          rotate = `${rotationDeg + magicNumOver90}deg`;
          fingerCurr.style.transform = `rotate(${rotate}) translate(${
            -translate - 10
          }px, ${translate}px)`;
        }
      };

      footerCurr.addEventListener("mousemove", mouseMoveHandler);
      return () =>
        footerCurr.removeEventListener("mousemove", mouseMoveHandler);
    }
  }, []);

  return (
    <footer ref={footerRef}>
      <div className={styles._content}>
        <h2>Thanks for visiting</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id sit
          fugiat nostrum consequatur cupiditate exercitationem magnam deserunt
          recusandae at blanditiis, natus tenetur suscipit laudantium iste
          excepturi ipsam veniam totam!
        </p>
        <p className={styles._fill_space}>A</p>
        <ul className={styles._social_links}>
          {socialMediaLinks.map(({ Icon, link, platform }) => (
            <GlassIcon key={platform} {...{ Icon, link, platform }} />
          ))}
        </ul>
      </div>
      {isNotTab && (
        <div className={styles._pointing_finger} ref={fingerRef}>
          <Image alt="" src={fingerPng} />
        </div>
      )}
    </footer>
  );
};

export default Footer;
