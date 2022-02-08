import CreatorSvg from "@/images/creator.svg";
import iceCreamBarPng from "@/images/ice_cream_bar.png";
import iceCrystalPng from "@/images/ice_crystal.png";
import maskPng from "@/images/mask.png";
import questionMarkPng from "@/images/question_mark.png";
import { Grid, Image, ParallaxElem, StrokeText } from "@/components";
import { useWindowWidth } from "@/contexts";
import { BREAKPOINT } from "@/utils/constants";
import styles from "./about_me.module.css";

const AboutMe = () => {
  const width = useWindowWidth();

  return (
    <>
      <Grid>
        {[
          <div className={styles._left_col} key="about-me-left-col">
            <ParallaxElem translateZ={7}>
              <StrokeText>Jack of all trade, master of some</StrokeText>
            </ParallaxElem>
            <ParallaxElem translateZ={-5}>
              <p>
                Creative, imaginative, gracious and emotional - traits of a
                pisces🐟, add lazy to the list and that&apos;s pretty much me🙋‍♂️.
                I am very passionate about coding and love to learn new skills
                in my free time. I have plenty of experience working with
                industry level apps. When I am not banging my head🧠 in front of
                a laptop screen, I enjoy spending time outdoors🌿. Cricket🏏,
                badminton🏸 and chess♟️ are my favourite sports.
              </p>
            </ParallaxElem>
          </div>,
          <div className={styles._right_col} key="about-me-right-col">
            <ParallaxElem translateZ={-10}>
              <CreatorSvg className={styles._my_img} />
            </ParallaxElem>
          </div>,
        ]}
      </Grid>
      <ParallaxElem translateZ={-10} moduleClass={styles._face}>
        <Image alt="" src={maskPng} />
      </ParallaxElem>
      {width! > BREAKPOINT.TAB_LARGE && (
        <>
          <ParallaxElem translateZ={-45} moduleClass={styles._question}>
            <Image alt="" src={questionMarkPng} />
          </ParallaxElem>
          <ParallaxElem translateZ={-20} moduleClass={styles._ice_crystal}>
            <Image alt="" src={iceCrystalPng} />
          </ParallaxElem>
          <ParallaxElem translateZ={15} moduleClass={styles._ice_cream}>
            <Image alt="" src={iceCreamBarPng} />
          </ParallaxElem>
        </>
      )}
    </>
  );
};

export default AboutMe;
