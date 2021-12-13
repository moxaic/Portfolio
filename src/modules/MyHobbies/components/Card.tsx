import styles from "../my_hobbies.module.css";
import { CardImg, CardInfo } from ".";

type Props = {
  alt: string;
  cta: string;
  ctaText: string;
  decoImg: StaticImageData;
  quote: string;
  quoteBy: string;
  src: StaticImageData;
  text: string;
};

const Card = ({ alt, src, ...rest }: Props) => {
  return (
    <div className={styles._card}>
      <CardImg {...{ alt, src }} />
      <CardInfo {...{ ...rest }} />
    </div>
  );
};

export default Card;
