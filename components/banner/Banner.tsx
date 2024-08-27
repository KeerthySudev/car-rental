// Import necessary modules and styles
"use client";
import styles from "./Banner.module.css";
import { useState, useEffect } from "react";


export default function Banner() {
  // Define an array of image sources
  const images = [
    "/images/banner.svg",
    "/images/banner.svg",
    "/images/banner.svg",
  ];

  // Initialize state for the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set up an effect to automatically switch slides every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      // Update the current slide, wrapping around to the start if necessary
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, [images.length]);

  // Render the banner component
  return (
    <div className={styles.banner}>
      {/* Slides container */}
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Map over the images and render a slide for each one */}
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className={styles.content}>
        <p>Receive guaranteed</p>
        <button>GIFT VOUCHER</button>
        <p className={styles.lease}>on a monthly hire or lease</p>
      </div>

      {/* Dots container */}
      <div className={styles.dots}>
        {/* Map over the images and render a dot for each one */}
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
