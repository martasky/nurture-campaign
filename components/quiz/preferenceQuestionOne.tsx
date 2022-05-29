import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import { handleCheckbox } from "../../util/handleQuiz";
import ProgressBar from "./progressBar";

const answersArr = [
  { option: "Location", img: "/./images/quizIcons/location.webp" },
  {
    option: "Food options/quality",
    img: "/./images/quizIcons/food.webp",
  },
  { option: "Price", img: "/./images/quizIcons/price.webp" },
  {
    option: "Learning methodology",
    img: "/./images/quizIcons/methodology.webp",
  },
  {
    option: "Staff/children ratio",
    img: "/./images/quizIcons/ratio.webp",
  },
  {
    option: "Opening hours",
    img: "/./images/quizIcons/clock.webp",
  },
  {
    option: "Facilities",
    img: "/./images/quizIcons/rating.webp",
  },
  {
    option: "Family-like atmosphere",
    img: "/./images/quizIcons/family_feeling.webp",
  },
  {
    option: "Communication",
    img: "/./images/quizIcons/communcation.webp",
  },
  {
    option: "Staff qualifications",
    img: "/./images/quizIcons/clock_1.webp",
  },
];

const PreferenceQuestionOne = () => {
  const { formParams, setFormParams } = useContext(QuizContext);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const [parentPreferences, setParentPreferences] = useState({
    answer0: Object.values(formParams.parentPreferences)[0],
    answer1: Object.values(formParams.parentPreferences)[1],
    answer2: Object.values(formParams.parentPreferences)[2],
    answer3: Object.values(formParams.parentPreferences)[3],
    answer4: Object.values(formParams.parentPreferences)[4],
    answer5: Object.values(formParams.parentPreferences)[5],
    answer6: Object.values(formParams.parentPreferences)[6],
    answer7: Object.values(formParams.parentPreferences)[7],
    answer8: Object.values(formParams.parentPreferences)[8],
    answer9: Object.values(formParams.parentPreferences)[9],
  });

  useEffect(() => {
    handleCheckbox(setFormParams, parentPreferences);
  }, [setFormParams, parentPreferences]);

  useEffect(() => {
    const set = new Set(Object.values(formParams.parentPreferences));

    if (set.size === 1) {
      setHasBeenClicked(false);
    }
  }, [formParams.parentPreferences]);

  const isDisabled =
    hasBeenClicked ||
    Object.values(formParams.parentPreferences)[0] ||
    Object.values(formParams.parentPreferences)[1] ||
    Object.values(formParams.parentPreferences)[2] ||
    Object.values(formParams.parentPreferences)[3] ||
    Object.values(formParams.parentPreferences)[4] ||
    Object.values(formParams.parentPreferences)[5] ||
    Object.values(formParams.parentPreferences)[6] ||
    Object.values(formParams.parentPreferences)[7] ||
    Object.values(formParams.parentPreferences)[8] ||
    Object.values(formParams.parentPreferences)[9]
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

  const getParentPreferences = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, answer: string) => {
      let { name, value, checked } = event.target;

      value = checked ? value : "";

      setParentPreferences((previousParentPreferences) => ({
        ...previousParentPreferences,
        [name]: value,
      }));
      checkClick(checked);
    },

    [setParentPreferences, checkClick]
  );

  console.log({ parentPreferences });
  console.log({ formParams });
  console.log("co to", Object.values(formParams.parentPreferences)[2]);
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <ProgressBar />
      <div className={styles.progressBarBg}>
        <div
          className={styles.progressBarFill}
          style={{
            width: "240px",
          }}
        ></div>
      </div>
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q-8.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h2>{QUIZ.preferenceQuestion1}</h2>
      <div className={styles.answersWrapper}>
        <ul className={`${styles.imageCheckbox} ${styles.preferencesCheckbox}`}>
          {answersArr.map((answer, index) => (
            <li key={`checkbox-${index}`}>
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                name={`answer${index}`}
                value={answer.option}
                checked={
                  Object.values(formParams.parentPreferences)[index] ===
                  answer.option
                }
                onChange={(event) => getParentPreferences(event, answer.option)}
              />

              <div className={styles.wrapper}>
                <div className={styles.imageLabel}>{answer.option}</div>
                <Image
                  src={answer.img}
                  alt={answer.option}
                  width={25}
                  height={25}
                  objectFit="cover"
                />
              </div>
              <label htmlFor={`checkbox-${index}`}></label>
            </li>
          ))}
        </ul>
      </div>
      <NextQuestionBtn hasBeenClicked={isDisabled} />
    </div>
  );
};

export default PreferenceQuestionOne;
