import { Box, Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import "../styles/Intro.css";
import { bottomFadeUp } from "../utils/Animation";
import { useRef } from "react";

export default function Intro() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});
    
    return (
        <Box ref={ref} className="section-container intro">
            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp}>
                <Box className="header-box">
                    <Typography variant="h2" fontWeight="bold">Nihal Islam</Typography>
                    <Typography>Computer Science | Python/Java | MERN | Blockchain</Typography>
                </Box>
            </motion.div>
            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp} custom={0.2}>
                <Typography variant="h6" textAlign="center" color="text.secondary">Hi, my name is Nihal. I am a final semester Computer Science student who enjoys playing with tools and technologies. I help solving real world problems by building technical products. Feel free to leave a message!</Typography>
            </motion.div>
            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomFadeUp} custom={0.4}>
                <Button href="mailto:nihalislam2@gmail.com" target="_blank" rel="noopener noreferrer" className="crate email">
                    <Typography variant="h6"><i className="fa-regular fa-envelope"></i> Let's Connect</Typography>
                </Button>
            </motion.div>
        </Box>
    )
}