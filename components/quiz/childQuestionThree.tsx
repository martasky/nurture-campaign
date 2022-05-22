import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";

const answersArr = [
  { option: "Tyrannosaurus rex", img: "/./images/quizIcons/tyrano.webp" },
  { option: "Velociraptor", img: "/./images/quizIcons/velociraptor.webp" },
  { option: "Diplodocus", img: "/./images/quizIcons/diplodocuss.webp" },
  { option: "Stegosaurus", img: "/./images/quizIcons/stegosaurus.webp" },
  {
    option: "Not my child’s cup of tea",
    img: "/./images/quizIcons/no-dinos.webp",
  },
];
const ChildQuestionThree = () => {
  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q5.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h2>{QUIZ.childQuestion3}</h2>
      <div className={styles.answersWrapper}>
        <ul className={styles.imageCheckbox}>
          {answersArr.map((answer, index) => (
            <li key={`checkbox-${index}`}>
              <input
                type="radio"
                id={`checkbox-${index}`}
                name="dinoQuestion"
                value={answer.option}
              />

              <div className={styles.wrapper}>
                <div className={styles.imageLabel}>{answer.option}</div>
                <Image
                  src={answer.img}
                  alt={answer.option}
                  width={50}
                  height={45}
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

export default ChildQuestionThree;
