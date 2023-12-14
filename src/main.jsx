import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Projects from "./components/Projects"
import Scroll from "./components/Scroll.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Projects />
    <Scroll />
  </React.StrictMode>,
)
