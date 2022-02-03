import { useEffect, useRef } from "react";

import fingerPng from "@/images/finger.png";
import LogoSvg from "@/images/logo.svg";
import { Image } from "@/components";
import { BREAKPOINT } from "@/utils/constants";
import GlassIcon from "./components/GlassIcon";
import { socialMediaLinks } from "./data";
import styles from "./footer.module.css";

const Footer = () => {
  const fingerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fingerCur = fingerRef && fingerRef.current;
    const footerCur = footerRef && footerRef.current;

    if (footerCur) {
      const magicNum = 18;
      const magicNumOver90 = 30;
      let touchStart: number;

      const touchStartHandler = (e: TouchEvent) => {
        touchStart = e.changedTouches[0].pageY;
        e.preventDefault();
      };

      const touchEndHandler = (e: TouchEvent) => {
        const touchEnd = e.changedTouches[0].pageY;
        e.preventDefault();
        if (touchEnd - touchStart > 0) {
          scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      const onWheelHandler = (e: WheelEvent) => {
        e.preventDefault();
        if (e.deltaY < 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      const onMouseMoveHandler = ({ clientX, clientY }: MouseEvent) => {
        let rotate: string;
        let translate: number;
        const rotationDeg =
          Math.atan(clientX / (innerHeight - clientY)) * (180 / Math.PI);
        translate = (160 / 180) * (rotationDeg + magicNum);
        if (rotationDeg + magicNum < 90) {
          rotate = `${rotationDeg + magicNum}deg`;
          fingerCur!.style.transform = `rotate(${rotate}) translate(${-translate}px)`;
        } else {
          rotate = `${rotationDeg + magicNumOver90}deg`;
          fingerCur!.style.transform = `rotate(${rotate}) translate(${
            -translate - 10
          }px, ${translate}px)`;
        }
      };

      footerCur.addEventListener("touchstart", touchStartHandler);
      footerCur.addEventListener("touchend", touchEndHandler);
      footerCur.addEventListener("wheel", onWheelHandler);
      if (fingerCur) {
        footerCur.addEventListener("mousemove", onMouseMoveHandler);
      }
      return () => {
        footerCur.removeEventListener("touchstart", touchStartHandler);
        footerCur.removeEventListener("touchend", touchEndHandler);
        footerCur.removeEventListener("wheel", onWheelHandler);
        footerCur.removeEventListener("mousemove", onMouseMoveHandler);
      };
    }
  }, []);

  return (
    <footer ref={footerRef}>
      <div className={styles._content}>
        <h1>Thanks for visiting</h1>
        {innerWidth > BREAKPOINT.MOBILE && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id sit
            fugiat nostrum consequatur cupiditate exercitationem magnam deserunt
            recusandae at blanditiis, natus tenetur suscipit laudantium iste
            excepturi ipsam veniam totam!
          </p>
        )}
        <div className={styles._fill_space}>
          {/* <div className={styles._stage}>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
            <div className={styles._layer}></div>
          </div> */}
          <div>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((_, i) => (
              <div
                key={i}
                className={styles._test}
                style={{ transform: `translateZ(${i * 20}px)` }}
              />
            ))}
          </div>
        </div>
        <ul className={styles._social_links}>
          {socialMediaLinks.map(({ Icon, link, platform }) => (
            <GlassIcon key={platform} {...{ Icon, link, platform }} />
          ))}
        </ul>
      </div>
      {innerWidth > BREAKPOINT.TAB_LARGE && (
        <div className={styles._pointing_finger} ref={fingerRef}>
          <Image alt="" src={fingerPng} />
        </div>
      )}
    </footer>
  );
};

export default Footer;
