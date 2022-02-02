import { useEffect, useRef } from "react";

import arrowsPng from "@/images/arrows.png";
import hiPng from "@/images/hi.png";
import { Grid, Image, ParallaxElem } from "@/components";
import { useScreenSize } from "@/contexts";
import { useCssValues, useCssVariable } from "@/hooks";
import { BREAKPOINT } from "@/utils/constants";
import Intro from "./components/Intro";
import styles from "./hero_area.module.css";

const h1Vars = ["margin-top"];
const etst = {
  ".grid h1": ["margin-top", "font-size"],
  h2: ["font-size"],
};

const HeroArea = () => {
  const leftCol = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const [marginTop] = useCssVariable("h1", h1Vars);
  const screenSize = useScreenSize();

  useCssValues(etst);

  useEffect(() => {
    const leftColCur = leftCol && leftCol.current;
    const rightColCur = rightCol && rightCol.current;
    if (leftColCur && rightColCur) {
      leftColCur.style.width = `${
        rightColCur.clientHeight -
        (rightColCur.firstChild as HTMLDivElement)?.offsetTop
      }px`;
    }
  }, []);

  return (
    <>
      <Grid>
        {screenSize! < BREAKPOINT.TAB
          ? [<Intro key="hero_area_single_col" ref={rightCol} />]
          : [
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
      {screenSize! > BREAKPOINT.TAB_LARGE && (
        <ParallaxElem translateZ={-14} moduleClass={styles._cta}>
          <Image alt="scroll down" src={arrowsPng} />
        </ParallaxElem>
      )}
    </>
  );
};

export default HeroArea;
