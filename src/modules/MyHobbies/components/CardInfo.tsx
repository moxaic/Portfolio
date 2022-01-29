import { Image, ParallaxElem, StrokeText } from "@/components";
import { useMediaQuery } from "@/hooks";
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

const breakpoints = [BREAKPOINT.MOBILE, BREAKPOINT.TAB_LARGE];

const CardInfo = ({ cta, ctaText, decoImg, quote, quoteBy, text }: Props) => {
  const [isMobile, isTab] = useMediaQuery(breakpoints);

  return (
    <div className={styles._card_info}>
      {!isMobile && (
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
      {!isTab && (
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
