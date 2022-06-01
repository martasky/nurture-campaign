import React, { useCallback, useContext, useEffect, useState } from "react";

import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import { handleRange } from "../../util/handleQuiz";
import ProgressBar from "./progressBar";
import { MediaContext } from "../../context/mediaContextType";

export const answersArr = [
  { adj1: "Shy", adj2: "Extrovert" },
  { adj1: "Curious", adj2: "Desinterested" },
  { adj1: "Very active", adj2: "Quiet" },
  { adj1: "Patient", adj2: "Easily annoyed" },
  { adj1: "Cheerful", adj2: "Moody" },
];
const ChildQuestionTwo = () => {
  const { formParams, setFormParams } = useContext(QuizContext);
  const [childPersonality, setChildPersonality] = useState({
    answer0: Object.values(formParams.childPersonality)[0],
    answer1: Object.values(formParams.childPersonality)[1],
    answer2: Object.values(formParams.childPersonality)[2],
    answer3: Object.values(formParams.childPersonality)[3],
    answer4: Object.values(formParams.childPersonality)[4],
  });
  const { isDesktop } = useContext(MediaContext);
  const hasBeenClicked = true;
  useEffect(() => {
    handleRange(setFormParams, childPersonality);
  }, [childPersonality, setFormParams]);

  const getChildPersonality = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let { name, value } = event.target;

      setChildPersonality((previousChildPersonality) => ({
        ...previousChildPersonality,
        [name]: value,
      }));
    },
    [setChildPersonality]
  );

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
                width: isDesktop ? "320px" : "120px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperDesktop}>
        <div className={styles.img}>
          <Image
            src="/images/quiz/Q4.webp"
            alt="Quiz illustration"
            width={isDesktop ? 350 : 250}
            height={isDesktop ? 280 : 200}
            objectFit="cover"
          />
        </div>
        <div>
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
                    className={styles.customizedRange}
                    type="range"
                    id={`range-${index}`}
                    name={`answer${index}`}
                    min={0}
                    max={50}
                    step="1"
                    value={Object.values(formParams.childPersonality)[index]}
                    onChange={(event) => {
                      getChildPersonality(event);
                    }}
                  />
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

export default ChildQuestionTwo;
