import { createContext, useContext, useEffect, useState } from "react";

import { BREAKPOINT } from "@/utils/constants";

const ScreenSizeContext = createContext<number | undefined>(undefined);

type Props = {
  children: JSX.Element;
};

const ScreenSizeProvider = ({ children }: Props) => {
  const [screenSize, setScreenSize] = useState<number>();

  useEffect(() => {
    const breakpoints = Object.keys(BREAKPOINT)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => Number(key))
      .sort((num1, num2) => num1 - num2);

    const length = breakpoints.length;
    const getScreenSize = () => {
      for (let i = 0; i < length; i++) {
        if (window.innerWidth < breakpoints[i]) {
          setScreenSize(breakpoints[i]);
          break;
        }
        if (i === length - 1) {
          setScreenSize(breakpoints[i]);
        }
      }
    };

    getScreenSize();
    window.addEventListener("resize", getScreenSize);
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);
export default ScreenSizeProvider;
