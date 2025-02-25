import { Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { bottomFadeUp } from "../utils/Animation";
import { useRef } from "react";

import "../styles/Intro.css";

export default function Intro() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});
    
    return (
        <section ref={ref} className="section-container intro">
            <motion.article className="header-box" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp}>
                <Typography variant="h2" fontWeight="bold">Nihal Islam</Typography>
                <Typography>Computer Science | Python/Java | MERN | Blockchain</Typography>
            </motion.article>
            <motion.article initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp} custom={0.2}>
                <Typography variant="h6" textAlign="center" color="text.secondary">Hi, my name is Nihal. I am a final semester Computer Science student who enjoys playing with tools and technologies. I help solving real world problems by building technical products. Feel free to leave a message!</Typography>
            </motion.article>
            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp} custom={0.4}>
                <Button href="mailto:nihalislam2@gmail.com" target="_blank" rel="noopener noreferrer" className="crate email">
                    <Typography variant="h6"><i className="fa-regular fa-envelope"></i> Let's Connect</Typography>
                </Button>
            </motion.div>
        </section>
    )
}