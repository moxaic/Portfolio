import { useEffect, useRef } from "react";

import { PERSPECTIVE } from "../utils/constants";

type Props = {
  children: JSX.Element;
  moduleClass?: string;
  translateZ: number;
};

const ParallaxEl = ({ children, moduleClass, translateZ }: Props) => {
  const parent = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);
  const scale = (PERSPECTIVE - translateZ) / PERSPECTIVE;
  const className =
    moduleClass === undefined ? "parallax_el" : `parallax_el ${moduleClass}`;

  useEffect(() => {
    const parentCur = parent && parent.current;
    const childCur = child && child.current;
    if (parentCur && childCur) {
      const parentRect = parentCur.getBoundingClientRect();
      const childRect = childCur.getBoundingClientRect();
      childCur.style.left = `${(parentRect.x - childRect.x) * scale}px`;
      if (parentRect.y + parentRect.height < window.innerHeight) {
        childCur.style.top = `${(parentRect.y - childRect.y) * scale}px`;
      }
    }
  }, [scale]);

  return (
    <div ref={parent} {...{ className }}>
      <div
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
