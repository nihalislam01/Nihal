import { Typography } from "@mui/material";
import { useRef, useState } from "react";
import "../styles/Experience.css";
import Title from "./Title";
import { motion, useInView } from "framer-motion";
import { bottomFadeUp } from "../utils/Animation";

const experience = [
    { 
        company: "Urban Layout BD", 
        position: "Software Developer", 
        duration: "Oct 2024 - Present", 
        achievements: [
            "Designed and implemented a CRM dashboard to automate project and customer relationship management, enhancing workflow efficiency by 35%.",
            "Developed an SEO-optimized WordPress website for the company, improving user experience and search visibility.",
            "Created a dynamic portfolio for the company manager using React.js, enhancing presentation and accessibility."
        ],
    },
    { company: "Brac University", 
        position: "Computer Science Student", 
        duration: "Expected May 2025", 
        achievements: [
            "Scholarships: Achieved Merit Based Scholarship for maintaining required CGPA",
            "Participations: Bracu Programming Contest 2022, Bracu IntraHacktive Hackathon 2024",
            "Coursework: Achieved Exceptional results in academic courses including Algorithms, OOP, Image Processing"
        ],
    },
]

export default function Experience() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});

    return (
        <div id="experience" className="section-container experience-and-education">
            <Title title="Education &#38; Experience" />
            <div className="experience-container">
                <div className="experience-title">
                    {
                        experience.map(({ company }, index) => (
                            <Typography fontWeight={`${selectedIndex === index ? "bold": ""}`} sx={{borderRight: index === selectedIndex ? "2px solid var(--secondary-main)" : ""}} key={index} onClick={() => setSelectedIndex(index)}>
                                {company}
                            </Typography>
                        ))
                    }
                </div>
                <div ref={ref} className="details">
                    <Typography variant="h6" fontWeight="bold">{experience[selectedIndex].position} <i className="fa-solid fa-at"></i> {experience[selectedIndex].company}</Typography>
                    <Typography color="text.secondary" fontWeight="bold">{experience[selectedIndex].duration}</Typography>
                    <div className="achievements">
                        {
                            experience[selectedIndex].achievements.map((achievement, index) => (
                                <motion.div key={`${index}-${selectedIndex}`} variants={bottomFadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={index*0.2}>
                                    <div className="d-flex gap-2 align-items-start">
                                        <Typography><i className="fa-solid fa-caret-right experience-icons"></i></Typography>
                                        <Typography key={index}>{achievement}</Typography>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}