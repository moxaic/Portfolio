import { useEffect, useRef, useState } from "react";

import remToPx from "../utils/remToPx";

type Props = {
  children: string;
};

const BorderedText = ({ children }: Props) => {
  return (
    <>
      <div className="borderedText">
        <h3>A jack of all trade master of some</h3>
        <canvas />
      </div>
    </>
  );
};

export default BorderedText;
