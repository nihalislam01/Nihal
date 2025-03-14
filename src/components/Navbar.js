import { Box, Link, Tooltip, Typography } from "@mui/material";
import { useTheme } from "../utils/ThemeProvider";

import "../styles/Navbar.css";

const sections = [
    {
        title: "About",
        link: "#about"
    },
    {
        title: "Education",
        link: "#experience"
    },
    {
        title: "Experience",
        link: "#experience"
    },
    {
        title: "Project",
        link: "#project"
    },
]

export default function Navbar() {
    const theme = useTheme();
    const { darkMode, setDarkMode } = theme;
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }
    return (
        <header className="section-container navigation">
            <Typography className="header">NIHAL</Typography>
            {
                sections.map(({ title, link }) => (
                    <Link key={title} href={link} fontSize="12px" className="sections">{title}</Link>
                ))
            }
            <Tooltip title={`${darkMode ? "Lumos": "Nox"}`} disableTouchListener>
                <Box className="theme-box">
                    <Box className={`${darkMode ? "": "selected"}`}>
                        <i className="fa-solid fa-sun" onClick={toggleTheme} style={{cursor: "pointer"}}></i>
                    </Box>
                    <Box className={`${darkMode ? "selected": ""}`}>
                        <i className="fa-solid fa-moon" onClick={toggleTheme} style={{cursor: "pointer"}}></i>
                    </Box>
                </Box>
            </Tooltip>
        </header>
    )
}