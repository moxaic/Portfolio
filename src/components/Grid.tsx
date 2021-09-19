type Props = { children: JSX.Element[] };

const Grid = ({ children }: Props) => {
  return (
    <div className="grid">
      {children.map((child, idx) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
};

export default Grid;
