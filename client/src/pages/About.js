//import styling
//import images from img folder

const data = [
    {
        heading: 'Our Mission',
        text: "Our mission is to empower former inmates with the necessary counseling and support to facilitate their successful reintegration into society, fostering personal growth and enabling them to become positive contributors to their communities. Through comprehensive and tailored counseling programs, we strive to break the cycle of recidivism, promoting individual transformation and societal well-being.",
        image: helpingHands,
    },
    {
        heading: 'Break out of the cycle',
        text: "Seeking mental health help shows tremendous strength and a genuine commitment to personal growth and longterm well-being",
        image: behindBars,
    },
    {
        heading: 'Find your mental health professional',
        text: "Choose from top therapists who have experience in helping people just like you embrace the healing they deserve",
        image: twoPeople,
    },
    {
        heading: 'Continue investing in a brighter tomorrow',
        text: "Help others rewrite their story to live a life filled with purpose, joy and fulfillment"
        image: notePad,
    },
];

const About = () => {
    return (
        <main className="bodyContent" id="aboutContent">
            {data.map((item, i) =>{
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