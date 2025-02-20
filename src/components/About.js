import { CardMedia, Tooltip, Typography } from "@mui/material";
import "../styles/About.css";
import { motion, useInView } from "framer-motion";
import { bottomSpringUp } from "../utils/Animation";
import { useEffect, useRef, useState } from "react";

const tools = ["Python", "Java", "C++", "Javascript ES6+", "Solidity", "React.js", "Spring Boot", "SQL"]
const contact = [
    {
        title: "Dev Community Profile",
        icon: "fa-brands fa-dev",
        link: "https://dev.to/nihalislam01"
    },
    {
        title: "Discord Profile",
        icon: "fa-brands fa-discord",
        link: "https://discord.com/users/bing9235"
    },
    {
        title: "YouTube Profile",
        icon: "fa-brands fa-youtube",
        link: "https://www.youtube.com/@nihalislam7928"
    },
    {
        title: "WhatsApp Profile",
        icon: "fa-brands fa-whatsapp",
        link: "https://wa.me/+8801830028981"
    },
]

export default function About() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});
    const [customValue, setCustomValue] = useState(1.0);
  
    useEffect(() => {
      const updateCustom = () => {
        const width = window.innerWidth;
        if (width < 1024) setCustomValue(0.6);
      };
  
      updateCustom();
      window.addEventListener("resize", updateCustom);
      
      return () => window.removeEventListener("resize", updateCustom);
    }, []);


    return (
        <div ref={ref} id="about" className="section-container about">
            <div className="row-one">
                <motion.div className="about-me-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp}>
                    <div className="crate about-me">
                        <Typography>I am currently studying Computer Science at Brac University. I am highly fascinated by full-stack development, cryptography and blockchain. On my spare time I watch a lot of YouTube videos. </Typography>
                        
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <Typography color="text.secondary">Computer Science Student <i className="fa-solid fa-at"></i> Brac University</Typography>
                                <Typography variant="h6" fontWeight="bold">About Me</Typography>
                            </div>
                            <i className="fa-regular fa-circle-user big-icons"></i>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="media-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={0.2}>
                    <CardMedia component="img" image="assets/me.jpeg" alt="Profile" className="media" />
                </motion.div>
            </div>
            <div className="row-two">
                <motion.div className="skill-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={0.4}>
                <div className="crate skill">
                    <div className="d-flex">
                        <div className="w-100">
                            {
                                tools.slice(0, 4).map((tool, index) => (
                                    <Typography key={index} className="tools"><i className="fa-solid fa-caret-right"></i> {tool}</Typography>
                                ))
                            }
                        </div>
                        <div className="w-100">
                            {
                                tools.slice(4).map((tool, index) => (
                                    <Typography key={index} className="tools"><i className="fa-solid fa-caret-right"></i> {tool}</Typography>
                                ))
                            }
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Typography color="text.secondary">Some of the technologies I have been working with</Typography>
                            <Typography  variant="h6" fontWeight="bold">Tools &#38; Technologies</Typography>
                        </div>
                        <i className="fa-solid fa-gear big-icons"></i>
                    </div>
                </div>
                </motion.div>
                <div className="col-one">
                    <div className="col-one-row-one">
                        <motion.div className="experience-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={0.6}>
                            <a href="#experience"><div className="crate about-experience">
                                <i className="fa-solid fa-briefcase big-icons text-center"></i>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Typography fontWeight="bold">Experience</Typography>
                                    <i className="fa-regular fa-circle-right"></i>
                                </div>
                            </div></a>
                        </motion.div>
                        <motion.div className="project-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={0.8}>
                        <a href="#project"><div className="crate about-project">
                                <i className="fa-solid fa-desktop big-icons text-center"></i>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Typography fontWeight="bold">Projects</Typography>
                                    <i className="fa-regular fa-circle-right"></i>
                                </div>
                            </div></a>
                        </motion.div>
                    </div>
                    <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={customValue}>
                        <div className="crate contact">
                            {
                                contact.map((contact, index) => (
                                    <Tooltip key={index} title={contact.title} disableTouchListener>
                                        <a href={contact.link} target="_blank" rel="noopener noreferrer"><i className={`${contact.icon} medium-icons`}></i></a>
                                    </Tooltip>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}