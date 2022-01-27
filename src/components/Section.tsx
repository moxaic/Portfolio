import { ForwardedRef, forwardRef } from "react";

import { ParallaxElem } from ".";

type Props = {
  children: JSX.Element;
  id: string;
  title: string;
};

const Section = forwardRef(
  ({ children, id, title }: Props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section id={id} ref={ref}>
        {title !== "Home" && (
          <ParallaxElem translateZ={-18}>
            <h2>{title}</h2>
          </ParallaxElem>
        )}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
