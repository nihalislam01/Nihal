import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Project.css";
import { Link, Typography } from "@mui/material";
import Title from "./Title";

const repositories = [
    { name: "Hexis", description: "Blockchain-based fake product identification", link: "https://github.com/nihalislam01/Blockchain-Based-Fake-Product-Identification" },
    { name: "Executive Insight", description: "Task & employee management system", link: "https://github.com/nihalislam01/ExecutiveInsight" },
    { name: "BUOCA", description: "Brac University's office of co-curricular activities", link: "https://github.com/nihalislam01/BUOCA_IntraHacktive_T2" },
    { name: "Cinemax", description: "Movie ticket purchasing system", link: "https://github.com/nihalislam01/Online-Movie-Ticket-Purchasing-System" },
    { name: "Azaan App", description: "Islamic Prayer time teller", link: "https://github.com/nihalislam01/AzaanApp" },
    { name: "LMS", description: "Library management system", link: "https://github.com/nihalislam01/Library-Management-System" },
    { name: "Green Mentor", description: "Plant care assist application", link: "https://github.com/nihalislam01/GreenMentor" }
];

export default function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [offsetValue, setOffsetValue] = useState(80);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % repositories.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setOffsetValue(80);
            } else if (window.innerWidth > 768) {
                setOffsetValue(60);
            } else if (window.innerWidth > 426){
                setOffsetValue(50);
            } else {
                setOffsetValue(40);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="project" className="section-container project">
            <Title title="Projects" />
            <div className="carousel" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <AnimatePresence>
                    {repositories.map((repo, index) => {
                        const offsetIndex = (index - currentIndex + repositories.length) % repositories.length;
                        const rawIndex = (index===6 && currentIndex===0) ? -1 : (index - currentIndex);
                        const distance = Math.abs(offsetIndex);

                        return (
                            <motion.div key={index} className="slide" initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                animate={{
                                    opacity: distance === 0 ? 1 : (distance === 1 || rawIndex === -1) ? 0.6 : 0,
                                    y: rawIndex === -1 ? rawIndex * offsetValue : offsetIndex * offsetValue,
                                    scale: distance === 0 ? 1 : (distance === 1 || rawIndex === -1) ? 0.85 : 0.7,
                                }}>
                                <Link className="crate repo"  href={repo.link} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-regular fa-folder-open"></i>
                                    <Typography variant="h5" fontWeight="bold">{repo.name}</Typography>
                                    <i className="fa-solid fa-minus"></i>
                                    <Typography color="text.secondary">{repo.description}</Typography>
                                </Link>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
