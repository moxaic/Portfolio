import styles from "../myHobbies.module.css";
import { CardImg, CardInfo } from ".";

type Props = {
  alt: string;
  heading: string;
  src: StaticImageData;
  text: string;
};

const Card = ({ alt, heading, src, text }: Props) => {
  return (
    <div className={styles.card}>
      <CardImg {...{ alt, src }} />
      <CardInfo {...{ heading, text }} />
    </div>
  );
};

export default Card;
