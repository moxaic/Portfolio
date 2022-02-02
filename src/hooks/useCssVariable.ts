import { useEffect, useState } from "react";

const useCssVariable = (target: string, variableNames: string[]) => {
  const [variables, setVariables] = useState<string[]>([]);

  useEffect(() => {
    const targetEl = document.querySelector(target);
    if (targetEl) {
      const resizeHandler = () => {
        const cssVars = getComputedStyle(targetEl);
        const values = variableNames.map((variable) =>
          cssVars.getPropertyValue(variable)
        );
        setVariables(values);
      };

      resizeHandler();
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }
  }, [target, variableNames]);

  return variables;
};

export default useCssVariable;
