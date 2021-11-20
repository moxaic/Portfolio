import { useEffect, useRef, useState } from "react";
import getCssVar from "../utils/getCssVar";

type Style = {
  height: number;
  width: number;
};

type Props = { children: string };

const StrokeText = ({ children }: Props) => {
  const [style, setStyle] = useState<Style>();
  const canvas = useRef<HTMLCanvasElement>(null);
  const dummyH3 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (dummyH3 && dummyH3.current) {
      setStyle({
        height: dummyH3.current?.clientHeight,
        width: dummyH3.current?.clientWidth,
      });
    }

    if (canvas && canvas.current) {
      canvas.current.height = style!.height;
      canvas.current.width = style!.width;
      const ctx = canvas.current.getContext("2d");
      if (ctx) {
        const [strokeColor] = getCssVar(":root", ["--color-primary"]);
        const [fontFamily, fontSize, fontWeight] = getCssVar("h3", [
          "font-family",
          "font-size",
          "font-weight",
        ]);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        // ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
        ctx.font = "700 4rem Josefin Slab";
        ctx.strokeStyle = strokeColor;
        ctx.strokeText(children, 0, 50);
      }
    }
  }, [children, style]);

  if (style === undefined) {
    return <h3 ref={dummyH3}>{children}</h3>;
  }

  return (
    <div className="canvasContainer">
      <canvas ref={canvas} />
    </div>
  );
};

export default StrokeText;
