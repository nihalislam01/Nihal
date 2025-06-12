import { Typography, Tooltip } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { bottomFadeUp, bottomSpringUp } from "../utils/Animation";
import { useRef } from "react";

import "../styles/Intro.css";

const icons = [
    {
        icon: "fa-solid fa-envelope",
        title: "Send Email",
        link: "mailto:nihalislam2@gmail.com"
    },
    {
        icon: "fa-brands fa-linkedin",
        title: "LinkedIn Profile",
        link: "https://www.linkedin.com/in/nihal-islam"
    },
    {
        icon: "fa-brands fa-github",
        title: "GitHub Profile",
        link: "https://www.github.com/nihalislam01"
    },
]

export default function Intro() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});
    
    return (
        <section ref={ref} className="section-container intro">
            <motion.article className="header-box" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp}>
                <Typography variant="h2" fontWeight="bold">Nihal Islam</Typography>
                <Typography variant="h6" className="quote">Computer Science | Python/Java | MERN | Blockchain</Typography>
            </motion.article>
            <motion.article initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp} custom={0.2}>
                <Typography variant="h6" textAlign="center" color="text.secondary">Hi, my name is Nihal. I am a Software Engineer who enjoys playing with tools and technologies. I help solving large-scale, real-world problems by building technical products. Let's connect!</Typography>
            </motion.article>
            <div className="icons">
                {
                    icons.map(({ icon, title, link }, index) => (
                        <motion.div key={title} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={(index+2)*0.2}>
                            <Tooltip title={title} disableTouchListener>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <div className="crate icon-container"><i className={`${icon} medium-icons`}></i></div>
                                </a>
                            </Tooltip>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}