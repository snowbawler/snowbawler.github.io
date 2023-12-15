import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Projects from "./components/Projects"
import Scroll from "./components/Scroll.jsx"
import Home from './pages/Home.jsx'
import App from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
