import {
  BaseSyntheticEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

import styles from "../contactMe.module.css";

type Props = {
  name: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
  type: string;
  value: string;
};

const Input = ({ name, placeholder, setValue, type, value }: Props) => {
  const onChangeHandler = ({ target: { value } }: BaseSyntheticEvent) => {
    console.log(value);
    setValue(value);
  };

  return (
    <div className={styles.inputGroup}>
      <input
        onChange={onChangeHandler}
        required={true}
        {...{ name, type, value }}
      />
      <label htmlFor={name}>{placeholder}</label>
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default Input;
