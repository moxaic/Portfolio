import Image from "next/image";

import { faceMaskPng, meSvg, questionMarkPng } from "../../utils/images";
import { Grid, ParallaxEl, StrokeText } from "../../components";
import styles from "./about_me.module.css";

const AboutMe = () => {
  return (
    <>
      <Grid>
        {[
          <div className={styles._left_col} key="about-me-left-col">
            <ParallaxEl translateZ={5}>
              <StrokeText>Jack of all trade, master of some</StrokeText>
            </ParallaxEl>
            <ParallaxEl translateZ={-5}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                in labore fuga dicta architecto pariatur. Doloremque ut totam
                neque consectetur, quis repudiandae iusto odio repellat
                excepturi magni omnis. Eligendi, praesentium?
              </p>
            </ParallaxEl>
          </div>,
          <ParallaxEl
            key="about-me-right-col"
            moduleClass={styles._right_col}
            translateZ={0}
          >
            <Image alt="author" src={meSvg.src} />
          </ParallaxEl>,
        ]}
      </Grid>
      <div className={styles._question}>
        <ParallaxEl translateZ={4}>
          <Image alt="who am I?" src={questionMarkPng.src} />
        </ParallaxEl>
      </div>
      <div className={styles._face}>
        <ParallaxEl translateZ={-10}>
          <Image alt="masked face" src={faceMaskPng.src} />
        </ParallaxEl>
      </div>
    </>
  );
};

export default AboutMe;
