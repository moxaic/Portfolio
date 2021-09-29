import ParallaxEl from "../../../components/ParallaxEl";
import styles from "../myHobbies.module.css";

type Props = {
  desc: string;
  phrase: string;
};

const CardDesc = ({ desc, phrase }: Props) => {
  return (
    <div className={styles.cardDesc}>
      <ParallaxEl translateZ={1}>
        <h3 className={styles.title}>{phrase}</h3>
      </ParallaxEl>
      <ParallaxEl translateZ={-2}>
        <p>{desc}</p>
      </ParallaxEl>
    </div>
  );
};

export default CardDesc;
