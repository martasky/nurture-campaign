import React, { ReactNode, useState } from "react";
import { FormParamsType, QuizContext, QuizContextType } from "./contextType";

interface ContextType {
  children: ReactNode;
}

export const defaultFormInput: FormParamsType = {
  location: "",
  startTime: "",
  childAge: "",
  childPersonality: {
    answer0: "25",
    answer1: "25",
    answer2: "25",
    answer3: "25",
    answer4: "25",
  },
  favDino: "",
  parentWork: "",
  parentPersonality: {
    answer0: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  },
  method: "",
  parentPreferences: {
    answer0: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    answer8: "",
    answer9: "",
  },
  nurseryPreferences: {
    answer0: "",
    answer1: "",
    answer2: "",
    answer3: "",
  },
};

const QuizContextWrapper: React.FC<ContextType> = ({ children }) => {
  const [formParams, setFormParams] = useState(defaultFormInput);
  // state to store the answers from the form

  const context: QuizContextType = {
    formParams,
    setFormParams,
    // values from the state
  };
  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

export default QuizContextWrapper;
