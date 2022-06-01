import React, { useContext } from "react";

import styles from "./QuizStyle.module.css";

import ArrowBackBtn from "../buttons/arrowBackBtn";
import { QuizContext } from "../../context/contextType";
import Image from "next/image";
import BabySvgIcon from "./icons/babySvgIcon";
import CakeSvgIcon from "./icons/cakeSvgIcon";
import DistanceSvgIcon from "./icons/distanceSvgIcon";
import { MediaContext } from "../../context/mediaContextType";

interface Nursery {
  about: string;
  ageFrom: number;
  ageTo: number;
  capacity: number;
  careType: string;
  distanceInMeters: number;
  email: string;
  hasBeenClaimed: boolean;
  id: string;
  imageUrl: string;
  latitude: number;
  logo: string;
  longitude: number;
  name: string;
  ofstedRating: string;
  openingHours: {};
}

const fromAMorPM = (str: string) => {
  let hour = parseInt(str.replace(/[A-Za-z]/g, ""));
  let amOrPm = str.replace(/\d/g, "").toLowerCase();
  if (amOrPm.localeCompare("pm") == 0) {
    hour += 12;
  }
  return hour;
};

const NurseriesList = ({ foundNurseries }) => {
  const { formParams } = useContext(QuizContext);
  const { isDesktop } = useContext(MediaContext);

  let ageFrom = 0;
  let ageTo = 100;
  if (formParams.childAge.indexOf("6 months") > -1) {
    ageTo = 0.5;
  } else if (formParams.childAge.indexOf("6 - 24") > -1) {
    ageTo = 2;
  } else if (formParams.childAge.indexOf("1 - 3") > -1) {
    ageFrom = 1;
    ageTo = 3;
  } else if (formParams.childAge.indexOf("3 - 5") > -1) {
    ageFrom = 3;
    ageTo = 5;
  } else if (formParams.childAge.indexOf("5 years or") > -1) {
    ageFrom = 5;
  }

  let timeFrom = 11;
  let timeTo = 14;
  if (formParams.parentWork.indexOf("9 to 5") > -1) {
    timeFrom = 9;
    timeTo = 17;
  } else if (formParams.parentWork.indexOf("in shifts") > -1) {
    timeFrom = 7;
    timeTo = 19;
  }

  let nurseryList = foundNurseries.filter((elem) => {
    let result = elem.ageFrom <= ageFrom && elem.ageTo >= ageTo;
    if ("openingHours" in elem) {
      if ("monday" in elem.openingHours) {
        if (elem.openingHours.monday != null) {
          if ("from" in elem.openingHours.monday) {
            result =
              result &&
              fromAMorPM(elem.openingHours.monday.from) <= timeFrom &&
              fromAMorPM(elem.openingHours.monday.to) >= timeTo;
          }
        }
      }
    }
    return result;
  });

  return (
    <div className={styles.nurseriesContainer}>
      <div className={styles.resultNumberWrapper}>
        <ArrowBackBtn />

        <p
          style={{
            fontSize: "0.8rem",
            marginTop: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          {nurseryList.length} results
        </p>
      </div>
      <div className={styles.nurseriesDesktop}>
        {nurseryList.map((nursery: Nursery, index: number) => (
          <a
            href={`https://findnurture.com/settings/?id=${nursery.id}`}
            target="_blank"
            rel="noreferrer"
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
              {" "}
              <Image src={nursery.imageUrl} alt="" width={100} height={100} />
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
                  <BabySvgIcon />
                </span>
                {`${nursery.capacity} children`}
              </p>
              <p>
                <span>
                  <CakeSvgIcon />
                </span>
                {`${nursery.ageFrom} - ${nursery.ageTo} years`}
              </p>
              <p>
                <span>
                  <DistanceSvgIcon />
                </span>
                {`${(nursery.distanceInMeters / 1000).toFixed(1)} km away`}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NurseriesList;
