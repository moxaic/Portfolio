type Props = {
  children: string;
};

const BorderedText = ({ children }: Props) => {
  const id = `__`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="98"
      viewBox="0 0 1920 98"
    >
      <text
        id="This_is_some_text_yeah"
        data-name="This is some text yeah"
        transform="translate(1 73)"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        fontSize="96"
        fontFamily="Josefin Slab"
        fontWeight="600"
      >
        <tspan x="0" y="0">
          {children}
        </tspan>
      </text>
    </svg>
  );
};

export default BorderedText;
