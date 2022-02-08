import { Image, ParallaxElem, StrokeText } from "@/components";
import { useWindowWidth } from "@/contexts";
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
  const width = useWindowWidth();
  const displayDecoImg =
    width! > BREAKPOINT.LAPTOP_SMALL ||
    (width! > BREAKPOINT.TAB && width! < BREAKPOINT.TAB_LARGE);

  return (
    <div className={styles._card_info}>
      {width! > BREAKPOINT.MOBILE && (
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
      {displayDecoImg && (
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
