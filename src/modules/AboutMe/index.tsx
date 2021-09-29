import Image from "next/image";

import { FaceMaskPng, MeSvg, QuestionMarkPng } from "../../utils/images";
import Grid from "../../components/Grid";
import styles from "./aboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <Grid>
        {[
          <div className={styles.leftCol} key="about-me-left-col">
            <h3>A jack of all trade, master of some</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae in
              labore fuga dicta architecto pariatur. Doloremque ut totam neque
              consectetur, quis repudiandae iusto odio repellat excepturi magni
              omnis. Eligendi, praesentium?
            </p>
          </div>,
          <div className={styles.rightCol} key="about-me-right-col">
            <div>
              <Image alt="author" src={MeSvg} />
            </div>
          </div>,
        ]}
      </Grid>
      <div className={styles.question}>
        <Image alt="who am I?" src={QuestionMarkPng} />
      </div>
      <div className={styles.face}>
        <Image alt="masked face" src={FaceMaskPng} />
      </div>
    </>
  );
};

export default AboutMe;
