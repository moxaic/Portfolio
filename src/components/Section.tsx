import { ForwardedRef, forwardRef } from "react";

import ParallaxEl from "./ParallaxEl";

type Props = {
  children: JSX.Element;
  title: string;
};

const Section = forwardRef(
  ({ children, title }: Props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section ref={ref}>
        {title !== "Home" && (
          <ParallaxEl translateZ={-10}>
            <h2>{title}</h2>
          </ParallaxEl>
        )}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
