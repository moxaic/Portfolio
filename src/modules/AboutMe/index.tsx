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
      <div className={styles._question}>
        <ParallaxEl translateZ={-45}>
          <Image alt="" src={questionMarkPng} />
        </ParallaxEl>
      </div>
      <div className={styles._face}>
        <ParallaxEl translateZ={-10}>
          <Image alt="" src={maskPng} />
        </ParallaxEl>
      </div>
      <div className={styles._ice_crystal}>
        <ParallaxEl translateZ={-20}>
          <Image alt="" src={iceCrystalPng} />
        </ParallaxEl>
      </div>
      <div className={styles._ice_cream}>
        <ParallaxEl translateZ={30}>
          <Image alt="" src={iceCreamBarPng} />
        </ParallaxEl>
      </div>
    </>
  );
};

export default AboutMe;
