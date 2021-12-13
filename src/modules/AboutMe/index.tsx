import CreatorSvg from "../../assets/images/creator.svg";
import iceCreamBarPng from "../../assets/images/ice_cream_bar.png";
import iceCrystalPng from "../../assets/images/ice_crystal.png";
import maskPng from "../../assets/images/mask.png";
import questionMarkPng from "../../assets/images/question_mark.png";
import { Grid, Image, ParallaxEl, StrokeText } from "../../components";
import styles from "./about_me.module.css";

const AboutMe = () => {
  return (
    <>
      <Grid>
        {[
          <div className={styles._left_col} key="about-me-left-col">
            <ParallaxEl translateZ={7}>
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
            translateZ={-2}
          >
            <CreatorSvg />
          </ParallaxEl>,
        ]}
      </Grid>
      <ParallaxEl translateZ={-45} moduleClass={styles._question}>
        <Image alt="" src={questionMarkPng} />
      </ParallaxEl>
      <ParallaxEl translateZ={-10} moduleClass={styles._face}>
        <Image alt="" src={maskPng} />
      </ParallaxEl>
      <ParallaxEl translateZ={-20} moduleClass={styles._ice_crystal}>
        <Image alt="" src={iceCrystalPng} />
      </ParallaxEl>
      <ParallaxEl translateZ={30} moduleClass={styles._ice_cream}>
        <Image alt="" src={iceCreamBarPng} />
      </ParallaxEl>
    </>
  );
};

export default AboutMe;
