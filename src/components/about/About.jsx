import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/shawn.png" alt="" />
        </div>
      </div>
      <div className="right">
          <h4>
            I'm Shawn Rodrigo, a passionate software developer with nearly two
            years of experience. A firm believer in luck; the harder you work,
            the more of it you have. Adaptable and collaborative, I thrive on
            solving problems and embracing new challenges.
          </h4>
     
      </div>
    </div>
  );
}
