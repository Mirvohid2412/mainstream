import React, { useState, useEffect } from "react";
import styles from "./index.module.sass";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade, Zoom, Flip } from "react-reveal";

export const Video = () => {
  const t = useTranslations();

  const videos = ["/assets/video/header_1.mp4", "/assets/video/header_2.mp4"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEnded = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <Fade cascade>
      <div className={styles.container}>
        <div className={styles.container__smm}>
          <video
            key={currentIndex} 
            autoPlay
            muted
            controls={false}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onEnded={handleEnded}
          >
            <source src={videos[currentIndex]} type="video/mp4" />
          </video>
        </div>
      </div>
    </Fade>
  );
};
