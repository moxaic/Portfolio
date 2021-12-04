import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react";

import styles from "../contact_me.module.css";

type Props = {
  name: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
  type: string;
  value: string;
};

const Input = ({ name, placeholder, setValue, type, value }: Props) => {
  const onChangeHandler = ({ target: { value } }: BaseSyntheticEvent) => {
    setValue(value);
  };

  return (
    <div className={styles._input_group}>
      <input
        className={styles._input}
        onChange={onChangeHandler}
        required={true}
        {...{ name, type, value }}
      />
      <label htmlFor={name}>{placeholder}</label>
      <span className={styles._bar} />
    </div>
  );
};

export default Input;
