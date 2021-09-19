import styles from "../myHobbies.module.css";

type Props = {
  children: JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
