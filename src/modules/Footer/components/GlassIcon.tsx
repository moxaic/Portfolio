import styles from "../footer.module.css";

type Props = {
  Icon: any;
  link: string;
  platform: string;
};

const GlassIcon = ({ Icon, link, platform }: Props) => {
  return (
    <li className={styles._glass_icon} data-platform={platform}>
      <a className={styles._link} href={link}>
        <Icon />
      </a>
    </li>
  );
};

export default GlassIcon;
