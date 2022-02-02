import styles from "../navbar.module.css";

type Props = {
  isActive: boolean;
  scrollToSection: (id: string) => void;
  text: string;
};

const Link = ({ isActive, scrollToSection, text }: Props) => {
  const defaultClass = styles._link;
  const className = isActive
    ? `${defaultClass} ${styles._active}`
    : styles._link;

  const onClickHandler = () => {
    scrollToSection(text);
  };

  return (
    <li {...{ className }}>
      <a onClick={onClickHandler}>{text}</a>
    </li>
  );
};

export default Link;
