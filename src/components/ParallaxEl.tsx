import { useEffect, useRef, useState } from "react";

import { PERSPECTIVE } from "../utils/constants";

type Props = {
  children: JSX.Element;
  moduleClass?: string;
  translateZ: number;
};

const ParallaxEl = ({ children, moduleClass, translateZ }: Props) => {
  const [horizontalTranslate, setHorizontalTranslate] = useState<number>(0);
  const container = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);
  const scale = (PERSPECTIVE - translateZ) / PERSPECTIVE;
  const componentClass =
    moduleClass === undefined ? "parallaxEl" : `parallaxEl ${moduleClass}`;

  useEffect(() => {
    if (container && container.current && child && child.current) {
      const containerRect = container.current.getBoundingClientRect();
      const childRect = child.current.getBoundingClientRect();
      setHorizontalTranslate(containerRect.left - childRect.left);
    }
  }, []);

  return (
    <div ref={container} className={componentClass}>
      <div ref={child}>{children}</div>
      <style jsx>{`
        .parallaxEl > div {
          ${translateZ > 0
            ? `right: ${-horizontalTranslate}px;`
            : `left: ${horizontalTranslate}px;`}
          transform: translateZ(${translateZ}px) scale(${scale});
          transform-origin: bottom right;
        }
      `}</style>
    </div>
  );
};

export default ParallaxEl;
