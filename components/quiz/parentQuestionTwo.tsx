import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import { handleRangeParent } from "../../util/handleQuiz";
import ProgressBar from "./progressBar";
import { MediaContext } from "../../context/mediaContextType";

const answersArr = [
  { adj1: "Strict", adj2: "Indulgent" },
  { adj1: "Protective", adj2: "Neglectful" },
  { adj1: "Ambitious", adj2: "Relaxed" },
  { adj1: "Patient", adj2: "Easily annoyed" },
  { adj1: "Reserved", adj2: "Affectionate" },
];
const ParentQuestionTwo = () => {
  const { formParams, setFormParams } = useContext(QuizContext);
  const { isDesktop } = useContext(MediaContext);
  const [parentPersonality, setParentPersonality] = useState({
    answer0: Object.values(formParams.parentPersonality)[0],
    answer1: Object.values(formParams.parentPersonality)[1],
    answer2: Object.values(formParams.parentPersonality)[2],
    answer3: Object.values(formParams.parentPersonality)[3],
    answer4: Object.values(formParams.parentPersonality)[4],
  });

  const hasBeenClicked = true;
  useEffect(() => {
    handleRangeParent(setFormParams, parentPersonality);
  }, [parentPersonality, setFormParams]);

  const getParentPersonality = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    setParentPersonality((previousParentPersonality) => ({
      ...previousParentPersonality,
      [name]: value,
    }));
  };

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
                width: isDesktop ? "560px" : "210px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperDesktop}>
        <div className={styles.img}>
          <Image
            src="/./images/quiz/Q-7.webp"
            alt="Quiz illustration"
            width={isDesktop ? 350 : 250}
            height={isDesktop ? 280 : 200}
            objectFit="cover"
          />
        </div>
        <div>
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
                    className={styles.customizedRange}
                    type="range"
                    id={`range-${index}`}
                    name={`answer${index}`}
                    min="0"
                    max="50"
                    step="1"
                    value={Object.values(formParams.parentPersonality)[index]}
                    onChange={(event) => {
                      getParentPersonality(event);
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

export default ParentQuestionTwo;
