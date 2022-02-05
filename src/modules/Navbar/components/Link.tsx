import styles from "../navbar.module.css";

type Props = {
  menuOnClickHandler: () => void;
  scrollToSection: (id: string) => void;
  text: string;
};

const Link = ({ menuOnClickHandler, scrollToSection, text }: Props) => {
  const onClickHandler = () => {
    menuOnClickHandler();
    setTimeout(() => {
      scrollToSection(text);
    }, 200);
  };

  return (
    <li className={styles._link}>
      <a onClick={onClickHandler}>{text}</a>
    </li>
  );
};

export default Link;
