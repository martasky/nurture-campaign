import React, { useContext } from "react";
import { TITLES, VALUE_PROPOSITION } from "../../content/constants";
import Image from "next/image";
import styles from "./ValueProposition.module.css";
import { MediaContext } from "../../context/mediaContextType";

const ValueProposition = () => {
  const { isDesktop } = useContext(MediaContext);
  return (
    <div className={styles.container1}>
      <h2>
        {TITLES.title}
        <span>easy</span>
      </h2>
      <div className={styles.container2}>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image
              src="/./images/purplepuzzle.webp"
              alt="Puzzle illustration"
              width={isDesktop ? 160 : 180}
              height={isDesktop ? 160 : 180}
              objectFit="cover"
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
              src="/./images/yellowPuzzle.webp"
              alt="Puzzle illustration"
              width={isDesktop ? 160 : 180}
              height={isDesktop ? 160 : 180}
              objectFit="cover"
            />
          </div>

          <h3>{VALUE_PROPOSITION.subtitle2}</h3>
          <p>
            <strong> Don&apos;t spend time</strong> checking nurseries in
            different pages or googling for ratings. Find your list of nurseries
            and contact them straight away.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image
              src="/./images/pinkPuzzle.webp"
              alt="Puzzle illustration"
              width={isDesktop ? 160 : 180}
              height={isDesktop ? 160 : 180}
              objectFit="contain"
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
