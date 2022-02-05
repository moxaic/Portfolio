import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: JSX.Element;
};

const WindowWidth = createContext<number | undefined>(undefined);

const WindowWidthProvider = ({ children }: Props) => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth !== width) {
        setWidth(undefined);
        setWidth(window.innerWidth);
      }
    };
  }, [width]);

  return <WindowWidth.Provider value={width}>{children}</WindowWidth.Provider>;
};

export const useWindowWidth = () => useContext(WindowWidth);
export default WindowWidthProvider;
