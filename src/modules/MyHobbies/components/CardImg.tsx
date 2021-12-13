import { Image, ParallaxEl } from "../../../components";
import styles from "../my_hobbies.module.css";

type Props = {
  alt: string;
  src: StaticImageData;
};

const CardImg = ({ alt, src }: Props) => {
  return (
    // <ParallaxEl translateZ={-2}>
    <ParallaxEl moduleClass={styles._card_img} translateZ={5}>
      <Image {...{ alt, src }} />
    </ParallaxEl>
    // </ParallaxEl>
  );
};

export default CardImg;
