import React, { useState, useEffect } from "react";
import "./BlurTicker.css";
import { useRef } from "react";

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

const BlurTicker = ({ number = 999, duration = 4000, blur = 2 }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [complete, setComplete] = useState(false);

  const tickerRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const startAnimation = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easedProgress = easeInOutCubic(percentage);

      setCurrentNumber(Math.floor(easedProgress * number));
      tickerRef.current.style.filter = `blur(${blur}px)`;

      if (progress < duration) {
        animationFrame = requestAnimationFrame(startAnimation);
      } else {
        tickerRef.current.style.filter = `blur(${0}px)`;
        setComplete(true);
      }
    };

    animationFrame = requestAnimationFrame(startAnimation);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [number, duration]);

  return (
    <h1
      ref={tickerRef}
      className="blur-ticker"
      data-animating={`${complete ? "true" : "false"}`}
    >
      ₹{currentNumber}
    </h1>
  );
};

export default BlurTicker;
