import { ParallaxEl, StrokeText } from "../../../components";
import styles from "../myHobbies.module.css";

type Props = {
  heading: string;
  text: string;
};

const CardInfo = ({ heading, text }: Props) => {
  return (
    <div className={styles.cardInfo}>
      <ParallaxEl translateZ={5}>
        <StrokeText moduleClass={styles.heading}>{heading}</StrokeText>
      </ParallaxEl>
      <ParallaxEl translateZ={-2}>
        <p>{text}</p>
      </ParallaxEl>
    </div>
  );
};

export default CardInfo;
