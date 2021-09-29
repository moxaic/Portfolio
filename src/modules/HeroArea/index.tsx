import Image from "next/image";

import { CallToActionPng, HiPng } from "../../utils/images";
import Grid from "../../components/Grid";
import styles from "./heroArea.module.css";

const HeroArea = () => {
  return (
    <>
      <Grid>
        {[
          <div className={styles.leftCol} key="hero-area-left-col">
            <div>
              <Image alt="hi" src={HiPng} />
            </div>
          </div>,
          <div key="hero-area-right-col">
            <h1>
              I&apos;m Aditya
              <br />
              Srivastava
            </h1>
            <p className={styles.shortDesc}>
              I design websites that are fast and responsive. Whatever your
              business needs are, I am up for it.
            </p>
          </div>,
        ]}
      </Grid>
      <div className={styles.cta}>
        <Image alt="scroll down" src={CallToActionPng} />
      </div>
    </>
  );
};

export default HeroArea;
