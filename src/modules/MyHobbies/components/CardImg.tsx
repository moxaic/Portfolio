import { Image, ParallaxElem } from "../../../components";
import styles from "../my_hobbies.module.css";

type Props = {
  alt: string;
  src: StaticImageData;
};

const CardImg = ({ alt, src }: Props) => {
  return (
    <ParallaxElem moduleClass={styles._card_img} translateZ={6}>
      <Image {...{ alt, src }} />
    </ParallaxElem>
  );
};

export default CardImg;
