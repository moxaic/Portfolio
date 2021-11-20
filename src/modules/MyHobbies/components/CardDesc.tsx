import { ParallaxEl, StrokeText } from "../../../components";
import styles from "../myHobbies.module.css";

type Props = {
  desc: string;
  phrase: string;
};

const CardDesc = ({ desc, phrase }: Props) => {
  return (
    <div className={styles.cardDesc}>
      <ParallaxEl translateZ={5}>
        <StrokeText>{phrase}</StrokeText>
      </ParallaxEl>
      <ParallaxEl translateZ={-2}>
        <p>{desc}</p>
      </ParallaxEl>
    </div>
  );
};

export default CardDesc;
