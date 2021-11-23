import Image from "next/image";

import styles from "../footer.module.css";

type Props = {
  link: string;
  Svg: StaticImageData;
};

const GlassIcon = ({ link, Svg }: Props) => {
  return (
    <a className={styles.glassIcon}>
      <Image alt="" src={Svg} />
    </a>
  );
};

export default GlassIcon;
