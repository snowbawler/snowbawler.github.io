import React from "react"
import { useNavigate } from "react-router-dom"

export default function PlaceHolder() {
    const navigate = useNavigate();
    return(
        <>
            <h1>Placeholder</h1>
            <button onClick={() => navigate(-1)}>back</button>
        </>
    )
}