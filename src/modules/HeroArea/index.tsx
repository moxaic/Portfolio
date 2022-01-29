import { useEffect, useRef } from "react";

import arrowsPng from "@/images/arrows.png";
import hiPng from "@/images/hi.png";
import { Grid, Image, ParallaxElem } from "@/components";
import { useCssVariable, useMediaQuery } from "@/hooks";
import { BREAKPOINT } from "@/utils/constants";
import getNegationValue from "@/utils/getNegationValue";
import getNumValue from "@/utils/getNumValue";
import Intro from "./components/Intro";
import styles from "./hero_area.module.css";

const h1Vars = ["margin-top"];
const breakpoints = [BREAKPOINT.TAB, BREAKPOINT.TAB_LARGE];

const HeroArea = () => {
  const leftCol = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const [paddingTop] = useCssVariable("h1", h1Vars);
  const [isTabP, isTab] = useMediaQuery(breakpoints);
  const isNotTabP = getNegationValue(isTabP);
  const isNotTab = getNegationValue(isTab);

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
      {isTabP && (
        <Grid>{[<Intro key="hero_area_single_col" ref={rightCol} />]}</Grid>
      )}
      {isNotTabP && (
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
