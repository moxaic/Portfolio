import NextImage from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
};

const Image = (props: Props) => {
  return <NextImage layout="responsive" {...{ ...props }} />;
};

export default Image;
