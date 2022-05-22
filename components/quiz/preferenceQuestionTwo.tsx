import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

export enum answers {
  A1 = "The Playway method",
  A2 = "The Reggio Emilia method",
  A3 = "The Waldorf method",
  A4 = "The Montessori method",
  A5 = "I don’t have a preference",
}
const PreferenceQuestionTwo = () => {
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q-9-1.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h2>{QUIZ.preferenceQuestion2}</h2>
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

export default PreferenceQuestionTwo;
