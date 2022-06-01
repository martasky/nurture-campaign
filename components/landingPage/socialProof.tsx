import React from "react";
import { TITLES, SOCIAL_PROOF } from "../../content/constants";
import styles from "./socialProof.module.css";
const SocialProof = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>
            {TITLES.title} <span>trustworthy</span>
          </h2>
        </div>
        <div className={styles.description}>{SOCIAL_PROOF.description}</div>
        <div className={styles.testimonials}>
          <div className={`${styles.user} ${styles.left}`}>
            <img src="/./images/user1.webp" alt="User photo"></img>
            <div
              className={`${styles.message} ${styles.left} ${styles.yellow}`}
            >
              <p>{SOCIAL_PROOF.quote1}</p>
              <p className={styles.name}>{SOCIAL_PROOF.person1}</p>
            </div>
          </div>
          <div className={`${styles.user} ${styles.right}`}>
            <img src="/./images/user3.webp" alt="User photo"></img>
            <div className={`${styles.message} ${styles.right} ${styles.pink}`}>
              <p>{SOCIAL_PROOF.quote2}</p>
              <p className={styles.name}>{SOCIAL_PROOF.person2}</p>
            </div>
          </div>
          <div className={`${styles.user} ${styles.left}`}>
            <img src="/./images/user2.webp" alt="User photo"></img>
            <div className={`${styles.message} ${styles.left} ${styles.blue}`}>
              <p>{SOCIAL_PROOF.quote3}</p>
              <p className={styles.name}>{SOCIAL_PROOF.person3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialProof;

/*description
person1
person2
person3
quote1
quote2
quote3*/
