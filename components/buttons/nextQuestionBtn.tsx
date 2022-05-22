import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { BUTTONS } from "../../content/constants";
import styles from "../quiz/QuizStyle.module.css";
const NextQuestionBtn = () => {
  const router = useRouter();
  const nextPage = () => {
    let index = router.query.index as string;
    let indexNumber = parseInt(index);
    indexNumber++;
    console.log({ indexNumber });
    router.replace({
      pathname: "/quiz",
      query: {
        index: indexNumber,
      },
    });
  };

  return (
    <button onClick={nextPage}>
      <div className={styles.findResults}>
        {router.query.index === "11" && <p>{BUTTONS.results}</p>}
        <Image
          src="/./images/quizIcons/arrow-next-white.png"
          alt=""
          width={30}
          height={20}
        />
      </div>
    </button>
  );
};

export default NextQuestionBtn;
