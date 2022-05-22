import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

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
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
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
                name={answer.option}
                value={answer.option}
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
      <NextQuestionBtn />
    </div>
  );
};

export default PreferenceQuestionOne;
