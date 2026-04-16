import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.sass";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade, Zoom, Flip } from "react-reveal";

export const Video = () => {
  const t = useTranslations();

  const videos = ["/assets/video/header_1.mp4", "/assets/video/header_2.mp4"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleEnded = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch((err) => console.log("Video play error:", err));
    }
  }, [currentIndex]);

  return (
    <Fade cascade>
      <div className={styles.container}>
        <div className={styles.container__smm}>
          {videos.map((src, index) => (
            <video
              key={src}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={src}
              className={`${styles.video} ${
                index === currentIndex ? styles.active : styles.hidden
              }`}
              autoPlay={index === currentIndex}
              muted
              playsInline
              controls={false}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onEnded={handleEnded}
              preload="auto"
            />
          ))}
        </div>
      </div>
    </Fade>
  );
};

