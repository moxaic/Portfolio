import styles from "../contactMe.module.css";

const Form = () => {
  return (
    <form className={styles.form} method="POST">
      <label htmlFor="name">Your name:</label>
      <input id="name" name="name" type="text" />
      <label htmlFor="email">Your email:</label>
      <input id="email" name="email" type="email" />
      <label htmlFor="message">Your message:</label>
      <textarea id="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;
