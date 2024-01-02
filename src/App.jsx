import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home";
import Crags from "./pages/Crags";
import PlaceHolder from "./pages/Page2";

import { AnimatePresence } from "framer-motion";



function App() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home/>} />
                    <Route path='/Crags' element={<Crags/>}/>
                    <Route path='/PlaceHolder' element={<PlaceHolder/>}/>
                    <Route path='*' element={<Home/>} />
                </Routes>
            </AnimatePresence>
        </>
    );
}
 
export default App;