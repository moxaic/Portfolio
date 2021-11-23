import { useEffect, useRef, useState } from "react";
import getCssVar from "../utils/getCssVar";

type Style = {
  height: number;
  width: number;
};

type Props = { children: string; moduleClass?: string };

const StrokeText = ({ children, moduleClass }: Props) => {
  const [marginVertical, setMarginVertical] = useState<string>("1em");
  const [style, setStyle] = useState<Style>();
  const canvas = useRef<HTMLCanvasElement>(null);
  const dummyH3 = useRef<HTMLHeadingElement>(null);
  const defaultClass = "canvasContainer h3Clone";
  const componentClass =
    moduleClass === undefined ? defaultClass : `${defaultClass} ${moduleClass}`;

  useEffect(() => {
    if (dummyH3 && dummyH3.current) {
      setStyle({
        height: dummyH3.current?.clientHeight,
        width: dummyH3.current?.clientWidth,
      });
    }

    if (canvas && canvas.current && style) {
      canvas.current.height = 1.5 * style.height;
      canvas.current.width = style.width;
      const ctx = canvas.current.getContext("2d");
      if (ctx) {
        const [strokeColor] = getCssVar(":root", ["--color-primary"]);
        const [fontSize] = getCssVar(".h3Clone", ["--font-size"]);
        const [fontFamily, fontWeight, marginTop] = getCssVar("h3", [
          "font-family",
          "font-weight",
          "margin-top",
        ]);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
        ctx.strokeStyle = strokeColor;
        ctx.strokeText(children, 0, style.height);
        setMarginVertical(marginTop);
      }
    }
  }, [children, style]);

  if (style === undefined) {
    return (
      <h3 className="h3Clone" ref={dummyH3}>
        {children}
      </h3>
    );
  }

  return (
    <div className={componentClass}>
      <div>
        <canvas ref={canvas} />
      </div>
      <style jsx>{`
        .canvasContainer {
          margin: ${marginVertical} 0;
        }
      `}</style>
    </div>
  );
};

export default StrokeText;
