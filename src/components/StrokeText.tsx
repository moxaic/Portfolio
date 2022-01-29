import { useEffect, useRef } from "react";

import getNumValue from "../utils/getNumValue";
import remToPx from "../utils/remToPx";
import { useCssVariable } from "../hooks";

type Props = { children: string; moduleClass?: string; quoteBy?: string };

const rootVarNames = ["--font-size", "--color-primary", "--padding-horizontal"];
const strokeTextVarNames = [
  "--font-size-canvas",
  "--line-height-canvas",
  "padding-left",
];

const StrokeText = ({ children, moduleClass, quoteBy }: Props) => {
  const parent = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const rootVars = useCssVariable(":root", rootVarNames);
  const strokeTextVars = useCssVariable(".stroke_text", strokeTextVarNames);
  const defaultClass = "stroke_text font_tangerine";
  const className =
    moduleClass === undefined ? defaultClass : `${defaultClass} ${moduleClass}`;

  useEffect(() => {
    if (rootVars.length !== 0 && strokeTextVars.length !== 0) {
      const [rootFontSize, strokeColor, paddingHorizontalRem] = rootVars;
      const [fontSize, lineHeightStr, paddingLeftPx] = strokeTextVars;
      const fontWeight = "700";
      let fontFamily = "Josefin Slab";
      // // let fontFamily = "Serif";
      const paddingHorizontal = getNumValue(
        remToPx(paddingHorizontalRem, rootFontSize),
        "px"
      );
      const paddingLeft = getNumValue(paddingLeftPx, "px");
      const fontSizePxVal = getNumValue(remToPx(fontSize, rootFontSize), "px");
      const lineHeight = Number(lineHeightStr);
      const canvasCur = canvas && canvas.current;
      const canvasCtx = canvasCur && canvasCur.getContext("2d");

      const drawCanvas = () => {
        const getCanvasDimensions = () => {
          if (canvasCtx) {
            canvasCtx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
            let { width: textWidth } = canvasCtx.measureText(children);
            let textHeight = fontSizePxVal + 2;
            const availableScreenWidth =
              window.innerWidth - 2 * (paddingHorizontal + paddingLeft);
            console.log(availableScreenWidth, paddingHorizontal, paddingLeft);

            if (textWidth > availableScreenWidth) {
              const words = children.split(" ");
              const wordCount = words.length;
              let maxWidth = canvasCtx.measureText(words[0]).width;
              let rowWidth = maxWidth;
              lines.push(words[0]);
              for (let i = 1; i < wordCount; i++) {
                const wordWidth = canvasCtx.measureText(` ${words[i]}`).width;
                if (rowWidth + wordWidth > availableScreenWidth) {
                  if (rowWidth > maxWidth) {
                    maxWidth = rowWidth;
                  }
                  rowWidth = wordWidth;
                  textHeight += lineHeight * fontSizePxVal;
                  lines.push(words[i]);
                } else {
                  const lastStr = lines.at(-1);
                  lines.splice(-1, 1, lastStr + ` ${words[i]}`);
                  rowWidth += wordWidth;
                }
              }

              height = textHeight;
              width = maxWidth >= rowWidth ? maxWidth : rowWidth;
            } else {
              height = textHeight;
              width = textWidth;
              lines.push(children);
            }

            if (textAlign === "center") {
              width = availableScreenWidth;
            }
          }
        };

        const paintText = () => {
          if (canvasCur) {
            canvasCur.height = height;
            canvasCur.width = width;
            if (canvasCtx) {
              canvasCtx.textAlign = "center";
              canvasCtx.textBaseline = "top";
              canvasCtx.strokeStyle = strokeColor;
              canvasCtx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
              canvasCtx.clearRect(0, 0, canvasCur.width, canvasCur.height);
              const noOfLines = lines.length;
              const x = textAlign === "center" ? width / 2 : 0;
              for (let i = 0; i < noOfLines; i++) {
                const y = i !== 0 ? i * lineHeight * fontSizePxVal : 1;
                canvasCtx.strokeText(lines[i], x, y);
              }
            }
          }

          if (parent && parent.current && child && child.current) {
            parent.current.style.height = `${child.current.clientHeight}px`;
          }
        };

        let height: number;
        let width: number;
        const lines: string[] = [];
        let textAlign = "center";
        getCanvasDimensions();
        paintText();
      };

      document.fonts.ready.then(drawCanvas);
    }
  }, [children, rootVars, strokeTextVars]);

  return (
    <div ref={parent}>
      <div
        data-quote={quoteBy ? "true" : "false"}
        ref={child}
        {...{ className }}
      >
        <canvas ref={canvas} />
        {quoteBy && <div>{quoteBy}</div>}
      </div>
    </div>
  );
};

export default StrokeText;
