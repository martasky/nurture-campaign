import { useRouter } from "next/router";
import React from "react";
import { BUTTONS } from "../../content/constants";

const StartQuizBtn = () => {
  const router = useRouter();
  const nextPage = () => {
    let indexNumber = 0;
    indexNumber++;

    router.replace({
      pathname: "/quiz",
      query: {
        index: indexNumber,
      },
    });
  };

  return <button onClick={nextPage}>{BUTTONS.startQuiz}</button>;
};

export default StartQuizBtn;
