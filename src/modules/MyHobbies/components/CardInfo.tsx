import { ParallaxEl, StrokeText } from "../../../components";
import styles from "../my_hobbies.module.css";
import { CardCta } from ".";

type Props = {
  cta: string;
  quote: string;
  quoteBy: string;
  text: string;
  textCta: string;
};

const CardInfo = ({ cta, quote, quoteBy, text, textCta }: Props) => {
  return (
    <div className={styles._card_info}>
      <ParallaxEl translateZ={6}>
        <StrokeText moduleClass={styles._heading} {...{ quoteBy }}>
          {quote}
        </StrokeText>
      </ParallaxEl>
      <ParallaxEl translateZ={-2}>
        <p>{text}</p>
      </ParallaxEl>
      <CardCta {...{ cta, textCta }} />
    </div>
  );
};

export default CardInfo;
