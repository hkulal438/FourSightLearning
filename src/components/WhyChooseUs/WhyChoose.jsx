import React from "react";
import "../WhyChooseUs/WhyChoose.css";
import { FaGlobe, FaAnchor, FaHourglassHalf, FaDatabase, FaUpload, FaCamera } from "react-icons/fa";

const features = [
  {
    icon: <FaGlobe />,
    title: "Modern Design",
    text: "We use the latest technology for the modern world because we know the demands of people.",
  },
  {
    icon: <FaAnchor />,
    title: "Creative Design",
    text: "We listen to our customers and combine creativity with practicality to make the best designs.",
  },
  {
    icon: <FaHourglassHalf />,
    title: "24 x 7 User Support",
    text: "If our customer has any problem or query, we’re always happy to help them.",
  },
  {
    icon: <FaDatabase />,
    title: "Business Growth",
    text: "Everyone wants to live on top of the mountain, but all the happiness and growth occur while climbing it.",
  },
  {
    icon: <FaUpload />,
    title: "Market Strategy",
    text: "We embrace technology instead of holding it back, enabling our clients to evolve fast.",
  },
  {
    icon: <FaCamera />,
    title: "Affordable Cost",
    text: "Quality service shouldn’t be expensive. We deliver excellence at affordable prices.",
  },
];

const WhyChoose = () => {
  return (
    <div className="whychoose-section">
      <div className="whychoose-container">
        <div className="section-header">
          <h4>
            <span>Why Choose</span> Us?
          </h4>
          <p>
            When you choose us, you’ll feel the benefit of 10 years’ experience in web development. We understand
            the digital world and how to help your business grow through online presence, SEO, and social media.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h6>{feature.title}</h6>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
