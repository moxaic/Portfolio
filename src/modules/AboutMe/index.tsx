import CreatorSvg from "@/images/creator.svg";
import iceCreamBarPng from "@/images/ice_cream_bar.png";
import iceCrystalPng from "@/images/ice_crystal.png";
import maskPng from "@/images/mask.png";
import questionMarkPng from "@/images/question_mark.png";
import { Grid, Image, ParallaxElem, StrokeText } from "@/components";
import { useScreenSize } from "@/contexts";
import { BREAKPOINT } from "@/utils/constants";
import styles from "./about_me.module.css";

const AboutMe = () => {
  const screenSize = useScreenSize();

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
                {/* I am a computer science undergraduate, who enjoys building
                standalone apps. I love to work with react and it&apos;s mobile
                counterpart: react native. I have plenty of experience when it
                comes to working with industry level app. On my free days I
                enjoy travelling. To know more about me, keep scrolling. */}
                {/* I love to work with web and mobile technology. When I'm not working on clients' websites, I like programming to learn new things and build things that challenge my skills. My interests include: animation, audio synthesis, computer vision and generative algorithms. */}
                {/* Hello and Welcome to my profile! I am interested in your work and would like to work with you. I have 5+ years of experience building cross-platform (native and mobile web) products. I’m truly passionate about Open Source, contributing to the community and believe in learning new things every day. My expertise lies on Front-end development using React JS and React Native and I also have vast experience on Mobile development using iOS Swift or Objective C. On the backend side, I love working with NodeJS, Python/Django, NodeJs Express etc, If you have any questions or need any clarifications regarding my profile, please get back to me anytime. */}
                {/* Trying to create user friendly and highly scalable applications is what I am good at. I have passion to learn new technologies and work on them. I have experience when it comes to working on industry-level apps, building standalone apps as well as react native apps. Apart from this, I also like to travel a lot and try new experiences. */}
                Creative, imaginative, gracious and emotional - traits of a
                pisces🐟, add lazy to the list and that&apos;s pretty much me🙋‍♂️.
                I am very passionate about coding and love to learn new skills
                in my free time. I have plenty of experience working with
                industry level apps. While I am mostly a modern day vampire🧛, I
                do enjoy going on walks🌿 (when I am done busting my head🧠 in
                front of a laptop screen). Cricket🏏, badminton🏸 and chess♟️
                are my favourite sports.
              </p>
            </ParallaxElem>
          </div>,
          <div className={styles._right_col} key="about-me-right-col">
            <CreatorSvg className={styles._my_img} />
          </div>,
        ]}
      </Grid>
      <ParallaxElem translateZ={-10} moduleClass={styles._face}>
        <Image alt="" src={maskPng} />
      </ParallaxElem>
      {screenSize! > BREAKPOINT.TAB_LARGE && (
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
