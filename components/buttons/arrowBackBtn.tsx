import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../quiz/QuizStyle.module.css";

import React, { useContext } from "react";
import { MediaContext } from "../../context/mediaContextType";

const NextQuestionBtn = () => {
  const { isDesktop } = useContext(MediaContext);
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
    <div
      className={styles.arrowBack}
      style={{
        marginLeft:
          isDesktop || router.asPath === "/quiz/?index=12" ? 0 : "1rem",
      }}
      onClick={previousPage}
    >
      <Image
        src="/./images/quizIcons/arrow-back-purple.png"
        alt="arrow icon"
        width={30}
        height={20}
      />
    </div>
  );
};

export default NextQuestionBtn;
