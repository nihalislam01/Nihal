import { Typography } from "@mui/material";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { bottomFadeUp } from "../utils/Animation";

import Title from "./Title";

import "../styles/Experience.css";

const experience = [
    { 
        company: "Hubxpert", 
        position: "Software Engineer I", 
        duration: "Jun 2025 - Present", 
        website: "https://www.hubxpert.com",
        achievements: [
            " Monitored user data across internal systems and HubSpot CRM, synchronizing cross-platform data such as Monday, Nextech to HubSpot.",
            "Designed HubSpot workflows to automate business processes that maintain and optimize CRM operations for the sales representatives.",
            "Implemented Odoo ERP on Google Cloud Platform (GCP), deploying with NGINX, along with customization and module development.",
        ],
    },
    { 
        company: "Urban Layout BD", 
        position: "Software Support Engineer", 
        duration: "Oct 2024 - May 2025", 
        website: "https://www.urbanlayoutbd.com",
        achievements: [
            "Designed and implemented a CRM dashboard to automate project and customer relationship management, enhancing workflow efficiency by 35%.",
            "Developed a SEO-optimized WordPress website for the company, improving user experience and search visibility.",
            "Created a dynamic portfolio for the company manager using React.js, enhancing presentation and accessibility."
        ],
    },
    { 
        company: "Brac University", 
        position: "Computer Science Student", 
        duration: "Jun 2021 - May 2025", 
        website: "https://www.bracu.ac.bd",
        achievements: [
            "Scholarships: Achieved Merit Based Scholarship for maintaining required CGPA",
            "Coursework: Achieved Exceptional results in academic courses including Algorithms, OOP, Image Processing",
            "Research: A Decentralized Framework for Government Issued NID using Self Sovereign Identity",
        ],
    },
]

export default function Experience() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});

    return (
        <section id="experience" className="section-container experience-and-education">
            <Title title="Education &#38; Experience" />
            <div className="experience-container">
                <div className="experience-title">
                    {
                        experience.map(({ company }, index) => (
                            <Typography variant="h6" fontWeight={`${selectedIndex === index ? "bold": ""}`} sx={{borderRight: index === selectedIndex ? "2px solid var(--secondary-main)" : ""}} key={index} onClick={() => setSelectedIndex(index)}>
                                {company}
                            </Typography>
                        ))
                    }
                </div>
                <article ref={ref} className="details">
                    <Typography variant="h6" fontWeight="bold">{experience[selectedIndex].position} <a href={experience[selectedIndex].website} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-at"></i> {experience[selectedIndex].company}</a></Typography>
                    <Typography color="text.secondary" fontWeight="bold">{experience[selectedIndex].duration}</Typography>
                    <div className="achievements">
                        {
                            experience[selectedIndex].achievements.map((achievement, index) => (
                                <motion.article className="d-flex gap-2 align-items-start" key={`${index}-${selectedIndex}`} variants={bottomFadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={index*0.2}>
                                    <Typography variant="h6"><i className="fa-solid fa-caret-right experience-icons"></i></Typography>
                                    <Typography variant="h6" key={index}>{achievement}</Typography>
                                </motion.article>
                            ))
                        }
                    </div>
                </article>
            </div>
        </section>
    )
}