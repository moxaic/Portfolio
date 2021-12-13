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
      <div className={styles._message_img}>
        <ParallaxEl translateZ={15}>
          <Image alt="" src={chatPng} />
        </ParallaxEl>
      </div>
      <div className={styles._liked_post}>
        <ParallaxEl translateZ={-10}>
          <Image alt="" src={likedPostPng} />
        </ParallaxEl>
      </div>
      <div className={styles._ice_cream}>
        <ParallaxEl translateZ={-60}>
          <Image alt="" src={iceCreamConePng} />
        </ParallaxEl>
      </div>
    </>
  );
};

export default ContactMe;
