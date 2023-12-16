import React from "react"
import Projects from "../components/Projects"
import Scroll from "../components/Scroll.jsx"
import '../index.css'
import transition from "../components/helper/transition.jsx"

const Home = () => {
    return(
        <div>
            <Projects />
            <Scroll />
        </div>
    )
}

export default transition(Home)