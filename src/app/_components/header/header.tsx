import React from "react";
import Image from "next/image";
import TopNavigation from "./top-navigation";

const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between">
        <Image
          src="/images/logo-light.svg"
          width={100}
          height={36}
          alt="کلاسبن"
          style={{ flexShrink: 0 }}
          className="mr-5"
        />
        <TopNavigation />

        <div className="mr-auto ml-5">ورود یا عضویت</div>
      </div>
    </header>
  );
};

export default Header;
