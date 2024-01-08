import React from "react";
import { Link } from "react-router-dom";
import transition from "../components/helper/transition";
import CragCase from "../assets/CragCase.svg";

const Crags = () => {
    return (
        <>
            <img src={CragCase} style={{ position: 'relative', maxWidth:'100vw', width: '100vw', height: 'auto', objectFit: 'contain' }} />
            <Link preventScrollReset={true} to="/">Back</Link>
        </>
    );
};

export default transition(Crags);