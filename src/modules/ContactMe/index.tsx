import chatPng from "../../assets/images/chat.png";
import iceCreamConePng from "../../assets/images/ice_cream_cone.png";
import likedPostPng from "../../assets/images/liked_post.png";
import { Grid, Image, ParallaxEl, StrokeText } from "../../components";
import { Form } from "./components";
import styles from "./contact_me.module.css";

const ContactMe = () => {
  return (
    <>
      <Grid>
        {[
          <div className={styles._left_col} key="contact-me-left-col">
            <StrokeText>Get in touch</StrokeText>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque eos soluta porro, officia qui ut a ratione facilis
              ducimus perspiciatis repellendus quasi esse laudantium autem
              itaque doloribus ea obcaecati sunt!
            </p>
          </div>,
          <ParallaxEl key="contact-me-right-col" translateZ={-15}>
            <Form />
          </ParallaxEl>,
        ]}
      </Grid>
      <ParallaxEl translateZ={15} moduleClass={styles._message_img}>
        <Image alt="" src={chatPng} />
      </ParallaxEl>
      <ParallaxEl translateZ={-10} moduleClass={styles._liked_post}>
        <Image alt="" src={likedPostPng} />
      </ParallaxEl>
      <ParallaxEl translateZ={-60} moduleClass={styles._ice_cream}>
        <Image alt="" src={iceCreamConePng} />
      </ParallaxEl>
    </>
  );
};

export default ContactMe;
