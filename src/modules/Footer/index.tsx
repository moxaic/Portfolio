import Image from "next/image";

import {
  handSignPeacePng,
  mouthPng,
  namastePng,
  pointingFingerPng,
} from "../../utils/images";
import { GlassIcon } from "./components";
import { socialMediaLinks } from "./data";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.visualContent}>
        {/* <Image alt={namastePng.alt} src={namastePng.src} /> */}
        <p>Consider giving me a follow</p>
        <Image alt={pointingFingerPng.alt} src={pointingFingerPng.src} />
      </div>
      <div className={styles.mainContent}>
        <h2>Thanks for visiting</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id sit
          fugiat nostrum consequatur cupiditate exercitationem magnam deserunt
          recusandae at blanditiis, natus tenetur suscipit laudantium iste
          excepturi ipsam veniam totam!
        </p>
        <p className={styles.fillsSpace}>A</p>
        <ul className={styles.socialLinks}>
          {socialMediaLinks.map(({ link, platform, svg: Svg }) => (
            <GlassIcon key={platform} {...{ link, Svg }} />
          ))}
        </ul>
      </div>
      <div className={styles.visualContent}>
        <div className={styles.handImg}>
          {/* <Image alt={handSignPeacePng.alt} src={handSignPeacePng.src} /> */}
        </div>
        <p>Aditya Srivastava</p>
        <h3>No rights reserved</h3>
        <Image alt={mouthPng.alt} src={mouthPng.src} />
      </div>
    </footer>
  );
};

export default Footer;
