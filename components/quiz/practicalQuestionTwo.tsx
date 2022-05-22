import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

export enum answers {
  A1 = "Immediately",
  A2 = "Next month",
  A3 = "In 1-3 months",
  A4 = "In 6 months",
  A5 = "In 6-12 months",
  A6 = "Sometime next year",
  A7 = "I’m flexible, depending on the nursery’s availability",
}
const PracticalQuestionTwo = () => {
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q2.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h2>{QUIZ.practicalQuestion2}</h2>
      <div className={styles.answersWrapper}>
        <ul>
          {Object.values(answers).map((answer) => (
            <li key={answer}>
              <input type="radio" id={answer} value={answer} name="question2" />
              <label htmlFor={answer}>{answer}</label>
            </li>
          ))}
        </ul>
      </div>
      <NextQuestionBtn />
    </div>
  );
};

export default PracticalQuestionTwo;
