import React, { useContext } from "react";
import Image from "next/image";
import { QUIZ } from "../../content/constants";
import styles from "./QuizStyle.module.css";
import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import { transformRangeValues } from "../../util/handleQuiz";
import ShowResultsBtn from "../buttons/showResultsBtn";
import { MediaContext } from "../../context/mediaContextType";

const FinalScreen = () => {
  const { formParams } = useContext(QuizContext);
  const { isDesktop } = useContext(MediaContext);
  return (
    <div className={`${styles.container} ${styles.finalResultContainer}`}>
      <ArrowBackBtn />
      <div className={`${styles.wrapperDesktop} ${styles.finalResultWrapper}`}>
        <div
          style={{
            display: "grid",
          }}
        >
          <div className={styles.img}>
            <Image
              src="/./images/quiz/puzzle.webp"
              alt="Quiz illustration puzzle"
              width={isDesktop ? 250 : 150}
              height={isDesktop ? 250 : 150}
              objectFit="contain"
            />
          </div>
          <h1>{QUIZ.thankYou}</h1>
        </div>
        <div>
          <div className={styles.resultWrapper}>
            <ul
              style={{
                display: "initial",
              }}
            >
              <p
                style={{
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                {QUIZ.summary}
              </p>
              <li>
                <span>
                  <Image
                    src="/./images/quizIcons/location.webp"
                    alt="Quiz icon"
                    width={30}
                    height={40}
                    objectFit="contain"
                  />
                </span>
                Nurseries located near
                {formParams.location[0]?.toUpperCase() +
                  formParams.location.substring(1)}
              </li>
              <li>
                <span>
                  <Image
                    src="/./images/quizIcons/clock.webp"
                    alt="Quiz icon"
                    width={30}
                    height={40}
                    objectFit="contain"
                  />
                </span>
                Available
                {formParams.startTime[0]?.toLowerCase() +
                  formParams.startTime.substring(1)}
              </li>
            </ul>
            <ul
              style={{
                marginTop: 0,
              }}
            >
              <li>
                <span>
                  <Image
                    src="/./images/quizIcons/ratio.webp"
                    alt="Quiz icon"
                    width={30}
                    height={40}
                    objectFit="contain"
                  />
                </span>
                For a child that...
              </li>
              <li
                style={{
                  marginLeft: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "max-content 1fr",
                  alignItems: "start",
                }}
              >
                <span>&#8226;</span> is {formParams.childAge} old
              </li>
              <li
                style={{
                  marginLeft: "2.5rem",
                  display: "grid",
                  alignItems: "start",
                }}
              >
                <span>&#8226;</span>{" "}
                <div>
                  {" "}
                  is more
                  {Object.values(formParams.childPersonality).map(
                    (value, index) => (
                      <span
                        style={{
                          margin: 0,
                        }}
                        key={index}
                      >{` ${transformRangeValues(value, index)}, `}</span>
                    )
                  )}
                </div>
              </li>
              {Boolean(
                Object.values(formParams).includes("Not my child’s cup of tea")
              ) ? (
                <li
                  style={{
                    marginLeft: "2.5rem",
                    display: "grid",
                    gridTemplateColumns: "max-content 1fr",
                    alignItems: "start",
                  }}
                >
                  <span>&#8226;</span> doesnt like dinaurs
                </li>
              ) : (
                <li
                  style={{
                    marginLeft: "2.5rem",
                    display: "grid",
                    gridTemplateColumns: "max-content 1fr",
                    alignItems: "start",
                  }}
                >
                  <span>&#8226;</span> {`likes ${formParams.favDino}`}
                </li>
              )}
              {Boolean(
                Object.values(formParams.nurseryPreferences).includes(
                  "I don’t have any preferences"
                )
              ) ? null : (
                <li>
                  <span>
                    <Image
                      src="/./images/quizIcons/rating.webp"
                      alt="Quiz icon"
                      width={30}
                      height={40}
                      objectFit="contain"
                    />
                  </span>
                  Nurseries that...
                </li>
              )}

              {Object.values(formParams.nurseryPreferences).map(
                (value, index) =>
                  value == "I don’t have any preferences" ||
                  value == "" ? null : (
                    <li
                      style={{
                        marginLeft: "2.5rem",
                        display: "grid",
                        gridTemplateColumns: "max-content 1fr",
                        alignItems: "start",
                      }}
                      key={index}
                    >
                      <span>&#8226;</span> {value}
                    </li>
                  )
              )}
            </ul>

            <p>{QUIZ.seeList}</p>
          </div>
          <ShowResultsBtn />
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
