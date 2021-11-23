import Image from "next/image";

import { handSignPeacePng, mouthPng, namastePng } from "../../utils/images";
import { GlassIcon } from "./components";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.visualContent}>
        <Image alt={namastePng.alt} src={namastePng.src} />
      </div>
      <div className={styles.mainContent}>
        <h2>Thanks for visiting</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id sit
          fugiat nostrum consequatur cupiditate exercitationem magnam deserunt
          recusandae at blanditiis, natus tenetur suscipit laudantium iste
          excepturi ipsam veniam totam!
        </p>
        <div className={styles.socialLinks}>
          <GlassIcon />
          <GlassIcon />
          <GlassIcon />
          <GlassIcon />
        </div>
      </div>
      <div className={styles.visualContent}>
        <div className={styles.handImg}>
          <Image alt={handSignPeacePng.alt} src={handSignPeacePng.src} />
        </div>
        <h3>No rights reserved</h3>
        <Image alt={mouthPng.alt} src={mouthPng.src} />
      </div>
    </footer>
  );
};

export default Footer;
