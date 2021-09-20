type Props = { children: JSX.Element[] };

const Grid = ({ children }: Props) => {
  return <div className="grid">{children}</div>;
};

export default Grid;
