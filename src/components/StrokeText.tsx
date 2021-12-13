import { useEffect, useRef } from "react";

import getNumValue from "../utils/getNumValue";
import remToPx from "../utils/remToPx";
import { useCssVariable } from "../hooks";

type Props = { children: string; moduleClass?: string; quoteBy?: string };

const rootVarNames = ["--font-size", "--color-primary", "--padding-horizontal"];
const strokeTextVarNames = ["--font-size-canvas", "padding-left"];

const StrokeText = ({ children, moduleClass, quoteBy }: Props) => {
  const parent = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const rootVars = useCssVariable(":root", rootVarNames);
  const strokeTextVars = useCssVariable(
    ".stroke_text[data-quote='true']",
    strokeTextVarNames
  );
  const className =
    moduleClass === undefined ? "stroke_text" : `stroke_text ${moduleClass}`;

  useEffect(() => {
    if (rootVars.length !== 0 && strokeTextVars.length !== 0) {
      const [rootFontSize, strokeColor, paddingHorizontalRem] = rootVars;
      const [fontSize, paddingLeftPx] = strokeTextVars;
      const fontWeight = "700";
      let fontFamily = "Josefin Slab";
      const paddingHorizontal = getNumValue(
        remToPx(paddingHorizontalRem, rootFontSize),
        "px"
      );
      const paddingLeft = getNumValue(paddingLeftPx, "px");
      const fontSizePxVal = getNumValue(remToPx(fontSize, rootFontSize), "px");
      const lineHeight = 1.5;
      const canvasCur = canvas && canvas.current;
      const canvasCtx = canvasCur && canvasCur.getContext("2d");

      const getFont = async () => {
        try {
          const josefinSlab = new FontFace(
            fontFamily,
            "url('https://fonts.google.com/specimen/Josefin+Slab)"
          );
          await josefinSlab.load();
          document.fonts.add(josefinSlab);
        } catch (err) {
          fontFamily = "Serif"; // fallback font
          console.error(err);
        } finally {
          getDimensions();
        }
      };

      const getDimensions = () => {
        if (canvasCtx) {
          canvasCtx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
          let { width } = canvasCtx.measureText(children);
          let height = fontSizePxVal + 2;
          const availableScreenWidth =
            window.innerWidth - 2 * (paddingHorizontal + paddingLeft);
          let singleLineWords: string[] = [];

          if (width > availableScreenWidth) {
            const words = children.split(" ");
            const wordCount = words.length;
            let maxWidth = canvasCtx.measureText(words[0]).width;
            let rowWidth = maxWidth;
            singleLineWords.push(words[0]);

            for (let i = 1; i < wordCount; i++) {
              const wordWidth = canvasCtx.measureText(` ${words[i]}`).width;
              if (rowWidth + wordWidth > availableScreenWidth) {
                if (rowWidth > maxWidth) {
                  maxWidth = rowWidth;
                }
                rowWidth = wordWidth;
                height += lineHeight * fontSizePxVal;
                singleLineWords.push(words[i]);
              } else {
                const lastStr = singleLineWords.at(-1);
                singleLineWords.splice(-1, 1, lastStr + ` ${words[i]}`);
                rowWidth += wordWidth;
              }
            }
            width = maxWidth;
          } else {
            singleLineWords.push(children);
          }
          drawCanvas(height, width, singleLineWords);
        }
      };

      const drawCanvas = (height: number, width: number, lines: string[]) => {
        if (canvasCur) {
          canvasCur.height = height;
          canvasCur.width = width;
          if (canvasCtx) {
            canvasCtx.textBaseline = "top";
            canvasCtx.strokeStyle = strokeColor;
            canvasCtx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
            canvasCtx.clearRect(0, 0, canvasCur.width, canvasCur.height);
            const noOfLines = lines.length;
            for (let i = 0; i < noOfLines; i++) {
              const verticalOffset =
                i === 0 ? 1 : (lineHeight + i - 1) * fontSizePxVal;
              canvasCtx.strokeText(lines[i], 0, verticalOffset);
            }
          }
        }
        if (parent && parent.current && child && child.current) {
          parent.current.style.height = `${child.current.clientHeight}px`;
        }
      };

      (async () => {
        if (document.fonts.check(`${fontWeight} ${fontSize} ${fontFamily}`)) {
          getDimensions();
        } else {
          await getFont();
        }
      })();
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
