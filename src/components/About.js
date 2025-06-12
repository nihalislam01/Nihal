import { CardMedia, Tooltip, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { bottomSpringUp } from "../utils/Animation";
import { useEffect, useRef, useState } from "react";

import "../styles/About.css";
const tools = [
    { name: "Python", logo: "fa-brands fa-python" },
    { name: "Java", logo: "fa-brands fa-java" },
    { name: "Swift", logo: "fa-brands fa-swift" },
    { name: "Javascript ES6+", logo: "fa-brands fa-js" },
    { name: "Solidity", logo: "fa-brands fa-ethereum" },
    { name: "React.js", logo: "fa-brands fa-react" },
    { name: "Spring Boot", logo: "fa-solid fa-leaf" },
    { name: "SQL", logo: "fa-solid fa-database" }
];
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
        title: "YouTube Channel",
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
        <section ref={ref} id="about" className="section-container about">
            <div className="row-one">
                <motion.div className="about-me-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp}>
                    <div className="crate about-me">
                        <Typography>I am a Software Engineer Intern. I am highly fascinated by devops engineering, cryptography and blockchain. On my spare time I play games and watch a lot of YouTube videos. </Typography>
                        
                        <div className="d-flex justify-content-between align-items-center">
                            <article>
                                <Typography className="crate-title" color="text.secondary">Software Engineer Intern <a href="https://hubxpert.com" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-at"></i> Hubxpert</a></Typography>
                                <Typography variant="h6" fontWeight="bold">About Me</Typography>
                            </article>
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
                        <article className="w-100">
                            {
                                tools.slice(0, 4).map((tool, index) => (
                                    <Typography key={index} className="tools"><i className={tool.logo}></i> {tool.name}</Typography>
                                ))
                            }
                        </article>
                        <article className="w-100">
                            {
                                tools.slice(4).map((tool, index) => (
                                    <Typography key={index} className="tools"><i className={tool.logo}></i> {tool.name}</Typography>
                                ))
                            }
                        </article>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <article>
                            <Typography className="crate-title" color="text.secondary">Some of the technologies I have been working with</Typography>
                            <Typography  variant="h6" fontWeight="bold">Tools &#38; Technologies</Typography>
                        </article>
                        <i className="fa-solid fa-gear big-icons"></i>
                    </div>
                </div>
                </motion.div>
                <div className="col-one">
                    <div className="col-one-row-one">
                        <motion.div className="experience-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={0.6}>
                            <a href="#experience"><div className="crate about-experience">
                                <i className="fa-solid fa-briefcase big-icons text-center"></i>
                                <Typography fontWeight="bold">Experience</Typography>
                            </div></a>
                        </motion.div>
                        <motion.div className="project-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={0.8}>
                        <a href="#project"><div className="crate about-project">
                                <i className="fa-solid fa-desktop big-icons text-center"></i>
                                <Typography fontWeight="bold">Projects</Typography>
                            </div></a>
                        </motion.div>
                    </div>
                    <motion.div className="contact-motion" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={bottomSpringUp} custom={customValue}>
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
        </section>
    )
}