import { useEffect, useState } from "react";

const useMediaQuery = (breakpoints: number[]) => {
  const [inBreakpoint, setInBreakpoint] = useState<boolean[]>([]);

  useEffect(() => {
    const checkBreakpoints = () => {
      const windowWidth = window.innerWidth;
      setInBreakpoint(
        breakpoints.map((breakpoint) => breakpoint > windowWidth)
      );
    };

    checkBreakpoints();
    window.onresize = checkBreakpoints;
    return () => window.removeEventListener("resize", checkBreakpoints);
  }, [breakpoints]);

  return inBreakpoint;
};

export default useMediaQuery;
