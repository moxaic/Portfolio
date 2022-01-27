import { FormEvent, useState } from "react";

import styles from "../contact_me.module.css";
import { Input, TextArea } from ".";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message: msg,
      }),
    });
  };

  return (
    <div className={styles._form_container}>
      <form className={styles._form} onSubmit={onSubmitHandler}>
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
        <button className={styles._send_button}>Send</button>
      </form>
    </div>
  );
};

export default Form;
