import Image from "next/image";

import styles from "../footer.module.css";

type Props = {
  link: string;
  Svg: StaticImageData;
};

const GlassIcon = ({ link, Svg }: Props) => {
  return (
    <li className={styles._glass_icon}>
      <a>
        <Image alt="" src={Svg} />
      </a>
    </li>
  );
};

export default GlassIcon;
