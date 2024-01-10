import React from "react"
import { Link } from "react-router-dom"
import transition from "../components/helper/transition";
import ReactPlayer from 'react-player'
import MuckTrailer from '../assets/MuckTrailer.mp4'
import './muck.css'

const Muck = () => {
    return(
        <>
            <div className="title">Muck.</div>
            <div className="video-container">    
                <ReactPlayer url={MuckTrailer}
                    controls={true}
                    volume={.15}
                    className='video'
                />
            </div>
            <Link preventScrollReset={true} to="/" style={{position: "absolute", top: "20px", left: "20px", padding: "10px 15px", background: "#F8971F", color: "#fff",  textDecoration: "none", borderRadius: "5px",  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", fontSize: "16px",}}>Back</Link>
        </>
    )
}

export default transition(Muck)