import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react";

import styles from "../contact_me.module.css";

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
    <div className={styles._input_group}>
      <textarea
        className={styles._text_area}
        onChange={onChangeHandler}
        required={true}
        {...{ name, value }}
      />
      <label htmlFor={name}>{placeholder}</label>
      <span className={styles._bar} />
    </div>
  );
};

export default TextArea;
