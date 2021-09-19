type Props = {
  children: JSX.Element;
};

const ParallaxElem = ({ children }: Props) => {
  return <div className="parallaxElem">{children}</div>;
};

export default ParallaxElem;
