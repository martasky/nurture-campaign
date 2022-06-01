import React from "react";
import { TITLES } from "../../content/constants";
import styles from "./productExplanation.module.css";

const ProductExplanation = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>
            {TITLES.titleTwo} <span>nurture</span>
          </h2>
          <div className={styles.textWrapper}>
            <div>
              <h2 className={styles.numbers}>
                <span>1.</span>
              </h2>
              <p>
                <strong>Search, filter and compare</strong> thousands of
                Ofsted-qualified nurseries across the UK.
              </p>
            </div>
            <div>
              <h2 className={styles.numbers}>
                <span>2.</span>
              </h2>
              <p>
                <strong>Submit an enquiry</strong>, and find the best Early
                Years team to help nurture your little one.
              </p>
            </div>
            <div>
              <h2 className={styles.numbers}>
                <span>3.</span>
              </h2>
              <p>
                Kick back, relax, and <strong>rest easy</strong> knowing your
                child is in nurturing, qualified hands.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <video loop muted autoPlay>
            <source src="https://www.ehdesign.dk/final_exam/recording_nurture.mp4"></source>
          </video>
        </div>
        <div className={styles.findContainer}>
          <p>Find the perfect nursery with</p>{" "}
          <a href="https://findnurture.com/">
            <div>
              <img src="/./images/nurtureLogo.svg" alt="Nurture Logo" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductExplanation;
