import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home";
// import Crags from "./pages/Crags";
import Muck from "./pages/Muck";
import BridgeBill from "./pages/BridgeBill";
import LonghornRacing from "./pages/LonghornRacing";


import { AnimatePresence } from "framer-motion";


function App() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home/>} />
                    {/* <Route path='/Crags' element={<Crags/>}/> */}
                
                    <Route path='/LonghornRacing' element={<LonghornRacing/>}/>
                    <Route path='/Muck' element={<Muck/>}/>
                    <Route path='/BridgeBill' element={<BridgeBill/>}/>
                    <Route path='*' element={<Home/>} />
                </Routes>
            </AnimatePresence>
        </>
    );
}
 
export default App;
