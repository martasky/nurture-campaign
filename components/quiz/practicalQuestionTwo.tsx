import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import { handleChange } from "../../util/handleQuiz";
import ProgressBar from "./progressBar";

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
  const { formParams, setFormParams } = useContext(QuizContext);

  const hasBeenClicked = Boolean(formParams.startTime) ? true : false;

  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <ProgressBar />
      <div className={styles.progressBarBg}>
        <div
          className={styles.progressBarFill}
          style={{
            width: "60px",
          }}
        ></div>
      </div>
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
              <input
                className={styles.customizedRadioBtn}
                type="radio"
                id={answer}
                value={answer}
                checked={formParams.startTime === answer}
                name="startTime"
                onChange={(event) => handleChange(event, setFormParams)}
              />
              <label htmlFor={answer}>{answer}</label>
            </li>
          ))}
        </ul>
      </div>
      <NextQuestionBtn hasBeenClicked={hasBeenClicked} />
    </div>
  );
};

export default PracticalQuestionTwo;
