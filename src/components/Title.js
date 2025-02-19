import { Typography } from "@mui/material";

export default function Title({title}) {
    return (
        <div className="title">
        <Typography variant="h4" fontWeight="bold">{title}</Typography>
        <div className="horizontal-line" />
    </div>
    )
}