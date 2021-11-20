import { useState } from "react";

import { Input } from ".";
import styles from "../contactMe.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
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
      <div className={styles.inputGroup}>
        <textarea id="message" />
        <label className={styles.text} htmlFor="message">
          Your message
        </label>
      </div>
      <button className={styles.bitton}>Send</button>
    </form>
  );
};

export default Form;
