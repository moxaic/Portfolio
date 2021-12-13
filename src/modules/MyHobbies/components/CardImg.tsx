import { Image, ParallaxEl } from "../../../components";
import styles from "../my_hobbies.module.css";

type Props = {
  alt: string;
  src: StaticImageData;
};

const CardImg = ({ alt, src }: Props) => {
  return (
    // <ParallaxEl translateZ={-2} /* moduleClass={styles._card_img_container} */>
    <div className={styles._card_img_container}>
      <ParallaxEl moduleClass={styles._card_img} translateZ={5}>
        <Image {...{ alt, src }} />
      </ParallaxEl>
    </div>
    // </ParallaxEl>
  );
};

export default CardImg;
