import { useEffect, useRef } from "react";

import { PERSPECTIVE } from "../utils/constants";

type Props = {
  children: JSX.Element;
  moduleClass?: string;
  translateZ: number;
};

const ParallaxEl = ({ children, moduleClass, translateZ }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);
  const scale = (PERSPECTIVE - translateZ) / PERSPECTIVE;
  const className =
    moduleClass === undefined ? "parallax_el" : `parallax_el ${moduleClass}`;

  useEffect(() => {
    if (container && container.current && child && child.current) {
      const containerRect = container.current.getBoundingClientRect();
      const childRect = child.current.getBoundingClientRect();
      child.current.style.left = `${(containerRect.x - childRect.x) * scale}px`;
      if (containerRect.y + containerRect.height < window.innerHeight) {
        child.current.style.top = `${
          (containerRect.y - childRect.y) * scale
        }px`;
      }
    }
  }, [scale]);

  return (
    <div ref={container}>
      <div
        {...{ className }}
        ref={child}
        style={{
          transform: `translateZ(${translateZ}px) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxEl;
