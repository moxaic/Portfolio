import { useEffect, useRef } from "react";

import getCssVar from "../utils/getCssVar";
import getNumValue from "../utils/getNumValue";
import remToPx from "../utils/remToPx";

type Props = { children: string; moduleClass?: string; quoteBy?: string };

const StrokeText = ({ children, moduleClass, quoteBy }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const innerCtn = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const className =
    moduleClass === undefined ? "strokeText" : `strokeText ${moduleClass}`;

  useEffect(() => {
    let fontFamily = "Josefin Slab";
    const fontWeight = "700";
    const [rootFontSize, strokeColor, paddingHorizontalRem] = getCssVar(
      ":root",
      ["--font-size", "--color-primary", "--padding-horizontal"]
    );
    const [fontSize, paddingLeftPx] = getCssVar(
      ".strokeText[data-quote='true']",
      ["--font-size-canvas", "padding-left"]
    );
    const paddingHorizontal = getNumValue(
      remToPx(paddingHorizontalRem, rootFontSize),
      "px"
    );
    const paddingLeft = getNumValue(paddingLeftPx, "px");
    const fontSizePxVal = getNumValue(remToPx(fontSize, rootFontSize), "px");
    const lineHeight = 1.2;
    const canvasCurr = canvas && canvas.current;
    const canvasCtx = canvasCurr && canvasCurr.getContext("2d");

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
      if (canvasCurr) {
        canvasCurr.height = height;
        canvasCurr.width = width;
        if (canvasCtx) {
          canvasCtx.textBaseline = "top";
          canvasCtx.strokeStyle = strokeColor;
          canvasCtx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
          canvasCtx.clearRect(0, 0, canvasCurr.width, canvasCurr.height);
          const noOfLines = lines.length;
          for (let i = 0; i < noOfLines; i++) {
            const verticalOffset = i === 0 ? 1 : (0.2 + i) * fontSizePxVal;
            canvasCtx.strokeText(lines[i], 0, verticalOffset);
          }
        }
      }
      if (container && container.current && innerCtn && innerCtn.current) {
        container.current.style.height = `${innerCtn.current.clientHeight}px`;
      }
    };

    (async () => {
      if (document.fonts.check(`${fontWeight} ${fontSize} ${fontFamily}`)) {
        getDimensions();
      } else {
        await getFont();
      }
    })();
  }, [children]);

  return (
    <div ref={container}>
      <div
        data-quote={quoteBy ? "true" : "false"}
        ref={innerCtn}
        {...{ className }}
      >
        <canvas ref={canvas} />
        {quoteBy && <div>{quoteBy}</div>}
      </div>
    </div>
  );
};

export default StrokeText;
