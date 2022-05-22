import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

const answersArr = [
  { adj1: "Shy", adj2: "Extrovert" },
  { adj1: "Curious", adj2: "Desinterested" },
  { adj1: "Very active", adj2: "Quiet" },
  { adj1: "Patient", adj2: "Easily annoyed" },
  { adj1: "Cheerful", adj2: "Moody" },
];
const ChildQuestionTwo = () => {
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q4.webp"
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
          {answersArr.map((answer, index) => (
            <li className={styles.range} key={`range-${index}`}>
              <label htmlFor={`range-${index}`}>
                <span>{answer.adj1}</span>
                <span>{answer.adj2}</span>
              </label>
              <input
                type="range"
                id={`range-${index}`}
                name="question4"
                min="0"
                max="50"
                step="1"
                defaultValue="25"
              />
            </li>
          ))}
        </ul>
      </div>
      <NextQuestionBtn />
    </div>
  );
};

export default ChildQuestionTwo;
