import styles from "../myHobbies.module.css";

type Props = {
  desc: string;
  phrase: string;
};

const CardDesc = ({ desc, phrase }: Props) => {
  return (
    <div className={styles.cardDesc}>
      <h3>{phrase}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default CardDesc;
