import React from "react"
import Projects from "../components/Projects"
import Scroll from "../components/Scroll.jsx"
import '../index.css'

export default function Home() {
    return(
        <div>
            <Projects />
            <Scroll />
        </div>
    )
}