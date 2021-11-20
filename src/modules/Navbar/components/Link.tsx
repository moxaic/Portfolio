import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  currSection: string;
  idx: number;
  navRefs: MutableRefObject<HTMLElement[]>;
  setCurrSection: Dispatch<SetStateAction<string>>;
  text: string;
};

const Link = ({ currSection, idx, navRefs, setCurrSection, text }: Props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (currSection === text) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currSection, text]);

  const onClickHandler = () => {
    setCurrSection(text);
    navRefs.current[idx].scrollIntoView();
  };

  return (
    <li>
      <a onClick={onClickHandler}>{text}</a>
    </li>
  );
};

export default Link;
