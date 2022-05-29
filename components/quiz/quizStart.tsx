import React from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import StartQuizBtn from "../buttons/startQuizBtn";

const QuizStart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src="/./images/dino-baby.png"
          alt=""
          width={300}
          height={350}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h1>{QUIZ.title}</h1>
      <p>{QUIZ.introduction}</p>
      <StartQuizBtn />
    </div>
  );
};

export default QuizStart;
