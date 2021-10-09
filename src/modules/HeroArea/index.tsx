import Image from "next/image";

import { CallToActionPng, HiPng } from "../../utils/images";
import Grid from "../../components/Grid";
import ParallaxEl from "../../components/ParallaxEl";
import styles from "./heroArea.module.css";

const HeroArea = () => {
  return (
    <>
      <Grid>
        {[
          <div className={styles.leftCol} key="hero-area-left-col">
            <ParallaxEl translateZ={-5}>
              <Image alt="hi" src={HiPng} />
            </ParallaxEl>
          </div>,
          <div key="hero-area-right-col">
            <ParallaxEl translateZ={-30}>
              <h1>
                I&apos;m Aditya
                <br />
                Srivastava
              </h1>
            </ParallaxEl>
            <p className={styles.shortDesc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              possimus inventore recusandae ipsam quibusdam, quo voluptatibus
              iure non quisquam obcaecati officia exercitationem. Inventore,
              beatae. Quos totam sed aliquid dignissimos commodi!
            </p>
          </div>,
        ]}
      </Grid>
      <ParallaxEl moduleClass={styles.cta} translateZ={-10}>
        <Image alt="scroll down" src={CallToActionPng} />
      </ParallaxEl>
    </>
  );
};

export default HeroArea;
