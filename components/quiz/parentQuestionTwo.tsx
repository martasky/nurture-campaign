import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

const answersArr = [
  { adj1: "Strict", adj2: "Indulgent" },
  { adj1: "Protective", adj2: "Neglectful" },
  { adj1: "Ambitious", adj2: "Relaxed" },
  { adj1: "Patient", adj2: "Easily annoyed" },
  { adj1: "Reserved", adj2: "Affectionate" },
];
const ParentQuestionTwo = () => {
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q-7.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h2>{QUIZ.parentQuestion2}</h2>
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

export default ParentQuestionTwo;
