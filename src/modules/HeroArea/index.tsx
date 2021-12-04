import Image from "next/image";

import { callToActionPng, hiPng } from "../../utils/images";
import Grid from "../../components/Grid";
import ParallaxEl from "../../components/ParallaxEl";
import styles from "./hero_area.module.css";

const HeroArea = () => {
  return (
    <>
      <Grid>
        {[
          <div className={styles._left_col} key="hero-area-left-col">
            <div>
              <Image
                alt="hi"
                layout="responsive"
                height={1}
                width={1}
                src={hiPng.src}
              />
            </div>
          </div>,
          <div key="hero-area-right-col">
            <ParallaxEl translateZ={-27}>
              <h1>
                I&apos;m Aditya
                <br />
                Srivastava
              </h1>
            </ParallaxEl>
            <p className={styles._short_desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              possimus inventore recusandae ipsam quibusdam, quo voluptatibus
              iure non quisquam obcaecati officia exercitationem. Inventore,
              beatae. Quos totam sed aliquid dignissimos commodi!
            </p>
          </div>,
        ]}
      </Grid>
      <div className={styles._cta}>
        <ParallaxEl translateZ={-10}>
          <Image
            alt="scroll down"
            layout="responsive"
            src={callToActionPng.src}
          />
        </ParallaxEl>
      </div>
    </>
  );
};

export default HeroArea;
