import { ForwardedRef, forwardRef } from "react";

const Loading = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="loading" ref={ref}>
      <div className="loader">
        <div className="balls"></div>
        <div className="balls"></div>
        <div className="balls"></div>
        <div className="balls"></div>
        <div className="balls"></div>
      </div>
      <p className="loading_text">LOADING</p>
    </div>
  );
});

Loading.displayName = "Loading";
export default Loading;
