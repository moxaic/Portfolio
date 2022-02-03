import { useEffect, useRef } from "react";

import { useCssValues } from "@/hooks";
import convertRemToPx from "@/utils/convertRemToPx";
import getNumValue from "@/utils/getNumValue";

type Props = { children: string; moduleClass?: string; quoteBy?: string };

const cssProps = {
  body: ["font-size"],
  ":root": ["--color-primary"],
  section: ["padding-left"],
  ".stroke_text[data-is-quote='true'": [
    "--font-size-canvas",
    "--line-height-canvas",
    "--text-align-canvas",
    "padding-left",
  ],
};

const StrokeText = ({ children, moduleClass, quoteBy }: Props) => {
  const parent = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [body, root, section, self] = useCssValues(cssProps);
  const defaultClass = "stroke_text font_tangerine";
  const className =
    moduleClass === undefined ? defaultClass : `${defaultClass} ${moduleClass}`;

  useEffect(() => {
    if (root && body && section && self) {
      const [color] = root;
      const [rem] = body;
      const [paddingCtn] = section;
      const [fontSizeRem, lineHeightStr, textAlign, padding] = self;
      const padCtn = getNumValue(paddingCtn, "px");
      const pad = quoteBy ? getNumValue(padding, "px") : 0;
      const fontSize = getNumValue(convertRemToPx(fontSizeRem, rem), "px");
      const lineHeight = Number(lineHeightStr);
      const canvasCur = canvas && canvas.current;
      const canvasCtx = canvasCur && canvasCur.getContext("2d");
      const fontWeight = 700;
      const fontFamily = "Josefin Slab";

      const drawCanvas = () => {
        const getCanvasDimensions = () => {
          if (canvasCtx) {
            canvasCtx.font = `${fontWeight} ${fontSizeRem} ${fontFamily}`;
            let { width: textWidth } = canvasCtx.measureText(children);
            let textHeight = fontSize + 2;
            const availableScreenWidth = window.innerWidth - 2 * (padCtn + pad);

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
                  textHeight += lineHeight * fontSize;
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
              canvasCtx.textAlign = textAlign as CanvasTextAlign;
              canvasCtx.textBaseline = "top";
              canvasCtx.strokeStyle = color;
              canvasCtx.font = `${fontWeight} ${fontSizeRem} ${fontFamily}`;
              canvasCtx.clearRect(0, 0, canvasCur.width, canvasCur.height);
              const noOfLines = lines.length;
              const x = textAlign === "center" ? width / 2 : 0;
              for (let i = 0; i < noOfLines; i++) {
                const y = i === 0 ? 1 : i * lineHeight * fontSize;
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
        getCanvasDimensions();
        paintText();
      };

      document.fonts.ready.then(drawCanvas);
    }
  }, [body, children, quoteBy, root, section, self]);

  return (
    <div ref={parent}>
      <div data-is-quote={quoteBy !== undefined} ref={child} {...{ className }}>
        <canvas ref={canvas} />
        {quoteBy && <div>{quoteBy}</div>}
      </div>
    </div>
  );
};

export default StrokeText;
