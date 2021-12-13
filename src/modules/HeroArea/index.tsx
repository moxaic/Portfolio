import { useEffect, useRef } from "react";

import arrowsPng from "../../assets/images/arrows.png";
import hiPng from "../../assets/images/hi.png";
import getNumValue from "../../utils/getNumValue";
import { Grid, Image, ParallaxEl } from "../../components";
import { useCssVariable } from "../../hooks";
import styles from "./hero_area.module.css";

const h1Vars = ["margin-top"];

const HeroArea = () => {
  const imgCtn = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const [paddingTop] = useCssVariable("h1", h1Vars);

  useEffect(() => {
    const imgCtnCurr = imgCtn && imgCtn.current;
    const rightColCurr = rightCol && rightCol.current;
    if (imgCtnCurr && rightColCurr && paddingTop) {
      const padTopVal = getNumValue(paddingTop, "px");
      console.log(padTopVal);
      imgCtnCurr.style.width = `${rightColCurr.clientHeight - padTopVal}px`;
      console.log(rightCol);
    }
  }, [paddingTop]);

  return (
    <>
      <Grid>
        {[
          <div className={styles._left_col} key="hero-area-left-col">
            <div className={styles._img_container} ref={imgCtn}>
              <ParallaxEl translateZ={-20}>
                <Image alt="hi" src={hiPng} />
              </ParallaxEl>
            </div>
          </div>,
          <div key="hero-area-right-col" ref={rightCol}>
            <ParallaxEl translateZ={-25}>
              <h1>
                I&apos;m Aditya
                <br />
                Srivastava
              </h1>
            </ParallaxEl>
            <p className={styles._short_desc}>
              I make your designs come true. Yet another developer for hire.
              Full stack web developer and app developer.
            </p>
            <p>
              <u>P.S.</u> Don&apos;t miss the easter egg.
            </p>
          </div>,
        ]}
      </Grid>
      <div className={styles._cta}>
        <ParallaxEl translateZ={-10}>
          <Image alt="scroll down" src={arrowsPng} />
        </ParallaxEl>
      </div>
    </>
  );
};

export default HeroArea;
