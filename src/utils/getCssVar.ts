const getCssVar = (target: string, varNames: string[]) => {
  const el = document.querySelector(target);
  if (el) {
    const cssVars = getComputedStyle(el);
    return varNames.map((variable) => cssVars.getPropertyValue(variable));
  }
  return [];
};

export default getCssVar;
