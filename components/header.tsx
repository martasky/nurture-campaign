import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();

  return (
    <>
      <section
        className={styles.sect}
        style={{ position: router.pathname === "/quiz" ? "static" : "fixed" }}
      >
        <div
          className={styles.img}
          onClick={() =>
            router.push({
              pathname: "/",
            })
          }
        >
          <Image
            src="/./images/nurtureLogo.svg"
            alt="nurture logo"
            width={100}
            height={50}
          />
        </div>
        <a href="https://findnurture.com/">
          <div className={styles.cta}>Find nurseries</div>
        </a>
      </section>
    </>
  );
};

export default Header;
