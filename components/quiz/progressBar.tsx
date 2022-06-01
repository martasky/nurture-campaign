import React, { useContext } from "react";
import Image from "next/image";

import styles from "./QuizStyle.module.css";

import { useRouter } from "next/router";
import Link from "next/link";

const progressPuzzle = {
  piece1: {
    on: "/./images/progressBar/piece1-on.png",
    off: "/./images/progressBar/piece1-off.png",
  },
  piece2: {
    on: "/./images/progressBar/piece2-on.png",
    off: "/./images/progressBar/piece2-off.png",
  },
  piece3: {
    on: "/./images/progressBar/piece3-on.png",
    off: "/./images/progressBar/piece3-off.png",
  },
  piece4: {
    on: "/./images/progressBar/piece4-on.png",
    off: "/./images/progressBar/piece4-off.png",
  },
  bars: {
    up: "/./images/progressBar/separator-up.png",
    down: "/./images/progressBar/separator-down.png",
  },
};
const ProgressBar = () => {
  const router = useRouter();

  return (
    <div className={styles.progressBar}>
      <div>
        <Image
          src={progressPuzzle.piece1.on}
          alt=""
          width={55}
          height={60}
          objectFit="contain"
        />
      </div>
      <div className={styles.barImage}>
        <Image
          src={progressPuzzle.bars.down}
          alt=""
          width={15}
          height={5}
          objectFit="contain"
        />
      </div>
      <div>
        <Image
          src={
            router.query.index == "1" || router.query.index == "2"
              ? progressPuzzle.piece2.off
              : progressPuzzle.piece2.on
          }
          alt=""
          width={55}
          height={60}
          objectFit="contain"
        />
      </div>
      <div className={styles.barImage}>
        <Image
          src={progressPuzzle.bars.up}
          alt=""
          width={15}
          height={5}
          objectFit="contain"
        />
      </div>
      <div>
        <Image
          src={
            router.query.index == "1" ||
            router.query.index == "2" ||
            router.query.index == "3" ||
            router.query.index == "4" ||
            router.query.index == "5"
              ? progressPuzzle.piece3.off
              : progressPuzzle.piece3.on
          }
          alt=""
          width={55}
          height={60}
          objectFit="contain"
        />
      </div>
      <div className={styles.barImage}>
        <Image
          src={progressPuzzle.bars.down}
          alt=""
          width={15}
          height={5}
          objectFit="contain"
        />
      </div>
      <div>
        <Image
          src={
            router.query.index == "10" ||
            router.query.index == "9" ||
            router.query.index == "8"
              ? progressPuzzle.piece4.on
              : progressPuzzle.piece4.off
          }
          alt=""
          width={60}
          height={60}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
