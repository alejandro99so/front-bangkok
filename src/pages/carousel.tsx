"use client";

import React, { useState } from "react";
import styles from "../styles/carousel.module.css";

type CarouselProps = {
  slides: {
    image: string;
    text: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselImages}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className={styles.carouselImage}
            />
            <div className={styles.textOverlay}>{slide.text}</div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className={`${styles.navButton} ${styles.prevButton}`}
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.navButton} ${styles.nextButton}`}
      >
        {">"}
      </button>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
