import Image from "next/image";

import { ParallaxEl } from "../../../components";
import styles from "../my_hobbies.module.css";

type Props = {
  alt: string;
  src: StaticImageData;
};

const CardImg = ({ alt, src }: Props) => {
  return (
    <div className={styles._card_img_container}>
      <ParallaxEl moduleClass={styles._card_img} translateZ={5}>
        <Image priority={true} {...{ alt, src }} />
      </ParallaxEl>
    </div>
  );
};

export default CardImg;
