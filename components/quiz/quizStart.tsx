import React, { useEffect } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import StartQuizBtn from "../buttons/startQuizBtn";
import { useRouter } from "next/router";
const QuizStart = () => {
  const router = useRouter();
  // useEffect(() => {
  //   router.push({
  //     pathname: "/quiz",
  //     query: {
  //       index: "0",
  //     },
  //   });
  // }, [router]);

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
