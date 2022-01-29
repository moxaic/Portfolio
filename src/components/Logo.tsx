import Link from "next/link";

import LogoSvg from "@/images/logo.svg";

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
