import React from "react";
import { Link } from "react-router-dom";
import transition from "../components/helper/transition";
import CragCase from "../assets/CragCase.svg";

const Crags = () => {
    return (
        <>
            <img src={CragCase} style={{ position: 'absolute', maxWidth:'100vw', width: '100vw', height: 'auto', objectFit: 'contain' }} />
            <Link to="/" style={{                    position: "absolute",
                    top: "20px", // Adjust the top position according to your design
                    left: "20px", // Adjust the left position according to your design
                    padding: "10px 15px",
                    background: "#F8971F", // Set the background color
                    color: "#fff", // Set the text color
                    textDecoration: "none",
                    borderRadius: "5px", // Add rounded corners
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
                    fontSize: "16px",}}>Back</Link>
        </>
    );
};

export default transition(Crags);