import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hs-wrap">
      <div className="handwave">👋</div>

      <p aria-label="Hero Section" className="basic-text">
        Hi, I am a Software Engineer based in Bengaluru, India, with a little
        over a year of experience in developing large-scale software
        applications and user experiences.
        <br />
        <br />I am a big fan of delightful user experience. I often find myself
        obsessed with typography, motion design, borders, shadows, and the list
        goes on and on. Currently, I am experimenting with some of them at
        ScribleUI.
      </p>
    </div>
  );
};

export default HeroSection;
