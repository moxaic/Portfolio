import { useEffect, useRef } from "react";

import fingerPng from "@/images/finger.png";
import LogoSvg from "@/images/logo.svg";
import { Image } from "@/components";
import { useWindowWidth } from "@/contexts";
import { BREAKPOINT } from "@/utils/constants";
import GlassIcon from "./components/GlassIcon";
import { socialMediaLinks } from "./data";
import styles from "./footer.module.css";

const Footer = () => {
  const width = useWindowWidth();
  const fingerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const prevRatio = useRef(0);

  useEffect(() => {
    const fingerCur = fingerRef && fingerRef.current;
    const footerCur = footerRef && footerRef.current;

    if (footerCur) {
      // footerCur.style.height = window.innerHeight + "px";

      const observer = new IntersectionObserver(
        (entries) => {
          const [{ intersectionRatio }] = entries;
          if (intersectionRatio <= prevRatio.current) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }
          prevRatio.current = intersectionRatio;
        },
        {
          threshold: [0, 0.1, 0.8, 0.9],
        }
      );
      const magicNum = 18;
      const magicNumOver90 = 30;
      let touchStart: number;

      observer.observe(footerCur);

      const touchStartHandler = (e: TouchEvent) => {
        touchStart = e.changedTouches[0].pageY;
      };

      const touchEndHandler = (e: TouchEvent) => {
        const touchEnd = e.changedTouches[0].pageY;
        if (touchEnd - touchStart > 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      const onWheelHandler = (e: WheelEvent) => {
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
          fingerCur!.style.transform = `rotate(${rotate}) translateX(${-translate}px)`;
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
        {width! > BREAKPOINT.MOBILE && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id sit
            fugiat nostrum consequatur cupiditate exercitationem magnam deserunt
            recusandae at blanditiis, natus tenetur suscipit laudantium iste
            excepturi ipsam veniam totam!
          </p>
        )}
        <div className={styles._fill_space}>
          <div>
            <LogoSvg />
          </div>
        </div>
        <ul className={styles._social_links}>
          {socialMediaLinks.map(({ Icon, link, platform }) => (
            <GlassIcon key={platform} {...{ Icon, link, platform }} />
          ))}
        </ul>
      </div>
      {width! > BREAKPOINT.TAB_LARGE && (
        <div className={styles._pointing_finger} ref={fingerRef}>
          <Image alt="" src={fingerPng} />
        </div>
      )}
    </footer>
  );
};

export default Footer;
