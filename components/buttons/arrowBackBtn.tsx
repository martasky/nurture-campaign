import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../quiz/QuizStyle.module.css";

import React from "react";

const NextQuestionBtn = () => {
  const router = useRouter();
  const previousPage = () => {
    let index = router.query.index as string;
    let indexNumber = parseInt(index);
    indexNumber--;

    router.push({
      pathname: "/quiz",
      query: {
        index: indexNumber,
      },
    });
  };

  return (
    <div className={styles.arrowBack} onClick={previousPage}>
      <Image
        src="/./images/quizIcons/arrow-back-purple.png"
        alt=""
        width={30}
        height={20}
      />
    </div>
  );
};

export default NextQuestionBtn;
