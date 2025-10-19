import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { bottomFadeUp } from "../utils/Animation";

import '../styles/Feature.css';
import Title from "./Title";

const features = [
    {
        image: "assets/feature1.jpeg",
        title: "Performer of the Month - Hubxpert",
        description: "Awarded Performer of the Month for exceptional performance and dedication to project success during my first month as a Software Engineer"
    },
    {
        image: "assets/feature2.jpeg",
        title: "1st Runner Up - HackNsu Season 05",
        description: "Achieved 1st Runner Up position in HackNsu Season 05 where we built a Blockchain-based Land Registry System within 8 hours"
    },
]

const Feature = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});

    return (
        <section ref={ref} id="feature" className="section-container feature">
            <Title title="Features" />
            <motion.div className="about-me-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp}>
                <Carousel className="feature-carousel">
                    {features.map((feature, index) => (
                        <Carousel.Item key={index}>
                            <div className="feature-img-wrapper">
                                <img className="feature-img" src={feature.image} alt={index}/>
                                <div className="feature-overlay"></div>
                            </div>
                            <div className="caption-bg">
                                <Carousel.Caption>
                                    <h4 className="feat-title">{feature.title}</h4>
                                    <p className="feat-desc">{feature.description}</p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </motion.div>
        </section>
    );
}

export default Feature;