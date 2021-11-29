import { useState } from "react";

import styles from "../contactMe.module.css";
import { Input, TextArea } from ".";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} method="POST">
        <Input
          name="name"
          placeholder="Your Name"
          setValue={setName}
          type="text"
          value={name}
        />
        <Input
          name="email"
          placeholder="Your Email"
          setValue={setEmail}
          type="email"
          value={email}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          setValue={setMsg}
          value={msg}
        />
        <button className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

export default Form;
