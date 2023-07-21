// import '../utils/css/About.css';
import React from 'react';
import about2 from '../img/about2.png';
import about3 from '../img/about3.png';
import about4 from '../img/about4.png';
import AboutSection from '../components/about/AboutSection';

const data = [
  {
    heading: "Our Mission",
    text: "We are dedicated to empowering individuals who have previously been incarcerated with the essential guidance and support they need to smoothly transition back into society. Our primary goal is to foster personal growth and provide the tools necessary for them to become valuable and positive assets within their communities.",
    image: about2,
  },
  {
    heading: "Break out of the cycle",
    text: "At the core of our mission lies a commitment to break the cycle of recidivism. Through meticulously designed and individual counseling programs, we address the unique challenges faced by former inmates, encouraging profound transformations on both personal and societal levels.",
    image: about3,
  },
  {
    heading: "Find your mental health professional",
    text: "By offering comprehensive and tailored support, we aim to be catalyst for change, equipping individuals with the skills and mindset required to embrace their second chance with confidence and purpose. Join us on this transformative journey as we strive to create a brighter and more inclusive future for everyone involved. Together, we can make a lasting impact on the lives of those seeking to rebuild their futures and contribute positively to the world around them.",
    image: about4,
  },
];

const About = () => {
  return (
    <main className="bodyContent" id="aboutPage">
      {data.map((item, i) => {
        return (
          <AboutSection
            key={i}
            sections={i}
            heading={item.heading}
            text={item.text}
            image={item.image}
          />
        );
      })}
    </main>
  );
};

export default About;
