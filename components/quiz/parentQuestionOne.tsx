import React, { useContext } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import { handleChange } from "../../util/handleQuiz";
import ProgressBar from "./progressBar";
import { MediaContext } from "../../context/mediaContextType";

export enum answers {
  A1 = "Full-time 9 to 5",
  A2 = "Full-time in shifts",
  A3 = "Part-time",
  A4 = "I’m not working",
}
const ParentQuestionOne = () => {
  const { formParams, setFormParams } = useContext(QuizContext);
  const { isDesktop } = useContext(MediaContext);
  const hasBeenClicked = Boolean(formParams.parentWork) ? true : false;

  return (
    <div className={styles.container}>
      <div className={styles.progressBarWrapper}>
        <ArrowBackBtn />
        <div>
          <ProgressBar />
          <div className={styles.progressBarBg}>
            <div
              className={styles.progressBarFill}
              style={{
                width: isDesktop ? "480px" : "120px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperDesktop}>
        <div className={styles.img}>
          <Image
            src="/./images/quiz/Q6.webp"
            alt=""
            width={isDesktop ? 350 : 250}
            height={isDesktop ? 280 : 200}
            objectFit="cover"
          />
        </div>
        <div>
          <h2>{QUIZ.parentQuestion1}</h2>
          <div className={styles.answersWrapper}>
            <ul>
              {Object.values(answers).map((answer) => (
                <li key={answer}>
                  <input
                    className={styles.customizedRadioBtn}
                    type="radio"
                    id={answer}
                    value={answer}
                    name="parentWork"
                    checked={formParams.parentWork === answer}
                    onChange={(event) => handleChange(event, setFormParams)}
                  />
                  <label htmlFor={answer}>{answer}</label>
                </li>
              ))}
            </ul>
          </div>
          <NextQuestionBtn hasBeenClicked={hasBeenClicked} />
        </div>
      </div>
    </div>
  );
};

export default ParentQuestionOne;
