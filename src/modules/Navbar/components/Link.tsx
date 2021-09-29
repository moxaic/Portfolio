import getSectionId from "../../../utils/getSectionId";

type Props = {
  text: string;
};

const Link = ({ text }: Props) => {
  return (
    <li>
      <a>{getSectionId(text)}</a>
    </li>
  );
};

export default Link;
