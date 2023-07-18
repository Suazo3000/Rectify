import React from 'react';
import '../../utils/css/AboutSection.css';

const AboutSection = ({ heading, text, image, sections }) => {
    return (
        <section className={'aboutPage section' + (sections +1)}>
            <div className="aboutText">
                <h2 className="aboutHeading">{heading}</h2>
                <p className="bodyContent">{text}</p>
            </div>
            <img src={image} alt="images" className="aboutImg" />
        </section>
    );
};

export default AboutSection;