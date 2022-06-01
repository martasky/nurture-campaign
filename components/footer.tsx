import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import { FOOTER, BUTTONS } from "../content/constants";
const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.newsletter}>
          <h3>{FOOTER.newstitle}</h3>
          <p>{FOOTER.newstext}</p>
          <form>
            <input type="text" placeholder={FOOTER.placeholderName}></input>
            <input type="email" placeholder={FOOTER.placeholderEmail}></input>
            <p className={styles.consent}>
              By clicking “Sign up” you agree with our
              <span>terms and Conditions</span>.
            </p>
            <button type="submit" className={styles.cta}>
              {BUTTONS.signUp}
            </button>
          </form>
        </section>
        <section className={styles.contact}>
          <h3>{FOOTER.contactTitle}</h3>
          <p>{FOOTER.contactMail}</p>
        </section>
        <section className={styles.some}>
          <h3>{FOOTER.followTitle}</h3>
          <div className={styles.icons}>
            <Image
              src="/./images/facebook.svg"
              alt="Facebook icon"
              width={50}
              height={50}
            />
            <Image
              src="/./images/insta.svg"
              alt="Facebook icon"
              width={50}
              height={50}
            />
            <Image
              src="/./images/tiktok.svg"
              alt="Facebook icon"
              width={50}
              height={50}
            />
          </div>
        </section>
        <section className={styles.legal}>
          <p>{FOOTER.legalPrivacy}</p>
          <div className={styles.separator}></div>
          <p>{FOOTER.legalTerms}</p>
          <div className={styles.separator}></div>
          <p>{FOOTER.legalCookies}</p>
        </section>
      </div>
    </>
  );
};

export default Footer;
