import Image from "next/image";

import ParallaxEl from "../../../components/ParallaxEl";
import styles from "../myHobbies.module.css";

type Props = {
  alt: string;
  src: StaticImageData;
};

const Card = ({ alt, src }: Props) => {
  return (
    // <ParallaxEl moduleClass={styles.card} translateZ={-2}>
    <ParallaxEl moduleClass={styles.card} translateZ={4}>
      <Image {...{ alt, src }} />
    </ParallaxEl>
    // </ParallaxEl>
  );
};

export default Card;
