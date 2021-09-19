import { ForwardedRef, forwardRef } from "react";

type Props = {
  children: JSX.Element;
  title: string;
};

const Section = forwardRef(
  ({ children, title }: Props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section ref={ref}>
        {title !== "Home" && <h2>{title}</h2>}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
