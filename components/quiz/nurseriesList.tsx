import React, { useContext } from "react";

import styles from "./QuizStyle.module.css";

import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import Image from "next/image";
import Link from "next/link";
import BabySvgIcon from "./icons/babySvgIcon";
import CakeSvgIcon from "./icons/cakeSvgIcon";
import DistanceSvgIcon from "./icons/distanceSvgIcon";
const NurseriesList = ({ foundNurseries }) => {
  console.log(typeof foundNurseries);
  const { formParams, setFormParams } = useContext(QuizContext);

  // const nurseryList = React.useMemo(() => {
  //   if (!data) return null;
  //   return data.filter((nursery) => {
  //     nursery.ofstedRating === "Outstanding" &&
  //       nursery.ageFrom === formParams.childAge;
  //   });
  // }, [data, formParams.childAge]);

  let nurseryList = foundNurseries.filter(
    (nursery) => nursery.ofstedRating === "Outstanding"
    // nursery.ageFrom >= formParams.childAge.substring(0, 1)
    // Object.values(formParams.parentPreferences).filter((elem) =>
    //   nursery.about.includes(elem)
    // )
  );

  console.log(formParams.childAge.substring(0, 1));

  console.log({ nurseryList });

  return (
    <div className={styles.nurseriesContainer}>
      <ArrowBackBtn />
      <p
        style={{
          fontSize: "0.8rem",
          marginTop: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        {foundNurseries.length} results
      </p>
      {nurseryList.map((nursery, index) => (
        <a
          href={`https://findnurture.com/settings/?id=${nursery.id}`}
          key={`item-${index}`}
        >
          <div
            style={{
              backgroundImage: nursery.imageUrl
                ? `url(${nursery.imageUrl})`
                : `url(/./images/quiz/defaultImg.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "122px",
              height: "124px",
              borderRadius: "10px",
            }}
          ></div>
          <div className={styles.nurseryInfoWrapper}>
            <p>{nursery.careType}</p>

            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "black",
              }}
            >
              {nursery.name}
            </p>
            <p>
              <span>
                <BabySvgIcon />{" "}
              </span>
              {`${nursery.capacity} children`}
            </p>
            <p>
              <span>
                <CakeSvgIcon />{" "}
              </span>
              {`${nursery.ageFrom} - ${nursery.ageTo} years`}
            </p>
            <p>
              <span>
                <DistanceSvgIcon />{" "}
              </span>
              {`${(nursery.distanceInMeters / 1000).toFixed(1)} km away`}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NurseriesList;
