import { Grid, StrokeText } from "../../components";
import { Form } from "./components";
import styles from "./contactMe.module.css";

const ContactMe = () => {
  return (
    <Grid>
      {[
        <div className={styles.leftCol} key="contact-me-left-col">
          <StrokeText>Let&apos;s talk :)</StrokeText>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            eos soluta porro, officia qui ut a ratione facilis ducimus
            perspiciatis repellendus quasi esse laudantium autem itaque
            doloribus ea obcaecati sunt!
          </p>
        </div>,
        <Form key="contact-me-right-col" />,
      ]}
    </Grid>
  );
};

export default ContactMe;
