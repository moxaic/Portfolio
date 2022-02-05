export const getNumValue = (str: string, unit: string) => {
  return Number(str.slice(0, str.indexOf(unit)));
};
