import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: JSX.Element;
};

const WindowWidth = createContext<number | undefined>(undefined);
const SetWindowWidth = createContext<
  Dispatch<SetStateAction<number | undefined>>
>(() => {});

const WindowWidthProvider = ({ children }: Props) => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <WindowWidth.Provider value={width}>
      <SetWindowWidth.Provider value={setWidth}>
        {children}
      </SetWindowWidth.Provider>
    </WindowWidth.Provider>
  );
};

export const useWindowWidth = () => useContext(WindowWidth);
export const useSetWindowWidth = () => useContext(SetWindowWidth);
export default WindowWidthProvider;
