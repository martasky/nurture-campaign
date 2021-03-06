import React from "react";
import { TITLES } from "../../content/constants";
import styles from "./productIntro.module.css";
const ProductIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>
          {TITLES.title} <span>simple</span>
        </h2>
        <p>
          At Nurture, we want to give parents and parents-to-be a user friendly
          solution to find the best nursery option for their children, based on
          their preferences.
        </p>
        <p>
          Search, filter and compare thousands of Ofsted-qualified nurseries
          across the UK. Choose from over 25,000 nurseries and find the team to
          help your child flourish.
        </p>
        <p>
          Once you find a nusery that you like, you can share it, save it or
          contact them directly from Nurture by sending an inquiry. Yes, it is
          that easy!
        </p>
      </div>
      <div className={styles.gifContainer}>
        <img
          src="https://www.ehdesign.dk/final_exam/gif_long_loop.gif"
          alt="Gif showing Nurture page"
        ></img>
      </div>
      <div className={styles.findContainer}>
        <p>Find the perfect nursery with</p>{" "}
        <a href="https://findnurture.com/">
          <div>
            <img src="/./images/nurtureLogo.svg" alt="Nurture logo"></img>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductIntro;
