import React, { useState, useEffect } from "react";
import "./Slider.css";

const slidesData = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
    text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT.",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop",
    text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT.",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
    text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT.",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex >= slidesData.length) newIndex = 0;
      if (newIndex < 0) newIndex = slidesData.length - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={slide.image} alt="slide" className="slide-image" />
          {index === currentIndex && (
            <div className="slide-content">
              <h1>{slide.text}</h1>
              <div className="underline"></div>
            </div>
          )}
        </div>
      ))}

      <button className="arrow arrow-left" onClick={() => changeSlide(-1)}>
        &#10094;
      </button>
      <button className="arrow arrow-right" onClick={() => changeSlide(1)}>
        &#10095;
      </button>

      <div className="slider-controls">
        {slidesData.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
