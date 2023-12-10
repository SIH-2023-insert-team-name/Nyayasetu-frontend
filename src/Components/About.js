import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Serving legal requirements of every citizen
        </h1>
        <p className="primary-text">
          Bridging the gap between legal service providers and users by providing a centralized
          platform and making the legal service sector of India organised and accessible to all.
        </p>
        <p className="primary-text">
        Integrating the platform with other legal service providers and institutions, such as courts, legal aid clinics, and bar associations of India.
        </p>
       
      </div>
    </div>
  );
};

export default About;
