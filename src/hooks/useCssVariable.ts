import { useEffect, useState } from "react";

const useCssVariable = (target: string, variableNames: string[]) => {
  const [variables, setVariables] = useState<string[]>([]);

  useEffect(() => {
    const targetEl = document.querySelector(target);
    if (targetEl) {
      const cssVars = getComputedStyle(targetEl);
      const resizeHandler = () => {
        variableNames.forEach((variable) => {
          setVariables((prev) => [...prev, cssVars.getPropertyValue(variable)]);
        });
      };

      resizeHandler();
      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, [target, variableNames]);

  return variables;
};

export default useCssVariable;
