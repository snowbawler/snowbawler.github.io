import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home";
import Crags from "./pages/Crags";
import Muck from "./pages/Muck";
import BridgeBill from "./pages/BridgeBill";

function App() {
    const location = useLocation();
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home/>} />
                <Route path='/Crags' element={<Crags/>}/>
                <Route path='/Muck' element={<Muck/>}/>
                <Route path='/BridgeBill' element={<BridgeBill/>}/>
                <Route path='*' element={<Home/>} />
            </Routes>
        </>
    );
}
 
export default App;