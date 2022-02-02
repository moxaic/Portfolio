import { Image, ParallaxElem, StrokeText } from "@/components";
import { useScreenSize } from "@/contexts";
import { BREAKPOINT } from "@/utils/constants";
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
  const screenSize = useScreenSize();

  return (
    <div className={styles._card_info}>
      {screenSize! > BREAKPOINT.MOBILE && (
        <ParallaxElem moduleClass={styles._heading_ctn} translateZ={10}>
          <StrokeText moduleClass={styles._heading} {...{ quoteBy }}>
            {quote}
          </StrokeText>
        </ParallaxElem>
      )}
      <p>{text}</p>
      <ParallaxElem moduleClass={styles._button_ctn} translateZ={2}>
        <CardCta {...{ cta, ctaText }} />
      </ParallaxElem>
      {screenSize! > BREAKPOINT.TAB_LARGE && (
        <div className={styles._deco_img}>
          <ParallaxElem translateZ={-15}>
            <Image alt="" src={decoImg} />
          </ParallaxElem>
        </div>
      )}
    </div>
  );
};

export default CardInfo;
