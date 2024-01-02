import React from "react"
import { Link } from "react-router-dom"
import transition from "../components/helper/transition";

const PlaceHolder = () => {
    return(
        <>
            <h1>Placeholder</h1>
            <Link preventScrollReset={true} to="/">Back</Link>
        </>
    )
}

export default transition(PlaceHolder)