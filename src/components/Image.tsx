import NextImage from "next/image";

type Props = {
  alt: string;
  priority?: boolean;
  src: StaticImageData;
};

const Image = ({ priority, ...rest }: Props) => {
  return (
    <NextImage
      layout="responsive"
      priority={priority === undefined ? false : true}
      {...{ ...rest }}
    />
  );
};

export default Image;
