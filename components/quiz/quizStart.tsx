import React, { useContext } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import StartQuizBtn from "../buttons/startQuizBtn";
import { MediaContext } from "../../context/mediaContextType";

const QuizStart = () => {
  const { isDesktop } = useContext(MediaContext);
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapperDesktop} ${styles.wrapperStart}`}>
        <div className={styles.img}>
          <Image
            src={
              isDesktop
                ? "/images/baby-dino-desktop.webp"
                : "/images/dino-baby.webp"
            }
            alt=""
            width={isDesktop ? 378 : 300}
            height={isDesktop ? 338 : 350}
            objectFit="contain"
          />
        </div>
        <div className={styles.startText}>
          <h1>{QUIZ.title}</h1>
          <p>{QUIZ.introduction}</p>
          <StartQuizBtn />
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
