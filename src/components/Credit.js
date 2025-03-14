import { Typography } from "@mui/material";

import "../styles/Credit.css";

export default function Credit() {
    return (
        <footer className="section-container credit">
            <Typography color="text.secondary">All rights reserved. <i className="fa-regular fa-copyright"></i> | Designed and developed by Nihal Islam</Typography>
            <Typography color="text.secondary">Bangladesh, Earth</Typography>
        </footer>
    )
}