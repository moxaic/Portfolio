import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react";

import styles from "../contactMe.module.css";

type Props = {
  name: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
};

const TextArea = ({ name, placeholder, setValue, value }: Props) => {
  const onChangeHandler = ({ target: { value } }: BaseSyntheticEvent) => {
    setValue(value);
  };

  return (
    <div className={styles.inputGroup}>
      <textarea
        className={styles.textArea}
        onChange={onChangeHandler}
        required={true}
        {...{ name, value }}
      />
      <label htmlFor={name}>{placeholder}</label>
      <span className={styles.bar} />
    </div>
  );
};

export default TextArea;
