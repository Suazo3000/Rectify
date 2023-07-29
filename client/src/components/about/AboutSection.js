// Import necessary dependencies and css file
import React from "react";
import "../../utils/css/AboutSection.css";

// Define the AboutSection function and return the component 
const AboutSection = ({ heading, text, image, sections, key }) => {
  return (
    <section className={"aboutPage section" + (sections + 1)}>
      <div className="aboutText">
        <h2 className="aboutHeading">{heading}</h2>
        <p className="bodyContent">{text}</p>
      </div>
      <img src={image} alt="images" className="aboutImg" />   
    </section>
  );
};

// Export the AboutSection
export default AboutSection;
