import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

export enum answers {
  A1 = "6 months or younger",
  A2 = "6 - 24 months",
  A3 = "1 - 3 years",
  A4 = "3 - 5 years",
  A5 = "5 years or older",
}
const ChildQuestionOne = () => {
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q3-1.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h2>{QUIZ.childQuestion1}</h2>
      <div className={styles.answersWrapper}>
        <ul>
          {Object.values(answers).map((answer) => (
            <li key={answer}>
              <input type="radio" id={answer} value={answer} name="question3" />
              <label htmlFor={answer}>{answer}</label>
            </li>
          ))}
        </ul>
      </div>
      <NextQuestionBtn />
    </div>
  );
};

export default ChildQuestionOne;
