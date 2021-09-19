import Grid from "../../components/Grid";
import Form from "./components/Form";

const ContactMe = () => {
  return (
    <Grid>
      {[
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            eos soluta porro, officia qui ut a ratione facilis ducimus
            perspiciatis repellendus quasi esse laudantium autem itaque
            doloribus ea obcaecati sunt!
          </p>
        </>,
        <>
          <Form />
        </>,
      ]}
    </Grid>
  );
};

export default ContactMe;
