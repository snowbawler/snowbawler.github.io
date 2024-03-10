import React from "react"
import { useEffect } from 'react';
import { Link } from "react-router-dom"
import ReactPlayer from 'react-player'
import MuckTrailer from '../assets/MuckTrailer.mp4'
import MuckPlan from '../assets/MuckPlan.svg'
import GPB from '../assets/GPB.png'
import pitch from '../assets/pitch.png'
import pitchpdf from '../assets/pitch.pdf'
import './pages.css'

const Muck = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
    }, []);

    return(
        <div className="muckBody">
            <div className="title">Muck.</div>
            <div className="video-container">    
                <ReactPlayer url={MuckTrailer}
                    controls={true}
                    volume={.15}
                    className='video'
                />
            </div>
            <Link to="/" style={{position: "absolute", top: "20px", left: "20px", padding: "10px 15px", background: "#F8971F", color: "#fff",  textDecoration: "none", borderRadius: "5px",  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", fontSize: "16px",}}>Back</Link>
            <div className="heading">Project Roadmap</div>
            <img className="muckPlan" src={MuckPlan}></img>
            <div className="muckGP-container">
                <a href={pitchpdf}  target="_blank">
                    <img className="muckGP" src={pitch} alt="" />
                </a>
                <img className="muckGP" src={GPB}></img>
            </div>
            <a className="heading" style={{paddingBottom:"10vh"}} href="https://snowbawler.itch.io/muck">Play!</a>
        </div>
    )
}

export default Muck