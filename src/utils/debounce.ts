export const debounce = (fx: () => void, wait: number, immediateFx = fx) => {
  let timer: NodeJS.Timeout | null;
  return (...args: any) => {
    if (!timer) {
      immediateFx.apply(this, args);
    } else {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fx.apply(this, args);
    }, wait);
  };
};
