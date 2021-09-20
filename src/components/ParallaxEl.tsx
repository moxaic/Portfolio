import { useEffect, useRef, useState } from "react";

type Props = {
  children: JSX.Element;
};

const ParallaxEl = ({ children }: Props) => {
  const [left, setLeft] = useState<number>();
  const container = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container && container.current && child && child.current) {
      const containerRect = container.current.getBoundingClientRect();
      const childRect = child.current.getBoundingClientRect();
      setLeft(containerRect.left - childRect.left);
    }
  }, []);

  return (
    <div ref={container} className="parallaxEl">
      <div ref={child}>{children}</div>
      <style jsx>{`
        .parallaxEl > div {
          ${left !== undefined && `left: ${left}px;`}
        }
      `}</style>
    </div>
  );
};

export default ParallaxEl;
