import React from "react";
import { TITLES, VALUE_PROPOSITION } from "../../content/constants";
import Image from "next/image";
import styles from "./ValueProposition.module.css";

const ValueProposition = () => {
  return (
    <div className={styles.container}>
      <h2>
        {TITLES.title}
        <span>easy</span>
      </h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image
              src="/./images/purplePuzzle.png"
              alt=""
              width={200}
              height={200}
            />
          </div>

          <h3>{VALUE_PROPOSITION.subtitle1}</h3>
          <p>
            Using Nurture is easy and intuitive. We focus in
            <strong> what is important </strong>
            and avoid unnecesary and complex filtering that make it hard to
            search.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image
              src="/./images/yellowPuzzle.png"
              alt=""
              width={200}
              height={200}
            />
          </div>

          <h3>{VALUE_PROPOSITION.subtitle2}</h3>
          <p>
            <strong> Don’t spend time</strong> checking nurseries in different
            pages or googling for ratings. Find your list of nurseries and
            contact them straight away.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image
              src="/./images/pinkPuzzle.png"
              alt=""
              width={200}
              height={200}
            />
          </div>

          <h3>{VALUE_PROPOSITION.subtitle3}</h3>
          <p>
            Transparency is key. All nurseries in Nurture are
            <strong> Ofsted accredited</strong>, and include ratings to help you
            compare and choose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
