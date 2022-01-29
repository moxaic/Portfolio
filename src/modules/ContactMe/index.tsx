import chatPng from "../../assets/images/chat.png";
import iceCreamConePng from "../../assets/images/ice_cream_cone.png";
import likedPostPng from "../../assets/images/liked_post.png";
import { Grid, Image, ParallaxElem, StrokeText } from "../../components";
import { useMediaQuery } from "../../hooks";
import { BREAKPOINT } from "../../utils/constants";
import { Form } from "./components";
import styles from "./contact_me.module.css";

const breakpoints = [BREAKPOINT.TAB_LARGE];

const ContactMe = () => {
  const [isTab] = useMediaQuery(breakpoints);

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
      <div className={styles._liked_post}>
        <Image alt="" src={likedPostPng} />
      </div>
      {!isTab && (
        <ParallaxElem translateZ={-50} moduleClass={styles._ice_cream}>
          <Image alt="" src={iceCreamConePng} />
        </ParallaxElem>
      )}
    </>
  );
};

export default ContactMe;
