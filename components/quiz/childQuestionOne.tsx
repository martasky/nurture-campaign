import React, { useContext } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import { handleChange } from "../../util/handleQuiz";

import ProgressBar from "./progressBar";

export enum answers {
  A1 = "6 months or younger",
  A2 = "6 - 24 months",
  A3 = "1 - 3 years",
  A4 = "3 - 5 years",
  A5 = "5 years or older",
}
const ChildQuestionOne = () => {
  const { formParams, setFormParams } = useContext(QuizContext);
  const hasBeenClicked = Boolean(formParams.childAge) ? true : false;
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <ProgressBar />
      <div className={styles.progressBarBg}>
        <div
          className={styles.progressBarFill}
          style={{
            width: "90px",
          }}
        ></div>
      </div>
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
              <input
                className={styles.customizedRadioBtn}
                type="radio"
                id={answer}
                value={answer}
                checked={formParams.childAge === answer}
                name="childAge"
                onChange={(event) => {
                  handleChange(event, setFormParams);
                }}
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

export default ChildQuestionOne;
