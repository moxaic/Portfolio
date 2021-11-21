import Image from "next/image";

import { ParallaxEl } from "../../../components";
import styles from "../myHobbies.module.css";

type Props = {
  alt: string;
  src: StaticImageData;
};

const CardImg = ({ alt, src }: Props) => {
  return (
    <ParallaxEl moduleClass={styles.cardImg} translateZ={4}>
      <Image {...{ alt, src }} />
    </ParallaxEl>
  );
};

export default CardImg;
