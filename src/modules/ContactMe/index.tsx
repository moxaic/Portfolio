import chatPng from "@/images/chat.png";
import iceCreamConePng from "@/images/ice_cream_cone.png";
import likedPostPng from "@/images/liked_post.png";
import { Grid, Image, ParallaxElem, StrokeText } from "@/components";
import { useWindowWidth } from "@/contexts";
import { BREAKPOINT } from "@/utils/constants";
import { Form } from "./components";
import styles from "./contact_me.module.css";

const ContactMe = () => {
  const width = useWindowWidth();

  const onClickHandler = (e: any) => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <Grid>
        {[
          <div className={styles._left_col} key="contact-me-left-col">
            <StrokeText>Get in touch</StrokeText>
            <p>
              I understand that the site is pretty generic, still don&apos;t
              hesitate to reach out to me regarding any of my hobbies that
              caught your interest. If you are a passerby I would love to hear
              your feedback, or you could just let me know you favourite anime.
            </p>
          </div>,
          <ParallaxElem key="contact-me-right-col" translateZ={-15}>
            <Form />
          </ParallaxElem>,
        ]}
      </Grid>
      <ParallaxElem translateZ={15} moduleClass={styles._message_img}>
        <Image alt="" src={chatPng} />
      </ParallaxElem>
      <button onClick={onClickHandler}>
        <div className={styles._liked_post}>
          <Image alt="" src={likedPostPng} />
        </div>
      </button>
      {width! > BREAKPOINT.TAB_LARGE && (
        <ParallaxElem translateZ={-50} moduleClass={styles._ice_cream}>
          <Image alt="" src={iceCreamConePng} />
        </ParallaxElem>
      )}
    </>
  );
};

export default ContactMe;
