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

const answersArr = [
  { option: "Tyrannosaurus rex", img: "/images/quizIcons/tyrano.webp" },
  { option: "Velociraptor", img: "/images/quizIcons/velociraptor.webp" },
  { option: "Diplodocus", img: "/images/quizIcons/diplodocuss.webp" },
  { option: "Stegosaurus", img: "/images/quizIcons/stegosaurus.webp" },
  {
    option: "Not my child’s cup of tea",
    img: "/./images/quizIcons/no-dinos.webp",
  },
];
const ChildQuestionThree = () => {
  const { formParams, setFormParams } = useContext(QuizContext);
  const { isDesktop } = useContext(MediaContext);
  const hasBeenClicked = Boolean(formParams.favDino) ? true : false;

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
                width: isDesktop ? "400px" : "150px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperDesktop}>
        <div className={styles.img}>
          <Image
            src="/images/quiz/Q5.webp"
            alt="Quiz illustration"
            width={isDesktop ? 350 : 250}
            height={isDesktop ? 280 : 200}
            objectFit="cover"
          />
        </div>
        <div>
          <h2>{QUIZ.childQuestion3}</h2>
          <div className={styles.answersWrapper}>
            <ul className={styles.imageCheckbox}>
              {answersArr.map((answer, index) => (
                <li key={`checkbox-${index}`}>
                  <input
                    type="radio"
                    id={`checkbox-${index}`}
                    name="favDino"
                    value={answer.option}
                    checked={formParams.favDino === answer.option}
                    onChange={(event) => handleChange(event, setFormParams)}
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
          <NextQuestionBtn hasBeenClicked={hasBeenClicked} />
        </div>
      </div>
    </div>
  );
};

export default ChildQuestionThree;
