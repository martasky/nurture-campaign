import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

export enum answers {
  A1 = "It is open out of the regular office hours",
  A2 = "The staff is qualified to take care of children with learning disabilities",
  A3 = "It offers a specific food alternative (gluten-free, vegetarian, vegan, etc)",
  A4 = "I don’t have any preferences",
  A5 = "input",
}
const PreferenceQuestionThree = () => {
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q-10.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h2>{QUIZ.preferenceQuestion3}</h2>
      <div className={styles.answersWrapper}>
        <ul>
          {Object.values(answers).map((answer) => (
            <li key={answer}>
              <input
                type="checkbox"
                id={answer}
                value={answer}
                name="question3"
              />
              <label htmlFor={answer}>
                {answer == "input" ? (
                  <input
                    className={styles.specialTextInput}
                    type="text"
                    placeholder="Other preferences..."
                  />
                ) : (
                  answer
                )}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <NextQuestionBtn />
    </div>
  );
};

export default PreferenceQuestionThree;
