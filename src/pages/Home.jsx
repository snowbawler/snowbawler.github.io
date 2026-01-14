import React, { useEffect, useState } from "react"
import Projects from "../components/Projects"
import Scroll from "../components/Scroll.jsx"
import '../index.css'

const Home = () => {
    const [showScrollHint, setShowScrollHint] = useState(false);

    const handleScroll = () => {
        sessionStorage.setItem("scrollY", window.scrollY);
        if (window.scrollY > 0 && !sessionStorage.getItem("scrollHintDismissed")) {
            sessionStorage.setItem("scrollHintDismissed", "true");
            setShowScrollHint(false);
        }
      };
      
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem("scrollY");
        if (scrollPosition) {
          window.scrollTo(0, parseInt(scrollPosition, 10));
          sessionStorage.removeItem("scrollY");
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {
        if (sessionStorage.getItem("scrollHintDismissed")) {
            return;
        }

        const timer = setTimeout(() => {
            if (!sessionStorage.getItem("scrollHintDismissed") && window.scrollY === 0) {
                setShowScrollHint(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <div>
            <Projects />
            <Scroll/>
            {showScrollHint && (
                <div className="scroll-hint" aria-hidden="true">
                    Scroll up
                </div>
            )}
        </div>
    )
}

export default Home
