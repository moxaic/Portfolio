import { useEffect, useState } from "react";

const useCssValues = (cssProperties: object) => {
  const [values, setValues] = useState<(string[] | undefined)[]>([]);

  useEffect(() => {
    const val = Object.keys(cssProperties).map((cssQuery) => {
      const target = document.querySelector(cssQuery);
      if (target) {
        const cssStyles = getComputedStyle(target);
        return (
          cssProperties[cssQuery as keyof typeof cssProperties] as string[]
        ).map((property: string) => cssStyles.getPropertyValue(property));
      }
    });
    setValues(val);
  }, [cssProperties]);

  return values;
};

export default useCssValues;
