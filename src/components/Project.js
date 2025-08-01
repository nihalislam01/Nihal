import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Typography } from "@mui/material";

import Title from "./Title";

import "../styles/Project.css";

const repositories = [
    { 
        name: "Hexis", 
        description: "Blockchain-based fake product identification", 
        link: "https://github.com/nihalislam01/Blockchain-Based-Fake-Product-Identification",
        stack: "MERN | Solidity | DLT",
        short: "Fake product identification"
    },
    { 
        name: "CEHR", 
        description: "Cryptographic Electronic Health Record System", 
        link: "https://github.com/nihalislam01/Cryptographic-EHR-System",
        stack: "Flask | React.js | MySQL | AES | RSA",
        short: "Cryptographic EHR System"
    },
    { 
        name: "DID", 
        description: "Decentralized Identity System", 
        link: "https://github.com/nihalislam01/Decentralized-Identity-System",
        stack: "Node.js (Express.js) | Solidity | DLT",
        short: "Decentralized Identity System"
    },
    { 
        name: "Executive Insight", 
        description: "Task & employee management system", 
        link: "https://github.com/nihalislam01/ExecutiveInsight" ,
        stack: "Spring Boot | React.js | MySQL",
        short: "Task management system"
    },
    { 
        name: "BUOCA", 
        description: "Brac University's office of co-curricular activities", 
        link: "https://github.com/nihalislam01/BUOCA_IntraHacktive_T2" ,
        stack: "MERN | WebSocket | Chart.js",
        short: "Office of co-curricular activities"
    },
    { 
        name: "Azaan App", 
        description: "Islamic Prayer time teller", 
        link: "https://github.com/nihalislam01/AzaanApp" ,
        stack: "Swift | Al Adhan API",
        short: "Islamic Prayer time teller"
    },
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
        <section id="project" className="section-container project">
            <Title title="Projects" />
            <div className="carousel" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <AnimatePresence>
                    {repositories.map((repo, index) => {
                        const offsetIndex = (index - currentIndex + repositories.length) % repositories.length;
                        const rawIndex = (index===(repositories.length-1) && currentIndex===0) ? -1 : (index - currentIndex);
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
                                    <Typography className="repo-name" variant="h6" fontWeight="bold">{repo.name}</Typography>
                                    <span className="minus-icon"><i className="fa-solid fa-minus"></i></span>
                                    <Typography className="desc" color="text.secondary">{repo.description}</Typography>
                                    <Typography className="short-desc" color="text.secondary">{repo.short}</Typography>
                                    <Typography className="stack" color="text.secondary">{repo.stack}</Typography>
                                </Link>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </section>
    );
}
