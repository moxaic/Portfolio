import styles from "../myHobbies.module.css";
import { CardImg, CardInfo } from ".";

type Props = {
  alt: string;
  cta: string;
  quote: string;
  quoteBy: string;
  src: StaticImageData;
  text: string;
  textCta: string;
};

const Card = ({ alt, src, ...rest }: Props) => {
  return (
    <div className={styles.card}>
      <CardImg {...{ alt, src }} />
      <CardInfo {...{ ...rest }} />
    </div>
  );
};

export default Card;
