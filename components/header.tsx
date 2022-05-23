import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
const Header = () => {
  return <><section className={styles.sect}>
    <div className={styles.img}>
            <Image
              src="/./images/nurtureLogo.svg"
              alt="nurture logo"  
              width={100}
              height={50}
            />
          </div><a href="https://findnurture.com/"><div className={styles.cta}>
            Find nurseries</div></a></section></>;
};

export default Header;
