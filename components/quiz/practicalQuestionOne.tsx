import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
const PracticalQuestionOne = () => {
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q1-1.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}>
        <h2>{QUIZ.practicalQuestion1}</h2>
        <input
          className={styles.textInput}
          type="text"
          placeholder="Enter city name..."
        />
        <NextQuestionBtn />
      </div>
    </div>
  );
};

export default PracticalQuestionOne;
