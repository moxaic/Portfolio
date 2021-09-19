import styles from "../myHobbies.module.css";

type Props = {
  imgName: string;
};

const Card = ({ imgName }: Props) => {
  return <div className={styles.card}></div>;
};

export default Card;
