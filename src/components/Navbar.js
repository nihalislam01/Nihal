import { Box, Link, Tooltip, Typography } from "@mui/material";
import "../styles/Navbar.css";
import { useTheme } from "../utils/ThemeProvider";

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
            {
                icons.map(({ icon, title, link }) => (
                    <Tooltip key={title} title={title} disableTouchListener>
                        <Link href={link} target="_blank" rel="noopener noreferrer"><i className={icon}></i></Link>
                    </Tooltip>
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