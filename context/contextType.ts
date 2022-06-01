import React from "react";

export type QuizContextType = {
  formParams: FormParamsType;
  setFormParams: React.Dispatch<React.SetStateAction<FormParamsType>>;
  // types of the values from the quiz
};
export type FormParamsType = {
  location: string;
  startTime: string;
  childAge: string;
  childPersonality: {
    answer0: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
  };
  favDino: string;
  parentWork: string;
  parentPersonality: {
    answer0: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
  };
  method: string;
  parentPreferences: {
    answer0: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
    answer6: string;
    answer7: string;
    answer8: string;
    answer9: string;
  };
  nurseryPreferences: {
    answer0: string;
    answer1: string;
    answer2: string;
    answer3: string;
  };
};
export const QuizContext = React.createContext({} as QuizContextType);
