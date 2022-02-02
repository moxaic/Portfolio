import { useEffect, useRef } from "react";

import fingerPng from "@/images/finger.png";
import { Image } from "@/components";
import { useScreenSize } from "@/contexts";
import { BREAKPOINT } from "@/utils/constants";
import GlassIcon from "./components/GlassIcon";
import { socialMediaLinks } from "./data";
import styles from "./footer.module.css";

const Footer = () => {
  const fingerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const screenSize = useScreenSize();

  useEffect(() => {
    const fingerCur = fingerRef && fingerRef.current;
    const footerCur = footerRef && footerRef.current;

    if (footerCur) {
      const magicNum = 18;
      const magicNumOver90 = 30;

      const onWheelHandler = ({ deltaY }: any) => {
        if (deltaY < 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      footerCur.addEventListener("mousewheel", onWheelHandler);

      if (fingerCur) {
        const windowHeight = window.innerHeight;

        const onMouseMoveHandler = ({ clientX, clientY }: MouseEvent) => {
          let rotate: string;
          let translate: number;
          const rotationDeg =
            Math.atan(clientX / (windowHeight - clientY)) * (180 / Math.PI);
          translate = (160 / 180) * (rotationDeg + magicNum);
          if (rotationDeg + magicNum < 90) {
            rotate = `${rotationDeg + magicNum}deg`;
            fingerCur.style.transform = `rotate(${rotate}) translate(${-translate}px)`;
          } else {
            rotate = `${rotationDeg + magicNumOver90}deg`;
            fingerCur.style.transform = `rotate(${rotate}) translate(${
              -translate - 10
            }px, ${translate}px)`;
          }
        };

        footerCur.addEventListener("mousemove", onMouseMoveHandler);
        return () => {
          footerCur.removeEventListener("mousemove", onMouseMoveHandler);
          footerCur.removeEventListener("wheel", onWheelHandler);
        };
      }
      return () => {
        footerCur.removeEventListener("wheel", onWheelHandler);
      };
    }
  }, []);

  return (
    <footer ref={footerRef}>
      <div className={styles._content}>
        <h1>Thanks for visiting</h1>
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
      {screenSize! > BREAKPOINT.TAB_LARGE && (
        <div className={styles._pointing_finger} ref={fingerRef}>
          <Image alt="" src={fingerPng} />
        </div>
      )}
    </footer>
  );
};

export default Footer;
