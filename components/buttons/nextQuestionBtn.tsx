import { useRouter } from "next/router";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "../quiz/QuizStyle.module.css";

import { QuizContext } from "../../context/contextType";

const NextQuestionBtn = ({ hasBeenClicked }) => {
  const router = useRouter();
  const nextPage = () => {
    let index = router.query.index as string;
    let indexNumber = parseInt(index);
    indexNumber++;
    console.log({ indexNumber });
    router.push({
      pathname: "/quiz",
      query: {
        index: indexNumber,
      },
    });
  };

  return (
    <button disabled={!hasBeenClicked} onClick={nextPage}>
      <div className={styles.findResults}>
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
