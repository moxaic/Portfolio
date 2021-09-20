import Grid from "../../components/Grid";
import Form from "./components/Form";

const ContactMe = () => {
  return (
    <Grid>
      {[
        <div key="contact-me-left-col">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            eos soluta porro, officia qui ut a ratione facilis ducimus
            perspiciatis repellendus quasi esse laudantium autem itaque
            doloribus ea obcaecati sunt!
          </p>
        </div>,
        <div key="contact-me-right-col">
          <Form />
        </div>,
      ]}
    </Grid>
  );
};

export default ContactMe;
