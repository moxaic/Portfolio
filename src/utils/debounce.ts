export const debounce = (fx: () => void, wait: number, immediateFx = fx) => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: any) => {
    if (!timer) {
      immediateFx.apply(this, args);
    } else {
      clearTimeout(timer);
    }
    timer = undefined;
    timer = setTimeout(() => fx.apply(this, args), wait);
  };
};
