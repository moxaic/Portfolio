import { ForwardedRef, forwardRef } from "react";
import { ParallaxElem } from "../../../components";
import styles from "../hero_area.module.css";

const Intro = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div {...{ ref }}>
      <ParallaxElem translateZ={-25}>
        <h1 className={styles._intro_text}>
          I&apos;m Aditya
          <br />
          Srivastava
        </h1>
      </ParallaxElem>
      <p className={styles._short_desc}>
        A computer science engineer🎓 with knack for building standalone apps. I
        write code that solves more problem than it creates🪲. I have 2+ years of
        experience working as a full-stack web and app developer. I&apos;d love
        to work with you on your next creative project.
      </p>
    </div>
  );
});

Intro.displayName = "Intro";
export default Intro;
