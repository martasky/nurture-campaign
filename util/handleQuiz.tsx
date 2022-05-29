import React, { useContext } from "react";
import { FormParamsType, QuizContext } from "../context/contextType";
import { answersArr } from "../components/quiz/childQuestionTwo";
import { request, gql } from "graphql-request";

export const SearchNurseriesQuery = gql`
  query SearchNurseriesQuery($input: SearchInput!) {
    searchNurseries(input: $input) {
      nurseries {
        about
        id
        name
        hasBeenClaimed
        email
        careType
        imageUrl
        ofstedRating
        capacity
        ageFrom
        logo
        ageTo
        latitude
        longitude
        distanceInMeters
        openingHours {
          monday {
            from
            to
          }
          tuesday {
            from
            to
          }
          wednesday {
            from
            to
          }
          thursday {
            from
            to
          }
          friday {
            from
            to
          }
          saturday {
            from
            to
          }
          sunday {
            from
            to
          }
        }
      }
      latitude
      longitude
      radiusInMeters
    }
  }
`;

export const handleChange = (
  event: React.ChangeEvent<{ name: string; value: unknown }>,
  setFormParams: React.Dispatch<React.SetStateAction<FormParamsType>>
) => {
  const { name, value } = event.target;
  setFormParams((previousFormParams: FormParamsType) => ({
    ...previousFormParams,
    [name]: value,
  }));
};

export const handleRange = (
  setFormParams: React.Dispatch<React.SetStateAction<FormParamsType>>,
  childPersonality: {
    answer0: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
  }
) => {
  setFormParams((previousFormParams: FormParamsType) => ({
    ...previousFormParams,
    childPersonality: childPersonality,
  }));
};
export const handleRangeParent = (
  setFormParams: React.Dispatch<React.SetStateAction<FormParamsType>>,
  parentPersonality: {
    answer0: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
  }
) => {
  setFormParams((previousFormParams: FormParamsType) => ({
    ...previousFormParams,
    parentPersonality: parentPersonality,
  }));
};

export const handleCheckbox = (
  setFormParams: React.Dispatch<React.SetStateAction<FormParamsType>>,
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
  }
) => {
  setFormParams((previousFormParams: FormParamsType) => ({
    ...previousFormParams,
    parentPreferences: parentPreferences,
  }));
};

export const handleCheckboxNursery = (
  setFormParams: React.Dispatch<React.SetStateAction<FormParamsType>>,
  nurseryPreferences: {
    answer0: string;
    answer1: string;
    answer2: string;
    answer3: string;
  }
) => {
  setFormParams((previousFormParams: FormParamsType) => ({
    ...previousFormParams,
    nurseryPreferences: nurseryPreferences,
  }));
};
// export const transformRangeValues = (
//   value: number,
//   answer: {
//     adj1: string;
//     adj2: string;
//   }
// ) => {
//   let result: string;
//   if (value > 25) {
//     result = answer.adj2;
//   } else if (value === 25) {
//     result = `Neither ${answer.adj1.toLowerCase()} nor ${answer.adj2.toLowerCase()}`;
//   } else {
//     result = answer.adj1;
//   }
//   return result;
// };

export const transformRangeValues = (value: string, index: number) => {
  let result: string;

  if (value > "25") {
    result = answersArr[index].adj2;
  } else if (value === "25") {
    result = `Neither ${answersArr[index].adj1.toLowerCase()} nor ${answersArr[
      index
    ].adj2.toLowerCase()}`;
  } else {
    result = answersArr[index].adj1;
  }

  console.log({ result });

  return result.toLocaleLowerCase();
};
