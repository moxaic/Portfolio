const convertRemToPx = (value: string, rootFontSize: string) => {
  const noOfRem = Number(value.slice(0, value.indexOf("rem")));
  const oneRemToPx = Number(rootFontSize.slice(0, rootFontSize.indexOf("px")));
  return `${oneRemToPx * noOfRem}px`;
};

export default convertRemToPx;
