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
  A1 = "The Playway method",
  A2 = "The Reggio Emilia method",
  A3 = "The Waldorf method",
  A4 = "The Montessori method",
  A5 = "I don’t have a preference",
}
const PreferenceQuestionTwo = () => {
  const { formParams, setFormParams } = useContext(QuizContext);
  const hasBeenClicked = Boolean(formParams.method) ? true : false;
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <ProgressBar />
      <div className={styles.progressBarBg}>
        <div
          className={styles.progressBarFill}
          style={{
            width: "270px",
          }}
        ></div>
      </div>
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
              <input
                className={styles.customizedRadioBtn}
                type="radio"
                id={answer}
                value={answer}
                name="method"
                checked={formParams.method === answer}
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

export default PreferenceQuestionTwo;
