import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

const FinalScreen = () => {
  return (
    <div className={`${styles.container} ${styles.finalResultContainer}`}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/puzzle.webp"
          alt=""
          width={150}
          height={150}
          objectFit="cover"
        />
      </div>
      <h1>{QUIZ.thankYou}</h1>
      <div className={styles.resultWrapper}>
        <p>{QUIZ.summary}</p>

        <ul></ul>
        <p>{QUIZ.seeList}</p>
      </div>
      <NextQuestionBtn />
    </div>
  );
};

export default FinalScreen;
