import { useEffect, useRef } from "react";

import arrowsPng from "../../assets/images/arrows.png";
import hiPng from "../../assets/images/hi.png";
import { Grid, Image, ParallaxElem } from "../../components";
import { useCssVariable, useMediaQuery } from "../../hooks";
import getNumValue from "../../utils/getNumValue";
import negationValue from "../../utils/negationValue";
import { BREAKPOINT } from "../../utils/constants";
import Intro from "./components/Intro";
import styles from "./hero_area.module.css";

const h1Vars = ["margin-top"];
const breakpoints = [BREAKPOINT.MOBILE, BREAKPOINT.TAB_LARGE];

const HeroArea = () => {
  const leftCol = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const [paddingTop] = useCssVariable("h1", h1Vars);
  const [isMobile, isTab] = useMediaQuery(breakpoints);
  const isNotMobile = negationValue(isMobile);
  const isNotTab = negationValue(isTab);

  useEffect(() => {
    const leftColCur = leftCol && leftCol.current;
    const rightColCur = rightCol && rightCol.current;
    if (leftColCur && rightColCur && paddingTop) {
      const padTopVal = getNumValue(paddingTop, "px");
      leftColCur.style.width = `${rightColCur.clientHeight - padTopVal}px`;
    }
  }, [paddingTop]);

  return (
    <>
      {isMobile && (
        <Grid>{[<Intro key="hero_area_single_col" ref={rightCol} />]}</Grid>
      )}
      {isNotMobile && (
        <Grid>
          {[
            <div
              className={styles._left_col}
              key="hero_area_left_col"
              ref={leftCol}
            >
              <ParallaxElem translateZ={-30}>
                <Image alt="hi" src={hiPng} />
              </ParallaxElem>
            </div>,
            <Intro key="hero_area_right_col" ref={rightCol} />,
          ]}
        </Grid>
      )}
      {isNotTab && (
        <ParallaxElem translateZ={-14} moduleClass={styles._cta}>
          <Image alt="scroll down" src={arrowsPng} />
        </ParallaxElem>
      )}
    </>
  );
};

export default HeroArea;
