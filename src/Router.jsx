import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Crags from "./pages/Crags";
import PlaceHolder from "./pages/Page2";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Crags" element={<Crags />} />
                <Route path="/Page2" element={<PlaceHolder />} />
            </Routes>
        </Router>
    );
}
 
export default App;