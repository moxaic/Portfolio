type Props = {
  text: string;
};

const Link = ({ text }: Props) => {
  return <li>{text}</li>;
};

export default Link;
