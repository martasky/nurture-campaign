import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import { handleCheckboxNursery } from "../../util/handleQuiz";
import ProgressBar from "./progressBar";
import { MediaContext } from "../../context/mediaContextType";

export enum answers {
  A1 = "It is open out of the regular office hours",
  A2 = "The staff is qualified to take care of children with learning disabilities",
  A3 = "It offers a specific food alternative (gluten-free, vegetarian, vegan, etc)",
  A4 = "I don’t have any preferences",
}
const PreferenceQuestionThree = () => {
  const { formParams, setFormParams } = useContext(QuizContext);
  const { isDesktop } = useContext(MediaContext);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [nurseryPreferences, setNurseryPreferences] = useState({
    answer0: Object.values(formParams.nurseryPreferences)[0],
    answer1: Object.values(formParams.nurseryPreferences)[1],
    answer2: Object.values(formParams.nurseryPreferences)[2],
    answer3: Object.values(formParams.nurseryPreferences)[3],
  });

  useEffect(() => {
    handleCheckboxNursery(setFormParams, nurseryPreferences);
  }, [nurseryPreferences, setFormParams]);
  useEffect(() => {
    const set = new Set(Object.values(formParams.nurseryPreferences));

    if (set.size === 1) {
      setHasBeenClicked(false);
    }
  }, [formParams.nurseryPreferences]);
  const isDisabled =
    hasBeenClicked ||
    Object.values(formParams.nurseryPreferences)[0] ||
    Object.values(formParams.nurseryPreferences)[1] ||
    Object.values(formParams.nurseryPreferences)[2] ||
    Object.values(formParams.nurseryPreferences)[3]
      ? true
      : false;

  const checkClick = useCallback(
    (checked: boolean) => {
      if (checked) {
        setHasBeenClicked(true);
      }
    },
    [setHasBeenClicked]
  );

  const getNurseryPreferences = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, answer: string) => {
      let { name, value, checked } = event.target;

      value = checked ? value : "";
      setNurseryPreferences((previousNurseryPreferences) => ({
        ...previousNurseryPreferences,
        [name]: value,
      }));
      checkClick(checked);
    },
    [setNurseryPreferences, checkClick]
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
                width: isDesktop ? "800px" : "300px",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperDesktop}>
        <div className={styles.img}>
          <Image
            src="/./images/quiz/Q-10.webp"
            alt="Quiz illustration"
            width={isDesktop ? 350 : 250}
            height={isDesktop ? 280 : 200}
            objectFit="cover"
          />
        </div>
        <div>
          <h2>{QUIZ.preferenceQuestion3}</h2>
          <div className={styles.answersWrapper}>
            <ul>
              {Object.values(answers).map((answer, index) => (
                <li key={answer}>
                  <input
                    className={styles.customizedCheckboxBtn}
                    type="checkbox"
                    id={answer}
                    value={answer}
                    name={`answer${index}`}
                    checked={
                      Object.values(formParams.nurseryPreferences)[index] ===
                      answer
                    }
                    onChange={(event) => getNurseryPreferences(event, answer)}
                  />
                  <label htmlFor={answer}>{answer}</label>
                </li>
              ))}
            </ul>
          </div>
          <NextQuestionBtn hasBeenClicked={isDisabled} />
        </div>
      </div>
    </div>
  );
};

export default PreferenceQuestionThree;
