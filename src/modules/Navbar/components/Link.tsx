import styles from "../navbar.module.css";

type Props = {
  isActive: boolean;
  menuOnClickHandler: () => void;
  scrollToSection: (id: string) => void;
  text: string;
};

const Link = (props: Props) => {
  const { isActive, menuOnClickHandler, scrollToSection, text } = props;
  const className = isActive
    ? `${styles._link} ${styles._active}`
    : styles._link;

  const onClickHandler = () => {
    menuOnClickHandler();
    scrollToSection(text);
  };

  return (
    <li {...{ className }}>
      <a onClick={onClickHandler}>{text}</a>
    </li>
  );
};

export default Link;
