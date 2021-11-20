import { Grid, StrokeText } from "../../components";
import Form from "./components/Form";
import styles from "./contactMe.module.css";

const ContactMe = () => {
  return (
    <Grid>
      {[
        <div className={styles.leftCol} key="contact-me-left-col">
          <StrokeText>This is where you tell me about yourself</StrokeText>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            eos soluta porro, officia qui ut a ratione facilis ducimus
            perspiciatis repellendus quasi esse laudantium autem itaque
            doloribus ea obcaecati sunt!
          </p>
        </div>,
        <div className={styles.formContainer} key="contact-me-right-col">
          <Form />
        </div>,
      ]}
    </Grid>
  );
};

export default ContactMe;
