import React from "react";
import { TITLES, INTROTXT, BUTTONS, TOQUIZTXT } from "../../content/constants";
import Image from "next/image";
import styles from "./quizSection.module.css";
import Link from "next/link";
const QuizSection = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="/./images/babyDinno.webp"></img>
        <div className={styles.textContainer}>
          <h2>
            {" "}
            {TITLES.title} <span>fun</span>
          </h2>
          <p>{TOQUIZTXT.p1}</p>
          <p>{TOQUIZTXT.p2}</p>
        </div>
        <Link href="/quiz?index=0">
          <a className={styles.button}>
            <div className={styles.cta}>{BUTTONS.startQuiz}</div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default QuizSection;
