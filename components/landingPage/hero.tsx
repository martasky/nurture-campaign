import React from "react";
import { TITLES, BUTTONS, INTROTXT } from "../../content/constants";
import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";

import Loader from "./getAdjectives";
const adjectives = ["easy", "fun", "trustworthy", "simple"];
const Hero = () => {
  return (
    <>
      <section className={styles.heroblock}>
        <div className={styles.text}>
          <h2>
            {TITLES.title}
            <span>
              <Loader adjectives={adjectives} />
            </span>
          </h2>
          <h2>{TITLES.headingTwo}</h2>
          <p>{INTROTXT.p1}</p>
          <p>{INTROTXT.p2}</p>
        </div>
        <Link href="/quiz?index=0">
          <a className={styles.button}>
            <div className={styles.cta}>{BUTTONS.takeQuiz}</div>
          </a>
        </Link>
        <div className={styles.arrow}>
          <Image
            src="/images/arrow.webp"
            alt="arrow indicator"
            width={150}
            height={70}
          />
        </div>
        <div className={styles.heroImg}>
          <Image
            src="/images/hero_img.webp"
            alt="children playing in the nursery"
            width={430}
            height={300}
          />
        </div>

        <div className={styles.puzzles}>
          <Image
            src="/images/fallingPuzzles.webp"
            alt="puzzle pieces falling"
            width={70}
            height={70}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
