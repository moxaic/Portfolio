import Image from "next/image";

import { ParallaxEl } from "../../../components";
import styles from "../myHobbies.module.css";

type Props = {
  alt: string;
  src: StaticImageData;
};

const CardImg = ({ alt, src }: Props) => {
  return (
    <div className={styles.cardImgContainer}>
      <ParallaxEl moduleClass={styles.cardImg} translateZ={5}>
        <Image priority={true} {...{ alt, src }} />
      </ParallaxEl>
    </div>
  );
};

export default CardImg;
