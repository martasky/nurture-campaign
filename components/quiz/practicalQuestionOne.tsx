import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import NextQuestionBtn from "../buttons/nextQuestionBtn";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { handleChange } from "../../util/handleQuiz";
import { QuizContext } from "../../context/contextType";
import ProgressBar from "./progressBar";
const PracticalQuestionOne = () => {
  const { formParams, setFormParams } = useContext(QuizContext);

  const hasBeenClicked =
    Boolean(formParams.location) && formParams.location.length > 2
      ? true
      : false;

  return (
    <div className={styles.container}>
      <ArrowBackBtn />
      <ProgressBar />
      <div className={styles.progressBarBg}>
        <div
          className={styles.progressBarFill}
          style={{
            width: "30px",
          }}
        ></div>
      </div>
      <div className={styles.img}>
        <Image
          src="/./images/quiz/Q1-1.webp"
          alt=""
          width={250}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className={styles.wrapper}>
        <h2>{QUIZ.practicalQuestion1}</h2>
        <input
          className={styles.textInput}
          type="text"
          placeholder="Enter city name..."
          name="location"
          value={formParams.location}
          onChange={(event) => handleChange(event, setFormParams)}
        />
        <NextQuestionBtn hasBeenClicked={hasBeenClicked} />
      </div>
    </div>
  );
};

export default PracticalQuestionOne;
