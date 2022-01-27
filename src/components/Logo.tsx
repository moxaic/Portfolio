import Link from "next/link";

import LogoSvg from "../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a>
          <LogoSvg />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
