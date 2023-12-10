import React from "react";
import Lsp from "../Assets/lsp.png";
import Userex from "../Assets/userex.png";
import Trust from "../Assets/trust.png";

const Work = () => {
  const workInfoData = [
    {
      image: Lsp,
      title: "Case discovery and selection",
      text: "Browsing client-posted cases on the platform, review case details, and express interest in cases that align with their expertise",
    },
    {
      image: Userex,
      title: "Recommendation system",
      text: "Clients seeking legal representation can input case details, and the platform recommends lawyers based that",
    },
    {
      image: Trust,
      title: "Transparent and trustworthy",
      text: "Verified profiles, User Ratings, Real-Time Updates , Ticket Raising methods to ensure trust, transparency, and accountability ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">How We Work</h1>
        <p className="primary-text">
          Government of India initiative connecting clients with legal service providers by providing transparent and seamless experience with timely updates
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
