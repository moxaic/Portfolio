import { Image, ParallaxEl, StrokeText } from "../../../components";
import styles from "../my_hobbies.module.css";
import { CardCta } from ".";

type Props = {
  cta: string;
  ctaText: string;
  decoImg: StaticImageData;
  quote: string;
  quoteBy: string;
  text: string;
};

const CardInfo = ({ cta, ctaText, decoImg, quote, quoteBy, text }: Props) => {
  return (
    <div className={styles._card_info}>
      <ParallaxEl translateZ={7}>
        <StrokeText moduleClass={styles._heading} {...{ quoteBy }}>
          {quote}
        </StrokeText>
      </ParallaxEl>
      <ParallaxEl translateZ={-2}>
        <p>{text}</p>
      </ParallaxEl>
      <CardCta {...{ cta, ctaText }} />
      <div className={styles._deco_img}>
        <ParallaxEl translateZ={-10}>
          <Image alt="" src={decoImg} />
        </ParallaxEl>
      </div>
    </div>
  );
};

export default CardInfo;
