import React, { useContext } from "react";
import Image from "next/image";
import styles from "./QuizStyle.module.css";
import { useRouter } from "next/router";
import { MediaContext } from "../../context/mediaContextType";

const ProgressBar = () => {
  const { isDesktop } = useContext(MediaContext);
  const progressPuzzle = {
    piece1: {
      on: "/images/progressBar/piece1-on.webp",
      off: "/images/progressBar/piece1-off.webp",
    },
    piece2: {
      on: "/images/progressBar/piece2-on.png",
      off: "/images/progressBar/piece2-off.png",
    },
    piece3: {
      on: "/images/progressBar/piece3-on.webp",
      off: "/images/progressBar/piece3-off.webp",
    },
    piece4: {
      on: "/images/progressBar/piece4-on.webp",
      off: "/images/progressBar/piece4-off.webp",
    },
    bars: {
      up: isDesktop
        ? "/images/progressBar/separatorDesktopUp.webp"
        : "/images/progressBar/separator-up.webp",
      down: isDesktop
        ? "/images/progressBar/separatorDesktopDown.webp"
        : "/images/progressBar/separator-down.webp",
    },
  };

  const router = useRouter();

  return (
    <div className={styles.progressBar}>
      <div>
        <Image
          src={progressPuzzle.piece1.on}
          alt="Puzzle progres bar illustration"
          width={isDesktop ? 70 : 55}
          height={isDesktop ? 80 : 60}
          objectFit="contain"
          onClick={() =>
            router.push({
              pathname: "/quiz",
              query: {
                index: 1,
              },
            })
          }
        />
      </div>
      <div className={styles.barImage}>
        <Image
          src={progressPuzzle.bars.down}
          alt="Puzzle progres bar illustration"
          width={isDesktop ? 120 : 15}
          height={isDesktop ? 4 : 5}
          objectFit={isDesktop ? "cover" : "contain"}
        />
      </div>
      <div>
        <Image
          src={
            router.query.index == "1" || router.query.index == "2"
              ? progressPuzzle.piece2.off
              : progressPuzzle.piece2.on
          }
          alt="Puzzle progres bar illustration"
          width={isDesktop ? 70 : 55}
          height={isDesktop ? 80 : 60}
          objectFit="contain"
          onClick={() =>
            router.push({
              pathname: "/quiz",
              query: {
                index: 3,
              },
            })
          }
        />
      </div>
      <div className={styles.barImage}>
        <Image
          src={progressPuzzle.bars.up}
          alt="Puzzle progres bar illustration"
          width={isDesktop ? 120 : 15}
          height={isDesktop ? 4 : 5}
          objectFit={isDesktop ? "cover" : "contain"}
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
          alt="Puzzle progres bar illustration"
          width={isDesktop ? 70 : 55}
          height={isDesktop ? 80 : 60}
          objectFit="contain"
          onClick={() =>
            router.push({
              pathname: "/quiz",
              query: {
                index: 6,
              },
            })
          }
        />
      </div>
      <div className={styles.barImage}>
        <Image
          src={progressPuzzle.bars.down}
          alt="Puzzle progres bar illustration"
          width={isDesktop ? 120 : 15}
          height={isDesktop ? 4 : 5}
          objectFit={isDesktop ? "cover" : "contain"}
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
          alt="Puzzle progres bar illustration"
          width={isDesktop ? 80 : 60}
          height={isDesktop ? 80 : 60}
          objectFit="cover"
          onClick={() =>
            router.push({
              pathname: "/quiz",
              query: {
                index: 8,
              },
            })
          }
        />
      </div>
    </div>
  );
};

export default ProgressBar;
